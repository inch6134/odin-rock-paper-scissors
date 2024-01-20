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
  let computer = computerSelection;

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
  } else {
    return "Please enter a valid hand.";
  }
}

function game() {
  let playerWinCounter = 0;
  let computerWinCounter = 0;
  let gameCounter = 1;

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

game();
