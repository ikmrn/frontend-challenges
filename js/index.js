document.addEventListener("DOMContentLoaded", () => {
  const seconds = getElement("seconds"),
    minutes = getElement("minutes"),
    hours = getElement("hours"),
    days = getElement("days");

  updateTime(seconds, minutes, hours, days);
  setInterval(() => updateTime(seconds, minutes, hours, days), 1000);
});

function getElement(time) {
  const card = {
    top: document.querySelector(`#${time} .timer__card-top`),
    bottom: document.querySelector(`#${time} .timer__card-bottom`),
  };
  const flip = {
    flipCard: document.querySelector(`#${time} .timer__flip`),
    flipTop: document.querySelector(`#${time} .timer__flip-top`),
    flipBottom: document.querySelector(`#${time} .timer__flip-bottom`),
  };
  return { card, flip };
}

function getCurrentTime() {
  let now = Date.now();
  /* Set Max days to 42 :) */
  return {
    days: (42 - ((now / 864e5) % 42)) | 0,
    hours: (24 - ((now / 36e5) % 24)) | 0,
    minutes: (60 - ((now / 6e4) % 60)) | 0,
    seconds: (60 - ((now / 1e3) % 60)) | 0,
  };
}

function updateTime(seconds, minutes, hours, days) {
  const currentTime = getCurrentTime();
  updateCard(seconds, currentTime.seconds);
  updateCard(minutes, currentTime.minutes);
  updateCard(hours, currentTime.hours);
  updateCard(days, currentTime.days);
}

function updateCard(element, timeValue) {
  const oldTimeValue = parseInt(element.card.bottom.textContent);
  // console.log(oldTimeValue);
  if (isNaN(oldTimeValue) || oldTimeValue === timeValue) {
    return;
  } else {
    /* Flip */
    element.flip.flipCard.classList.add("flip");

    setTimeout(() => {
      element.card.top.textContent = getTimeString(timeValue);
      
    }, 200);
    setTimeout(() => {
      element.flip.flipBottom.textContent = getTimeString(timeValue);
      element.flip.flipTop.textContent = getTimeString(timeValue);
    }, 300);
    setTimeout(() => {
      element.card.bottom.textContent = getTimeString(timeValue);
    }, 500);
    setTimeout(() => {
      /* Flip */
      element.flip.flipCard.classList.remove("flip");
      element.flip.flipBottom.textContent = getTimeString(timeValue);
    }, 900);
  }
}

function getTimeString(time) {
  return time < 0 ? "00" : time < 10 ? `0${time}` : String(time);
}
