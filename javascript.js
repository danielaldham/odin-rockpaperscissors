function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    let computerChoice = '';
    if (numChoice === 0) {
        return computerChoice = 'Rock';
    } else if (numChoice === 1) {
        return computerChoice = 'Scissors';
    } else {
        return computerChoice = 'Paper';
    }
}

function getUserChoice() {
    const validInputs = ['rock', 'paper', 'scissors'];
    let userInput = prompt('Enter your choice! Rock, Paper or Scissors: ').toLowerCase();
    while (!validInputs.includes(userInput)) {
        userInput = prompt("Invalid input. Please try again:");
    }
    return userInput;
} 

function playRound(computer, user) {
    if (computer === 'Rock') {
        if (user === 'paper') {
            return "You Win! Paper beats Rock"
        } else if (user === 'scisscors') {
            return "You Lose! Rock beats Scissors"
        } else {
            return "It's a Draw! You both picked Rock"
        }
    } else if (computer === 'Scissors') {
        if (user === 'rock') {
            return "You Win! Rock beats Scissors"
        } else if (user === 'paper') {
            return "You Lose! Scissors beats Paper"
        } else {
            return "It's a Draw! You both picked Scissors"
        }
    } else {
        if (user === 'scissors') {
            return "You Win! Scissors beats Paper"
        } else if (user === 'rock') {
            return "You Lose! Paper beats Rock"
        } else {
            return "It's a Draw! You both picked Paper"
        }
    }
}

'console.log(getComputerChoice())'
'console.log(getUserChoice())'
console.log(playRound(getComputerChoice(), getUserChoice()))

/* let count_rock = 0;
let count_paper = 0;
let count_scissors = 0;

for (let i = 0; i < 1000; i++) {
    let answer = getComputerChoice()
    if (answer === 'Rock') {
        count_rock++;
    } else if (answer === 'Paper') {
        count_paper++
    } else if (answer === 'Scissors') {
        count_scissors++
    }
}

console.log(count_rock, count_paper, count_scissors) */