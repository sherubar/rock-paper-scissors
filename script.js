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

