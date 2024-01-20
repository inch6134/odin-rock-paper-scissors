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
  let player = playerSelection.toLowerCase();
  console.log(player);
  let computer = computerSelection;
  console.log(computer);

  if (player === computer) {
    return `Tie!`;
  } else if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer === "rock")
  ) {
    return `You lose! ${computer} beats ${player}`;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return `You win! ${player} beats ${computer}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
