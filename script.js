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
		return `Computer WINS! ${computerSelection} beats ${playerSelection}`;
	} else {
		return `You WIN! ${playerSelection} beats ${computerSelection}`;
	}
}

playRound();
