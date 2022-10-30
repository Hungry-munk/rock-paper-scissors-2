//getting buttons
const paperButton = document.querySelector("button[weapon='paper']")
const rockButton = document.querySelector("button[weapon='rock']")
const scissorsButton = document.querySelector("button[weapon='scissors']")

const weapons = document.querySelectorAll('.weapon')
//game reporter
const gameReport = document.getElementById('game-report')

// score trackers
const computerScoreText = document.querySelector('.computer-score')
const humanScoreText = document.querySelector('.human-score')

//setting up game
let computerScore = 0
let humanScore = 0

updateScore()

gameReport.textContent = "who will win?"//putting up some text



function getComputerChoice () {
    let num = Math.floor(Math.random() * (4 - 1)) + 1//generates ranadom number between 1 and 3
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

function updateScore() {
computerScoreText.textContent = `computer score: ${computerScore}`//putting up some text
humanScoreText.textContent = `computer score: ${humanScore}`//putting up some text
}

function resetGame() {
    computerScore = 0
    humanScore = 0
    gameReport.textContent = "who will win?"
    updateScore()
}

function displayWinner () {
    
}


weapons.forEach(weapon => {
    weapon.addEventListener('click', event => {
        let chosenButton;
        event.target.tagName == 'IMG'? 
            chosenButton = event.target.parentElement : chosenButton = event.target//becuase the event is likly triggered on the image and need the data attribute on the button
        
        let humanChoice = chosenButton.getAttribute('weapon')//a string with the choice the person clicked
        let computerChoice = getComputerChoice()
        gameReport.textContent = playRound(computerChoice,humanChoice)//playing a round and reporting it     
        updateScore()   



    })
})


