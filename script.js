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
const getPlayerChoice = "Rock";

function playRound(playerSelection, computerSelection) {
	computerSelection = getComputerChoice().toLowerCase();
	playerSelection = getPlayerChoice.toLowerCase();

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
	for (let i = 0; i < 5; i++) {
		console.log(playRound());
	}

	if (computerScore == playerScore) {
		return `DRAW!, the scores are Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (computerScore > playerScore) {
		return `Computer wins! the scores are Computer: ${computerScore}, Player ${playerScore}`;
	} else {
		return `Player wins! The scores are Player: ${playerScore}, Computer: ${computerScore}`;
	}
}
console.log(playGame());
