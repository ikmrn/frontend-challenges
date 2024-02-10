// // Add valid options
// const validOptions = ["Rock", "Paper", "Scissors"];

// // Get computer choice, a random value from 0 to 2
// function getComputerChoice() {
//   return Math.floor(Math.random() * 3);
// }

// // Check input for valid type and return capitalized input
// function checkInput(input) {
//   if (typeof input !== "string") {
//     return "Invalid input. Please provide a string.🎃";
//   }

//   const inputCap = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
//   if (validOptions.includes(inputCap)) {
//     return inputCap;
//   }
//   return checkInput(prompt("Choose from Rock, Paper, or Scissors.", ""));
// }

// function getPlayerChoice(n = 0) {
//   if (n) {
//     let playerSelection = checkInput(
//       prompt("Tie, Let's replay the round. Choose your sign!", "")
//     );
//     return validOptions.indexOf(playerSelection);
//   } else {
//     let playerSelection = checkInput(prompt("Choose your sign!", ""));
//     return validOptions.indexOf(playerSelection);
//   }
// }

// // Play the game
// function playRound(playerChoice, computerChoice) {
//   // Calculate game result using the Rock, Paper, Scissors logic.
//   // The result will be 0 for a tie, 1 for player win, and 2 for computer win.
//   // Step 1: Calculate the numeric difference between player and computer choices.
//   // Step 2: Ensure the result is always non-negative by adding 3.
//   // Step 3: Use modulo 3 to confine the result to 0, 1, or 2.
//   let gameResult = (playerChoice - computerChoice + 3) % 3;

//   // Determine the winner
//   if (gameResult === 0) {
//     return playRound(getPlayerChoice(1), getComputerChoice());
//   } else if (gameResult === 1) {
//     return {
//       message: `You Win! ${validOptions[playerChoice]} beats ${validOptions[computerChoice]}`,
//       result: 1,
//     };
//   } else {
//     return {
//       message: `You Lose! ${validOptions[computerChoice]} beats ${validOptions[playerChoice]}`,
//       result: -1,
//     };
//   }
// }

// function playGame(numberOfGames) {
//   let gameResult = 0;
//   for (let i = 0; i < parseInt(numberOfGames); i++) {
//     // Play one round
//     let oneRound = playRound(getPlayerChoice(), getComputerChoice());

//     // Retrieve the result and the message
//     let roundResult = oneRound.result;
//     let roundMessage = oneRound.message;

//     gameResult += roundResult;
//     console.log(gameResult);
//     console.log(roundMessage);
//   }
//   console.log(`Overall score: ${gameResult}`);
// }

// // playGame(5);
// console.log(34);

document.addEventListener("DOMContentLoaded", () => {
  const rulesBtn = document.querySelector(".footer__rules-btn");
  const modal = document.querySelector(".modal");
  const modalCloseIcon = document.querySelector(".modal__icon");

  rulesBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "false");
  });
  modalCloseIcon.addEventListener("click", ()=> {
    modal.setAttribute("aria-hidden", "true")
  })
});
