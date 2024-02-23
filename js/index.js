document.addEventListener("DOMContentLoaded", () => {
  const seconds = getElement("seconds"),
    minutes = getElement("minutes"),
    hours = getElement("hours"),
    days = getElement("days");

  updateTime();
});

function getElement(time) {
  const card = {
    top: document.querySelector(`#${time} .timer__card-top`),
    bottom: document.querySelector(`#${time} .timer__card-bottom`),
  };
  const flip = {
    card: document.querySelector(`#${time} .timer__flip`),
    flipTop: document.querySelector(`#${time} .timer__flip-top`),
    flipBottom: document.querySelector(`#${time} .timer__flip-bottom`),
  };
  return { card, flip };
}

function getCurrentTime() {
  let now = Date.now();
  /* Set Max days to 42 :) */
  return {
    days: (now / 864e5) % 42 | 0,
    hours: (now / 36e5) % 24 | 0,
    minutes: (now / 6e4) % 60 | 0,
    seconds: (now / 1e3) % 60 | 0,
  };
}

function updateTime() {
  const currentTime = getCurrentTime();
  updateCard(seconds, currentTime.seconds);
  updateCard(minutes, currentTime.minutes);
  updateCard(hours, currentTime.hours);
  updateCard(days, currentTime.days);
}

function updateCard(element, timeValue) {
  const oldTimeValue = parseInt(element.flip.flipTop.textContent);
  if (oldTimeValue === timeValue) {
    return;
  } else {
    element.card.top.textContent =
      oldTimeValue < 10 ? `0${oldTimeValue}` : oldTimeValue;
    element.card.bottom.textContent =
      oldTimeValue < 10 ? `0${oldTimeValue}` : oldTimeValue;
    element.flip.flipTop.textContent =
      timeValue < 10 ? `0${timeValue}` : timeValue;
    element.flip.flipBottom.textContent =
      timeValue < 10 ? `0${timeValue}` : timeValue;
    element.flip.flipCard.classList.add("flip");
  }
}
