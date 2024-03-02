document.addEventListener("DOMContentLoaded", function () {
  const navList = document.querySelector(".nav__list");
  const toggleBtn = document.querySelector(".nav__btn");

  document.addEventListener("click", function (event) {
    const targetElement = event.target;
    const isClickBtn = toggleBtn.contains(targetElement);
    const isClickNav = navList.contains(targetElement);
    const isLinkClicked = targetElement.tagName === "A";
    const isHidden = navList.classList.contains("hidden");

    if (isClickBtn) {
      !isHidden
        ? navList.classList.add("hidden")
        : navList.classList.remove("hidden");
    } else {
      (!isClickNav || isLinkClicked) && navList.classList.add("hidden");
    }
  });
});
