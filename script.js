// Query Selectors
const choiceButtons = document.querySelectorAll("button");
const displayResults = document.querySelector("#display-results");

// Created Elements
const playResults = document.createElement("p");

// Calling playround function
choiceButtons.forEach((button) => {
	button.addEventListener("click", function () {
		const playerSelection = button.id;
		const computerSelection = getComputerChoice().toLowerCase();

		// Display round
		playResults.textContent = playRound(playerSelection, computerSelection);
		displayResults.appendChild(playResults);
	});
});

// Scores
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	// Generate random number
	const getRandomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

	if (getRandomNumber == 1) {
		return "Rock";
	} else if (getRandomNumber == 2) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

// Get player Choice

// const getPlayerChoice = prompt();

function playRound(playerSelection, computerSelection) {
	// playerSelection = getPlayerChoice();

	// Draw conditions
	if (computerSelection == playerSelection) {
		return `DRAW! you both picked ${computerSelection}`;

		// Computer winning conditions
	} else if (
		(computerSelection == "rock" && playerSelection == "scissors") ||
		(computerSelection == "paper" && playerSelection == "rock") ||
		(computerSelection == "scissors" && playerSelection == "paper")
	) {
		computerScore++;
		return `Computer WINS! ${computerSelection} beats ${playerSelection}. The score is Player: ${playerScore}, Computer ${computerScore}`;
	} else {
		playerScore++;
		return `You WIN! ${playerSelection} beats ${computerSelection}. Player Score is ${playerScore}.  Computer score is ${computerScore}`;
	}
}

function playGame() {
	// Loop to play 5 rounds
	// for (let i = 0; i < 5; i++) {
	console.log(playRound());
	// }

	// Declare winner
	if (computerScore == playerScore) {
		return `The game is a DRAW!, the scores are Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (computerScore > playerScore) {
		return `Computer WINS the game! the scores are Computer: ${computerScore}, Player ${playerScore}`;
	} else {
		return `Player WINS the game! The scores are Player: ${playerScore}, Computer: ${computerScore}`;
	}
}
console.log(playGame());
