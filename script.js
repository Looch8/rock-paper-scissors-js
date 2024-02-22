function getComputerChoice() {
	// Generate random number
	const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

	return randomNumber;
}

console.log(getComputerChoice());
