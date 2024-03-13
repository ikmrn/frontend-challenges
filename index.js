const container = document.querySelector(".container");
const filterOptions = document.querySelector(".filter__options");
const filterCategories = ["role", "level", "languages", "tools"];
const filterValues = {};
let data;

async function main() {
  /* Fetch Data */
  try {
    data = await fetchData();
  } catch (error) {
    console.error(error.message);
  }
  generateCards();
  addMarginToFirstCard();
}

async function fetchData() {
  try {
    const response = await fetch("data.json");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw new Error("Error fetching JSON: " + error);
  }
}

function generateCards() {
  // Clear the container before generating new cards
  container.innerHTML = "";
  let filteredData;

  // Check if the filter object is empty
  if (Object.keys(filterValues).length !== 0) {
    filteredData = applyFilter(data);

    container.appendChild(updateFilterTab());
  } else {
    filteredData = data;
  }

  filteredData.forEach((jobListing) => {
    const cardHTML = createCard(jobListing);
    container.appendChild(cardHTML);
  });
  addMarginToFirstCard();
}

function createCard(jobListing) {
  const isNew = jobListing.new ? '<span class="card__new">New!</span>' : "";
  const isFeatured = jobListing.featured
    ? '<span class="card__feat">Featured</span>'
    : "";

  const isFeaturedClass = jobListing.featured ? "card--featured-cyan" : "";

  const optionsHTML = filterCategories
    .map((filterCategory) => {
      if (Array.isArray(jobListing[filterCategory])) {
        return jobListing[filterCategory]
          .map(
            (item) =>
              `<span class="card__tag" data-key="${filterCategory}" >${item}</span>`
          )
          .join("");
      } else {
        return `<span class="card__tag" data-key="${filterCategory}">${jobListing[filterCategory]}</span>`;
      }
    })
    .join("");

  // Create HTML string for the card
  const cardHTML = `
    <div class="card ${isFeaturedClass}">
      <div class="card__description">
        <img src="${jobListing.logo}" alt="${jobListing.company}" class="card__logo"/>
        <div class="card__description-container">
          <div class="card__header">
            <h2 class="card__company">${jobListing.company}</h2>${isNew}${isFeatured}
          </div>
          <p class="card__position">${jobListing.position}</p>
          <ul class="card__info">
            <li class="card__posted">${jobListing.postedAt}</li>
            <li class="card__contract">${jobListing.contract}</li>
            <li class="card__location">${jobListing.location}</li>
          </ul>
        </div>
      </div>
      <div class="card__filter-options">
        ${optionsHTML}
      </div>
  </div>`;

  // Convert cardHTML string to DOM elements
  const cardFragment = document
    .createRange()
    .createContextualFragment(cardHTML);

  // Add event listeners to individual elements
  filterCategories.forEach((filterCategory) => {
    cardFragment
      .querySelectorAll(`.card__tag[data-key="${filterCategory}"]`)
      .forEach((tag) => {
        tag.addEventListener("click", () => {
          addFilterTag(tag, filterCategory);
          generateCards();
        });
      });
  });
  // Return the DocumentFragment containing the card
  return cardFragment;
}

function addFilterTag(tag, property) {
  if (filterValues[property] === undefined) {
    // Check if the property doesn't exist in filter
    filterValues[property] = []; // Initialize the  property as an empty array
  }

  if (!filterValues[property].includes(tag.textContent)) {
    filterValues[property].push(tag.textContent);
  }
}

function applyFilter(data) {
  return data.filter((item) => {
    let filterMatches = 0;

    for (const property in filterValues) {
      if (Array.isArray(item[property])) {
        // Check if all elements in the filterOptions[property] array are included in the item[property] array
        if (
          filterValues[property].every((filterValue) =>
            item[property].includes(filterValue)
          )
        ) {
          filterMatches++;
        }
      } else {
        // For non-array properties, simply check if the values match
        if (
          !item[property] ||
          filterValues[property].includes(item[property])
        ) {
          filterMatches++;
        }
      }
    }

    return filterMatches === Object.keys(filterValues).length;
  });
}

function updateFilterTab() {
  let filterHTML = `<div class='filter'><div class="filter__options">`;
  Object.entries(filterValues).forEach(([key, values]) => {
    values.forEach((value) => {
      filterHTML += `
      <div class="filter__element" data-key=${key}>
        <button class="filter__tag">${value}</button>
        <img src="images/icon-remove.svg" class="filter__close" alt="" />
      </div>
      `;
    });
  });
  filterHTML += `</div><button class="filter__clear">Clear</button></div>`;

  const filterFragment = document
    .createRange()
    .createContextualFragment(filterHTML);

  const filterTags = filterFragment.querySelectorAll(".filter__element");
  const filterClear = filterFragment.querySelector(".filter__clear");

  /* Event Listeners */
  filterClear.addEventListener("click", () => {
    for (const key in filterValues) {
      delete filterValues[key];
    }
    generateCards();
  });

  filterTags.forEach((filterTag) => {
    filterTag.addEventListener("click", (event) => {
      const keyValue = filterTag.getAttribute("data-key");
      const valueToRemove = filterTag.querySelector("button").textContent;

      console.log(keyValue, valueToRemove)
      if (Array.isArray(filterValues[keyValue])) {
        const indexToRemove = filterValues[keyValue].indexOf(valueToRemove);
        if (indexToRemove !== -1) {
          filterValues[keyValue].splice(indexToRemove, 1);
        }
        // Check if the array is empty after removal and delete the property if so
        if (filterValues[keyValue].length === 0) {
          delete filterValues[keyValue];
        }
      } else {
        // For single values
        // Remove the property from the filterValues object
        delete filterValues[keyValue];
      }
      generateCards();
    });
  });

  return filterFragment;
}

// Function to add class with margin to first card
function addMarginToFirstCard() {
  const firstCard = document.querySelector(".card");
  const filterContainer = document.querySelector(".filter");

  if (!filterContainer) {
    firstCard.classList.add("card__margin-top");
  } else {
    firstCard.classList.remove("card__margin-top");
  }
}

main();
