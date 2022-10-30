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

