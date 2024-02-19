document.addEventListener("DOMContentLoaded", () => {
  /* Select game elements */
  const rulesBtn = document.querySelector(".footer__rules-btn");
  const modal = document.querySelector(".modal");
  const modalCloseIcon = document.querySelector(".modal__icon");
  const buttons = document.querySelectorAll(".game__btn");
  const game = document.querySelector(".game");

  /* Calculating the winner of the round depend on the order of validOptions */
  const validOptions = ["rock", "paper", "scissors"];

  /* Select Result elements */
  /* General elements */
  const Result = document.querySelector(".result");
  const playAgainBtn = document.querySelector(".result__play-btn");
  const playAgainLi = document.querySelector(".result__play");
  const resultOutcome = document.querySelector(".result__outcome");
  const scoreElement = document.getElementById("score");
  /* Player elements */
  const resultPlayerImg = document.getElementById("result__img-player");
  const resultPlayerBtn = document.getElementById("result__btn-player");
  /* Computer elements */
  const resultComputerBtn = document.getElementById("result__btn-computer");
  const resultComputerImg = document.getElementById("result__img-computer");
  const resultComputerLi = document.getElementById("result__li-computer");

  /* Variables */
  let countScore = 0;
  let playerChoice;
  let computerChoice;

  resultComputerBtn.classList.add(".game__btn-blinking");

  /* Game options event listeners */
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      /* Hide .game and show .result */
      game.setAttribute("aria-hidden", true);
      Result.setAttribute("aria-hidden", false);

      /* Get result of the round */
      playerChoice = validOptions.indexOf(button.id);
      computerChoice = Math.floor(Math.random() * 3);
      roundResult = playRound(playerChoice, computerChoice);
      countScore += roundResult.score;

      resultPlayerBtn.classList.add(`game__btn-${validOptions[playerChoice]}`);
      resultPlayerImg.src = `images/icon-${validOptions[playerChoice]}.svg`;
      resultComputerLi.classList.add("result__li-blinking");

      sleep(200).then(() => {
        resultComputerLi.setAttribute("aria-hidden", false);
        playAgainLi.setAttribute("aria-hidden", false);
        resultComputerLi.classList.remove("result__li-blinking");
        resultComputerImg.src = `images/icon-${validOptions[computerChoice]}.svg`;
        resultComputerBtn.classList.add(
          `game__btn-${validOptions[computerChoice]}`
        );
        resultOutcome.innerHTML = roundResult.outcome;
        scoreElement.innerHTML = countScore;
      });
    });
  });

  /* Play again button event listeners */
  playAgainBtn.addEventListener("click", () => {
    game.setAttribute("aria-hidden", false);
    playAgainLi.setAttribute("aria-hidden", true);
    Result.setAttribute("aria-hidden", true);
    resultComputerLi.setAttribute("aria-hidden", true);
    resultPlayerBtn.classList.remove(`game__btn-${validOptions[playerChoice]}`);
    resultComputerBtn.classList.remove(
      `game__btn-${validOptions[computerChoice]}`
    );
    resultComputerImg.src = "";
  });

  /* Button mouseup mousedown event listeners */
  document.addEventListener("mouseup", () => {
    buttons.forEach((button) => {
      button.classList.remove("clicked");
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
      button.classList.add("clicked");
    });
  });

  /* Modal event listeners */
  rulesBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "false");
  });
  modalCloseIcon.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "true");
  });

  /* Function to play round */
  function playRound(playerChoice, computerChoice) {
    let roundResult = (playerChoice - computerChoice + 3) % 3;
    // Determine the winner
    if (roundResult === 0) {
      return { outcome: "draw", score: 0 };
    } else if (roundResult === 1) {
      return { outcome: "you won", score: 1 };
    } else {
      return { outcome: "you lose", score: -1 };
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
});
