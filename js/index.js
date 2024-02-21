document.addEventListener("DOMContentLoaded", () => {
  const ratingCard = document.querySelector(".rating-card");
  const thankCard = document.querySelector(".thank-card");
  const optionsBtns = document.querySelectorAll(".rating-card__options li button");
  const submitBtn = document.querySelector(".rating-card__submit-btn");
  let lastClickedRating = null;

  optionsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeClicked();
      lastClickedRating = btn.innerHTML;
      btn.classList.add("clicked");
    });
  });

  submitBtn.addEventListener("click", () => {
    console.log(lastClickedRating);
    ratingCard.setAttribute("aria-hidden", true)
    thankCard.setAttribute("aria-hidden", false)
  });

  function removeClicked() {
    optionsBtns.forEach((button) => {
      button.classList.remove("clicked");
    });
  }
});
