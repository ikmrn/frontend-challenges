const timeOptions = document.querySelectorAll("#time-options a");

const timeDisplay = document.querySelectorAll(".card__text");
console.log(timeDisplay);
console.log(timeOptions);

timeOptions.forEach((option) => {
  option.addEventListener("click", (event) => {
    const status = event.target.innerHTML.toLowerCase();
    timeDisplay.forEach((time) => {
      if (time.classList.contains(status)) {
        time.classList.remove("hidden");
        time.classList.add("flex");
      } else {
        time.classList.remove("flex");
        time.classList.add("hidden");
      }
    });
  });
});
