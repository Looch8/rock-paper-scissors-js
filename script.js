function getComputerChoice() {
	// Generate random number
	const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

	if (randomNumber == 1) {
		return "Rock";
	} else if (randomNumber == 2) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

console.log(getComputerChoice());
