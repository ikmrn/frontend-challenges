document.addEventListener("DOMContentLoaded", () => {
  const ratingCard = document.querySelector(".rating-card");
  const thankCard = document.querySelector(".thank-card");
  const submitBtn = document.querySelector(".rating-card__submit-btn");
  const selectedOption = document.getElementById("selected-option");
  const optionsContainer = document.querySelector(".rating-card__options");

  let lastClickedRating = null;

  // Define the number of options
  const numOptions = 5;

  // Dynamically generate the options
  for (let i = 1; i <= numOptions; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    const listItem = document.createElement("li");
    listItem.appendChild(button);
    optionsContainer.appendChild(listItem);

    button.addEventListener("click", () => {
      removeClicked();
      lastClickedRating = i;
      button.classList.add("clicked");
    });
  }

  submitBtn.addEventListener("click", () => {
    if (lastClickedRating === null) {
      // Prevent form submission if no option is chosen
      event.preventDefault();
    } else {
      ratingCard.setAttribute("aria-hidden", true);
      thankCard.setAttribute("aria-hidden", false);
      selectedOption.innerHTML = lastClickedRating;
    }
  });

  function removeClicked() {
    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("clicked");
    });
  }
});
