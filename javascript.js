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

function game(){
    let userScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        console.log("You chose: " + userChoice + ", computer chose: " + computerChoice)
        let result = playRound(computerChoice, userChoice)
        if (result.includes('Win')) {
            userScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
        console.log("User " + userScore + ":" + computerScore + " Computer")
    }
    if (userScore > computerScore) {
        return "Congratulations! You win! Final Score is " + userScore + ":" + computerScore
    } else if (userScore < computerScore) {
        return "Bad luck :( You lose! Final Score is " + userScore + ":" + computerScore
    } else {
        return "It's a draw! Try again and go for the win!"
    }
     
}

console.log(game())