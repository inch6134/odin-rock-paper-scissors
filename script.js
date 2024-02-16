// Global state
let state = {};
 

// references to HTML elements

const rockButtonDOM = document.querySelector("#rock");
const paperButtonDOM = document.querySelector("#paper");
const scissorsButtonDOM = document.querySelector("#scissors");
const selectionsDOM = document.querySelector("#selections");

// Event listeners for buttons

rockButtonDOM.addEventListener("click", ()=> {
  state.playerSelection = "rock";
  state.computerSelection = getComputerChoice();
  state.outcome = playRound(state.playerSelection, state.computerSelection);
  displaySelections();
});

paperButtonDOM.addEventListener("click", ()=> {
  state.playerSelection = "paper";
  state.computerSelection = getComputerChoice();
  state.outcome = playRound(state.playerSelection, state.computerSelection);
  displaySelections();
});

scissorsButtonDOM.addEventListener("click", ()=> {
  state.playerSelection = "scissors";
  state.computerSelection = getComputerChoice();
  state.outcome = playRound(state.playerSelection, state.computerSelection);
  displaySelections();
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

  // do {
    
    // move logic to new utility function, call in event listeners
    // store computerSelection in global variable to call in multiple places
    // add single line that displays message of current selections

    // const playerSelection = prompt("Rock Paper Scissors!");
    // const computerSelection = getComputerChoice();
    // const outcome = playRound(playerSelection, computerSelection);
    // console.log(`Player chose ${playerSelection}!`);
    // console.log(`Computer chose ${computerSelection}!`);
    // console.log(outcome);


    // utility function - countRound()
  //   if (/win/.test(outcome)) {
  //     playerWinCounter++;
  //     console.log(`Round ${gameCounter}: Player (${playerWinCounter} wins)`);
  //     gameCounter++;
  //   } else if (/lose/.test(outcome)) {
  //     computerWinCounter++;
  //     console.log(
  //       `Round ${gameCounter}: Computer (${computerWinCounter} wins)`
  //     );
  //     gameCounter++;
  //   }
//  } while (state.playerWinCounter < 3 && computerWinCounter < 3 && gameCounter <= 5);


  // utility function - keepScore()
//   if (playerWinCounter === 3) {
//     console.log("Congrats! You Win! Final Score: ");
//     console.log(`Player: ${playerWinCounter}`);
//     console.log(`Computer: ${computerWinCounter}`);
//   } else if (computerWinCounter === 3) {
//     console.log("Bummer! You Lost! Final Score: ");
//     console.log(`Player: ${playerWinCounter}`);
//     console.log(`Computer: ${computerWinCounter}`);
//   }
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