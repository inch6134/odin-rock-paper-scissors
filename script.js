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
rockButtonDOM.addEventListener("click", ()=> {
  state.playerSelection = "rock";
  state.computerSelection = getComputerChoice();
  state.outcome = playRound(state.playerSelection, state.computerSelection);
  displaySelections();
  countRound();
  keepScore();
});

paperButtonDOM.addEventListener("click", ()=> {
  state.playerSelection = "paper";
  state.computerSelection = getComputerChoice();
  state.outcome = playRound(state.playerSelection, state.computerSelection);
  displaySelections();
  countRound();
  keepScore();
});

scissorsButtonDOM.addEventListener("click", ()=> {
  state.playerSelection = "scissors";
  state.computerSelection = getComputerChoice();
  state.outcome = playRound(state.playerSelection, state.computerSelection);
  displaySelections();
  countRound();
  keepScore();
});

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

}

// Utility functions

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
  const winnerText = document.createElement('h3');
    if (state.playerWinCounter === 3) {
    winnerText.textContent = "Congrats! You Win!";
    resultsDOM.prepend(winnerText);
    } else if (state.computerWinCounter === 3) {
    winnerText.textContent = "Bummer! You Lost!";
    resultsDOM.prepend(winnerText);
  }
}