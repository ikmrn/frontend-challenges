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
  const result = document.querySelector(".result");
  const playAgainBtn = document.querySelector(".result__play-btn");
  const playAgain = document.querySelector(".result__play");
  const resultOutcome = document.querySelector(".result__outcome");
  const scoreElement = document.getElementById("score");
  /* Player elements */
  const resultPlayerImg = document.getElementById("result__img-player");
  const resultPlayerBtn = document.getElementById("result__btn-player");
  /* Computer elements */
  const resultComputerBtn = document.getElementById("result__btn-computer");
  const resultComputerImg = document.getElementById("result__img-computer");
  const resultComputerImgContainer = document.getElementById(
    "result__computer-image-container"
  );

  /* Variables */
  let countScore = 0;
  let playerChoice;
  let computerChoice;

  // resultComputerBtn.classList.add(".game__btn-blinking");

  /* Game options event listeners */
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      /* Hide .game and show .result */
      game.setAttribute("aria-hidden", true);
      result.setAttribute("aria-hidden", false);

      /* Get result of the round */
      playerChoice = validOptions.indexOf(button.id);
      computerChoice = Math.floor(Math.random() * 3);
      roundResult = playRound(playerChoice, computerChoice);
      countScore += roundResult.score;

      /* Add classes to display player choice */
      resultPlayerBtn.classList.add(`game__btn-${validOptions[playerChoice]}`);
      resultPlayerImg.src = `images/icon-${validOptions[playerChoice]}.svg`;

      /* Add classes to display computer choice */
      resultComputerBtn.classList.add("result__blinking");
      resultComputerBtn.classList.remove("result__btn");
      resultComputerImgContainer.setAttribute("aria-hidden", true);
      /* Show computer choice and game results after 2 seconds */
      sleep(2000).then(() => {
        /* Show play again and result of the round */
        playAgain.setAttribute("aria-hidden", false);

        /* Style computer choice */
        resultComputerBtn.classList.remove("result__blinking");
        resultComputerImgContainer.setAttribute("aria-hidden", false);

        resultComputerImg.src = `images/icon-${validOptions[computerChoice]}.svg`;
        resultComputerBtn.classList.add("result__btn");
        resultComputerBtn.classList.add(
          `game__btn-${validOptions[computerChoice]}`
        );

        /* Render outcome to html */
        resultOutcome.innerHTML = roundResult.outcome;
        scoreElement.innerHTML = countScore;
        /* Add winner ripple effect */
        if (roundResult.score === 1){
          resultPlayerBtn.classList.add("result__btn-win")
        }
        else if (roundResult.score === -1) {
          resultComputerBtn.classList.add("result__btn-win")
        }

      });
    });
  });

  /* Play again button event listeners */
  playAgainBtn.addEventListener("click", () => {
    /*  Hide .result and show .game */
    game.setAttribute("aria-hidden", false);
    result.setAttribute("aria-hidden", true);

    playAgain.setAttribute("aria-hidden", true);

    /* Remove classes for player and computer choices */
    resultPlayerBtn.classList.remove(`game__btn-${validOptions[playerChoice]}`);
    resultComputerBtn.classList.remove(
      `game__btn-${validOptions[computerChoice]}`
    );
    resultComputerImg.src = "";
    resultComputerBtn.classList.remove("result__btn-win")
    resultPlayerBtn.classList.remove("result__btn-win")

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
