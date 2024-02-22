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
	let computerScore = 0;
	let playerScore = 0;
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
		computerScore += 1;

		return `Computer WINS! ${computerSelection} beats ${playerSelection}. The score is Player: ${playerScore}, Computer ${computerScore}`;
	} else {
		playerScore += 1;

		return `You WIN! ${playerSelection} beats ${computerSelection}. Player Score is ${playerScore}.  Computer score is ${computerScore}`;
	}
}

function playGame(playerScore, computerScore) {
	// Score
	playerScore = 0;
	computerScore = 0;

	// Loop to play 5 rounds
	for (let i = 0; i < 5; i++) {
		playRound();

		console.log(playRound());
		console.log(playerScore, computerScore);
	}
}

playGame();
