let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const array = ['rock', 'paper', 'scissors'];

function computerPlay() {
   return array[Math.floor(Math.random() * array.length)];
}

function playRound(computerSelection,playerSelection) {
    playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
    computerSelection = computerPlay();
  
    if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "paper" && playerSelection === "rock")) {
        
        computerScore ++;
        return (`You lost this round! ${capitalize(computerSelection)} beats ${playerSelection}.`)
        
    } else if (computerSelection === playerSelection) {
        return ("Tie!");      
          
    } else {
        playerScore ++;
        return (`You win this round! ${capitalize(playerSelection)} beats ${computerSelection}.`);
    }

}   

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function game() {
    for (var i = 0; i < 5; i++)
    
    console.log(playRound(computerSelection, playerSelection));
}

game();




