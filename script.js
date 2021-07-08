let playerSelection;
let computerSelection;

const array = ['rock', 'paper', 'scissors'];

function computerPlay() {
   return array[Math.floor(Math.random() * array.length)];
}

playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();

function playRound(computerSelection,playerSelection) {
    computerSelection = computerPlay();
    if (computerSelection == playerSelection) {
        return("Tie!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) {
          return (`You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`);
    } else {
        return (`You win! ${capitalize(playerSelection)} beats ${computerSelection}.`);
    }
}   

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


console.log(playRound(computerSelection, playerSelection));
