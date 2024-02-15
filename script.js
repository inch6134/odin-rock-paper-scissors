// Global variables

  let playerWinCounter = 0;
  let computerWinCounter = 0;
  let gameCounter = 1;

// references to HTML elements

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// Event listeners for buttons

rockButton.addEventListener("click", ()=>
  playRound("rock", getComputerChoice)
);

paperButton.addEventListener("click", ()=>
  playRound("paper", getComputerChoice)
);

scissorsButton.addEventListener("click", ()=>
  playRound("scissors", getComputerChoice)
);

game();

// main function

function game() {
  
  do {
    const playerSelection = prompt("Rock Paper Scissors!");
    const computerSelection = getComputerChoice();
    const outcome = playRound(playerSelection, computerSelection);
    console.log(`Player chose ${playerSelection}!`);
    console.log(`Computer chose ${computerSelection}!`);
    console.log(outcome);

    if (/win/.test(outcome)) {
      playerWinCounter++;
      console.log(`Round ${gameCounter}: Player (${playerWinCounter} wins)`);
      gameCounter++;
    } else if (/lose/.test(outcome)) {
      computerWinCounter++;
      console.log(
        `Round ${gameCounter}: Computer (${computerWinCounter} wins)`
      );
      gameCounter++;
    }
  } while (playerWinCounter < 3 && computerWinCounter < 3 && gameCounter <= 5);

  if (playerWinCounter === 3) {
    console.log("Congrats! You Win! Final Score: ");
    console.log(`Player: ${playerWinCounter}`);
    console.log(`Computer: ${computerWinCounter}`);
  } else if (computerWinCounter === 3) {
    console.log("Bummer! You Lost! Final Score: ");
    console.log(`Player: ${playerWinCounter}`);
    console.log(`Computer: ${computerWinCounter}`);
  }
}

// Utility functions

function getComputerChoice() {
  let remainder = Math.floor(Math.random() * 100) % 3;
  switch (remainder) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
}


function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return `Tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "Please enter a valid hand.";
  }
}