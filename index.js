const container = document.querySelector(".container");
const options = ["role", "level", "languages", "tools"];
const filterOptions = {};
let data;

async function main() {
  /* Fetch Data */
  try {
    data = await fetchData();
  } catch (error) {
    console.error(error.message);
  }

  generateCards();
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
  if (Object.keys(filterOptions).length !== 0) {
    filteredData = applyFilter(data);

    // container.appendChild(createFilterTab(filterOptions));
  } else {
    filteredData = data;
  }

  filteredData.forEach((element) => {
    const cardHTML = createCard(element);
    container.appendChild(cardHTML);
  });
}

function createCard(element) {
  const isNew = element.new ? '<span class="card__new">New!</span>' : "";
  const isFeatured = element.featured
    ? '<span class="card__feat">Featured</span>'
    : "";

  const isFeaturedClass = element.featured ? "card--featured-cyan" : "";

  const optionsHTML = options
    .map((option) => {
      if (Array.isArray(element[option])) {
        return element[option]
          .map((item) => `<span class="card__${option} tag">${item}</span>`)
          .join("");
      } else {
        return `<span class="card__${option} tag">${element[option]}</span>`;
      }
    })
    .join("");

  // Create HTML string for the card
  const cardHTML = `
    <div class="card ${isFeaturedClass}">
    <img src="${element.logo}" alt="${element.company}" class="card__logo"/>
    <div>
      <h2 class="card__company">${element.company}</h2>${isNew}${isFeatured}
    </div>
    <p>${element.position}</p>
    <div>
      <span class="card__posted">${element.postedAt}</span><span class="card__contract">${element.contract}</span><span class="card__location">${element.location}</span>
    </div>
    <div>
      ${optionsHTML}
    </div>
  </div>`;

  // Convert cardHTML string to DOM elements
  const cardFragment = document
    .createRange()
    .createContextualFragment(cardHTML);

  // Add event listeners to individual elements
  options.forEach((option) => {
    cardFragment.querySelectorAll(`.card__${option}`).forEach((tag) => {
      tag.addEventListener("click", () => {
        addFilterTag(tag, option);
        generateCards();
      });
    });
  });
  // Return the DocumentFragment containing the card
  return cardFragment;
}

function addFilterTag(tag, property) {
  if (filterOptions[property] === undefined) {
    // Check if the property doesn't exist in filter
    filterOptions[property] = []; // Initialize the  property as an empty array
  }

  if (!filterOptions[property].includes(tag.textContent)) {
    filterOptions[property].push(tag.textContent);
  }
}

function applyFilter(data) {
  return data.filter((item) => {
    let filterMatches = 0;

    for (const property in filterOptions) {
      if (Array.isArray(item[property])) {
        // Check if all elements in the filterOptions[property] array are included in the item[property] array
        if (
          filterOptions[property].every((option) =>
            item[property].includes(option)
          )
        ) {
          filterMatches++;
        }
      } else {
        // For non-array properties, simply check if the values match
        if (
          !item[property] ||
          filterOptions[property].includes(item[property])
        ) {
          filterMatches++;
        }
      }
    }

    return filterMatches === Object.keys(filterOptions).length;
  });
}

function createFilterTab(filterElements) {
  
}

main();
