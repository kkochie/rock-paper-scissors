let playerSelection;
let computerSelection;

const array = [
    'rock', 
    'paper', 
    'scissors'
];

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
          return ("You lose!");
    } else {
        return ("You win!");
    }
}   

console.log(playRound(computerSelection, playerSelection));