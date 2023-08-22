let computerChoice;
let playerChoice;
let playerWins = 0
let computerWins = 0
let result;
const btns = document.querySelectorAll('button')
const roundResult = document.querySelector('#roundResult')
const finalResult = document.querySelector('#finalResult')
const playerWinCounter = document.querySelector('#playerWins')
const computerWinCounter = document.querySelector('#computerWins')
playerWinCounter.innerHTML = `Player round wins: ${playerWins}`
computerWinCounter.innerHTML = `Computer Round wins: ${computerWins}`
roundResult.innerHTML = `Player choice: | Computer choice: | result: `

function getComputerChoice(){
    const CHOICES = ['rock', 'paper', 'scissors'];
    computerChoice = CHOICES[Math.floor(Math.random()*CHOICES.length)];
    return computerChoice
};

function playRound(playerSelection, computerSelection){
    playerSelection = playerChoice;
    computerSelection = computerChoice;
    if (playerSelection === computerSelection){
        result = roundResult.innerHTML = "Draw!!"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        result = roundResult.innerHTML = "Player wins round!"
        playerWins++
        if (playerWins === 5){
            finalResult.innerHTML = "Player won the game!"
            playerWins = 0
            computerWins = 0
        }
        if ((playerWins || computerWins) !== 0){
            finalResult.innerHTML = ""
        }
    }
    else {
        result = roundResult.innerHTML = "Computer wins round! :("
        computerWins++
        if (computerWins === 5){
            finalResult.innerHTML = "Computer wins the game!"
            playerWins = 0
            computerWins = 0
        }
        if ((playerWins || computerWins) !== 0){
            finalResult.innerHTML = ""
        }
    }
    return [
        roundResult.innerHTML = `Player choice: ${playerChoice} | Computer choice: ${computerChoice} | result: ${result}`
        ,playerWinCounter.innerHTML = `Player round wins: ${playerWins}`
        ,computerWinCounter.innerHTML = `Player round wins: ${computerWins}`
    ]
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        playerChoice = `${btn.id}`
        return playerChoice
    })
    btn.addEventListener('click', getComputerChoice)
    btn.addEventListener('click', playRound)
});