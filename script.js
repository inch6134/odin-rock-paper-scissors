// Global state
let state = {};
 
// references to HTML elements
const rockButtonDOM = document.querySelector("#rock");
const paperButtonDOM = document.querySelector("#paper");
const scissorsButtonDOM = document.querySelector("#scissors");
const selectionsDOM = document.querySelector("#selections");
const playerScoreDOM = document.querySelector("#player-score");
const computerScoreDOM = document.querySelector("#computer-score");
const resultsDOM = document.querySelector("#results");

// Event listeners for buttons

function clickRock() {
  onClick("rock");
}

function clickPaper() {
  onClick("paper");
}

function clickScissors() {
  onClick("scissors");
}

rockButtonDOM.addEventListener("click", clickRock);

paperButtonDOM.addEventListener("click", clickPaper);

scissorsButtonDOM.addEventListener("click", clickScissors);

game();

// main function
function game() {
  state = {
    playerWinCounter: 0,
    computerWinCounter: 0,
    gameCounter: 1,
    playerSelection: "",
    computerSelection: "",
    outcome: "",
  };

  // reset HTML elements
  selectionsDOM.innerHTML = "";
  playerScoreDOM.innerHTML = "Player: 0";
  computerScoreDOM.innerHTML = "Computer: 0";
  resultsDOM.innerHTML = "";
}

// Utility functions

function onClick(button) {
  state.playerSelection = button;
  state.computerSelection = getComputerChoice();
  state.outcome = playRound(state.playerSelection, state.computerSelection);
  displaySelections();
  countRound();
  keepScore();
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

function displaySelections() {
  selectionsDOM.innerHTML = `Player chose ${state.playerSelection}!\n
  Computer chose ${state.computerSelection}!`;
}

function countRound() {
  const roundText = document.createElement('p');
  if (/win/.test(state.outcome)) {
        state.playerWinCounter++;
        // console.log(`Round ${state.gameCounter}: Player (${state.playerWinCounter} wins)`);
        roundText.textContent = `Round ${state.gameCounter}: Player wins!`;
        resultsDOM.prepend(roundText);
        state.gameCounter++;
      } else if (/lose/.test(state.outcome)) {
        state.computerWinCounter++;
        roundText.textContent = `Round ${state.gameCounter}: Computer wins!`;
        resultsDOM.prepend(roundText);
        state.gameCounter++;
      }
      else if (/Tie/.test(state.outcome)) {
        roundText.textContent = `Round ${state.gameCounter}: Tie!`;
        resultsDOM.prepend(roundText);
        state.gameCounter++;
      }
}

function keepScore() {
  playerScoreDOM.innerHTML = `Player: ${state.playerWinCounter}`;
  computerScoreDOM.innerHTML = `Computer: ${state.computerWinCounter}`;
  const winnerText = document.createElement('h3');
  if (state.playerWinCounter === 5) {
    winnerText.textContent = "Congrats! You Win!";
    resultsDOM.prepend(winnerText);
    endGame();
  } else if (state.computerWinCounter === 5) {
    winnerText.textContent = "Bummer! You Lost!";
    resultsDOM.prepend(winnerText);
    endGame();
  }
}

function endGame() {
  rockButtonDOM.removeEventListener("click", clickRock);
  paperButtonDOM.removeEventListener("click", clickPaper);
  scissorsButtonDOM.removeEventListener("click", clickScissors);
}