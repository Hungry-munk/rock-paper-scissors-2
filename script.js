let computerScore = 0
let humanScore = 0

function getComputerChoice () {
    let num = Math.floor(Math.random() * (4 - 1)) + 1//generates rnadom number between 1 and 3
    switch (num) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"

    }
}

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase()

    switch (true) {
        case humanChoice === "rock" && computerChoice === "scissors":
            humanScore++
            return `You Win! you chose ${humanChoice} and the computer chose ${computerChoice}`

        case humanChoice === "paper" && computerChoice === "rock":
            humanScore++
            return `You Win! you chose ${humanChoice} and the computer chose ${computerChoice}`
            
        case humanChoice === "scissors" && computerChoice === "paper":
            humanScore++
            return `You Win! you chose ${humanChoice} and the computer chose ${computerChoice}`

        case computerChoice === "rock" && humanChoice  === "scissors":
            computerScore++
            return `You Lose! you chose ${humanChoice} and the computer chose ${computerChoice}`

        case computerChoice === "paper" && humanChoice  === "rock":
            computerScore++
            return `YouL Lose! you chose ${humanChoice} and the computer chose ${computerChoice}`
            
        case computerChoice === "scissors" && humanChoice  === "paper":
            computerScore++
            return `You Lose! you chose ${humanChoice} and the computer chose ${computerChoice}`

        case computerChoice === humanChoice:
            return `Draw! you chose ${humanChoice} and the computer chose ${computerChoice}`
    }
}


function game() {

    let numberOfRounds
    while (isNaN(parseInt(numberOfRounds)) == true) {
        numberOfRounds = parseInt(prompt('type in a valid number'))
    }

    alert(`you are playing ${numberOfRounds} rounds`)
    console.log(typeof numberOfRounds)
    for (let i=0 ; i <= numberOfRounds; i++){
        let humanChoice
        while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors' ) {
            humanChoice = prompt('please type, rock paper or scissors')
        }

        alert(playRound(getComputerChoice(), humanChoice))
        mentionCurrentWinner(computerScore,humanScore)

    }
    declareWinner(computerScore, humanScore)
    


}

function mentionCurrentWinner (computerScore, humanScore) {
    if (computerScore > humanScore){
        alert(`computer is Winning with a score of ${computerScore} points, you have ${humanScore} points`)
    } else if (humanScore > computerScore) {
        alert(`You are Winning with a score of ${humanScore} points, computer has ${computerScore} points`)
    } else {
        alert (`is is currently a tie, you both have ${computerScore} points`)
    }
}

function declareWinner (computerScore, humanScore) {
    if (computerScore > humanScore) {
        alert()
    } else if (humanScore > computerScore) {
        alert()
    } else {
        alert(`it's a draw you both have ${humanScore} points` )
    }
}



game()

