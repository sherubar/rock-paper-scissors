let computerChoice;
let playerChoice;

function getComputerChoice(){
    const CHOICES = ['rock', 'paper', 'scissors'];
    computerChoice = CHOICES[Math.floor(Math.random()*CHOICES.length)];
    return computerChoice
};

function getPlayerChoice(){
    playerChoice = (prompt("Rock, paper, scissors?: ")).toLowerCase()
    return playerChoice
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Draw!!"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        return "You win!!"
    }
    else {
        return "Computer wins! :("
    }
}

getComputerChoice()
getPlayerChoice()
result = playRound(playerChoice, computerChoice)
console.log(`Player choice: ${playerChoice} | Computer choice: ${computerChoice}`)
console.log(result)
