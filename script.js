let playerSelection;
let computerSelection;

const array = ['rock', 'paper', 'scissors'];

function computerPlay() {
   return array[Math.floor(Math.random() * array.length)];
}

function playRound(computerSelection,playerSelection) {
    playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
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

for (var i = 0; i < 5; i++) {
    console.log(playRound(computerSelection, playerSelection));
}




