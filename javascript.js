function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    let computerChoice = '';
    if (numChoice === 0) {
        return computerChoice = 'rock';
    } else if (numChoice === 1) {
        return computerChoice = 'scissors';
    } else {
        return computerChoice = 'paper';
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

// function game(userChoice){
//     // let userScore = 0;
//     // let computerScore = 0;
//     for (let i = 1; i <= 5; i++) {
//         let computerChoice = getComputerChoice();
//         console.log("You chose: " + userChoice + ", computer chose: " + computerChoice)
//         let result = playRound(computerChoice, userChoice)
//         if (result.includes('Win')) {
//             userScore++;
//         } else if (result.includes('Lose')) {
//             compScore++;
//         }
//         console.log("User " + userScore + ":" + compScore + " Computer")
//     }
//     if (userScore > compScore) {
//         return "Congratulations! You win! Final Score is " + userScore + ":" + compScore
//     } else if (userScore < compScore) {
//         return "Bad luck :( You lose! Final Score is " + userScore + ":" + compScore
//     } else {
//         return "It's a draw! Try again and go for the win!"
//     }
     
// }

// console.log(game())



let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
let compImage = document.querySelector('#comp-img')
let result = document.querySelector('#comp-choice')
let rockImage = './icons/rock.png';
let paperImage = './icons/paper.png';
let scissorsImage = './icons/scissors.png';
let startImage = './icons/start.png';
let userScoreValue = 0;
let compScoreValue = 0;
const maxScore = 5;


function newPlayRound(userChoice) {
    let compChoice = getComputerChoice();
    if (compChoice === 'rock') {
        compImage.src = rockImage;
    } else if (compChoice === 'paper') {
        compImage.src = paperImage;
    } else if (compChoice === 'scissors') {
        compImage.src = scissorsImage;
    }
    console.log("You chose: " + userChoice + ", computer chose: " + compChoice)

    if (userChoice === 'rock') {
        if (compChoice === 'paper') {
            compScoreValue ++;
            compScore.innerHTML = compScoreValue
            result.innerHTML = 'You Lose'
            console.log('You Lose');
        }
        else if (compChoice === 'scissors') {
            userScoreValue++;
            userScore.innerHTML = userScoreValue
            result.innerHTML = 'You Win'
            console.log('You Win');
        } else {
            result.innerHTML = "It's a Draw"
        }
    } else if (userChoice === 'paper') {
        if (compChoice === 'scissors') {
            compScoreValue ++;
            compScore.innerHTML = compScoreValue
            result.innerHTML = 'You Lose'
            console.log('You Lose');
        }
        else if (compChoice === 'rock') {
            userScoreValue++;
            userScore.innerHTML = userScoreValue
            result.innerHTML = 'You Win'
            console.log('You Win');
        } else {
            result.innerHTML = "It's a Draw"
        }
    } else if (userChoice === 'scissors') {
        if (compChoice === 'rock') {
            compScoreValue ++;
            compScore.innerHTML = compScoreValue
            result.innerHTML = 'You Lose'
            console.log('You Lose');
        }
        else if (compChoice === 'paper') {
            userScoreValue++;
            userScore.innerHTML = userScoreValue
            result.innerHTML = 'You Win'
            console.log('You Win');
        } else {
            result.innerHTML = "It's a Draw"
        }
    }
    if (userScoreValue === 5) {
        alert('You Win');
        userScoreValue = 0;
        userScore.innerHTML = userScoreValue;
        compScoreValue = 0;
        compScore.innerHTML = compScoreValue;
        compImage.src = startImage;
        result.innerHTML = ''
    } else if (compScoreValue === 5) {
        alert('You Lose')
        userScoreValue = 0;
        userScore.innerHTML = userScoreValue;
        compScoreValue = 0;
        compScore.innerHTML = compScoreValue;
        compImage.src = startImage;
        result.innerHTML = ''
    }
}

rock.addEventListener('click', () => {
    newPlayRound('rock');
})

paper.addEventListener('click', () => {
    newPlayRound('paper');
})
scissors.addEventListener('click', () => {
    newPlayRound('scissors');
})