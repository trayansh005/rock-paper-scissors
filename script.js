let cpuScoreData = 0;
let playerScoreData = 0;

const container = document.querySelector(".container");

const playerScore = document.querySelector("#player-data");
const cpuScore = document.querySelector("#cpu-data");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const playerRpsImg = document.querySelector(".player-rps-img");
const cpuRpsImg = document.querySelector(".cpu-rps-img");

const startGame = document.querySelector(".start-game");
const winner = document.querySelector(".winner");
const start = document.querySelector(".start");

rock.addEventListener("click", () => {
	console.log("rock");
});

function getComputerChoice() {
	let choice = ["cpuRock", "cpuPaper", "cpuScissors"];
	let random = Math.floor(Math.random() * 3) + 1;
	return choice[random - 1];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection == "cpuPaper") {
		cpuScoreData++;
		console.log("cpu wins");
		return (cpuScore.textContent = `${cpuScoreData}`);
	} else if (playerSelection == "rock" && computerSelection == "cpuScissors") {
		playerScoreData++;
		console.log("player wins");
		return (playerScore.textContent = `${playerScoreData}`);
	} else if (playerSelection == "paper" && computerSelection == "cpuScissors") {
		cpuScoreData++;
		console.log("cpu wins");
		return (cpuScore.textContent = `${cpuScoreData}`);
	} else if (playerSelection == "paper" && computerSelection == "cpuRock") {
		playerScoreData++;
		console.log("player wins");
		return (playerScore.textContent = `${playerScoreData}`);
	} else if (playerSelection == "scissors" && computerSelection == "cpuRock") {
		cpuScoreData++;
		console.log("cpu wins");
		return (cpuScore.textContent = `${cpuScoreData}`);
	} else if (playerSelection == "scissors" && computerSelection == "cpuPaper") {
		playerScoreData++;
		console.log("player wins");
		return (playerScore.textContent = `${playerScoreData}`);
	} else {
		console.log("TIE");
	}
}

paper.addEventListener("click", () => {
	cpuChoice = getComputerChoice();
	playRound("paper", cpuChoice);
	playerRpsImg.src = "images/paper.png";
	playerRpsImg.style.animation = "shake 0.1s infinite";
	setTimeout(() => {
		(playerRpsImg.style.animation = ""), (cpuRpsImg.style.animation = "");
	}, 300);
	cpuRpsImg.src = `images/${cpuChoice}.png`;
	cpuRpsImg.style.animation = "shake 0.1s infinite";
	return console.log(cpuChoice);
});

rock.addEventListener("click", () => {
	cpuChoice = getComputerChoice();
	playRound("rock", cpuChoice);
	playerRpsImg.src = "images/rock.png";
	playerRpsImg.style.animation = "shake 0.1s infinite";
	setTimeout(() => {
		(playerRpsImg.style.animation = ""), (cpuRpsImg.style.animation = "");
	}, 300);
	cpuRpsImg.src = `images/${cpuChoice}.png`;
	cpuRpsImg.style.animation = "shake 0.1s infinite";
	return console.log(cpuChoice);
});

scissors.addEventListener("click", () => {
	cpuChoice = getComputerChoice();
	playRound("scissors", cpuChoice);
	playerRpsImg.src = "images/scissors.png";
	playerRpsImg.style.animation = "shake 1s infinite";
	setTimeout(() => {
		(playerRpsImg.style.animation = ""), (cpuRpsImg.style.animation = "");
	}, 300);
	cpuRpsImg.src = `images/${cpuChoice}.png`;
	cpuRpsImg.style.animation = "shake 0.1s infinite";
	return console.log(cpuChoice);
});

function checkWinner() {
	if (playerScoreData === 5) {
		startGame.style.display = "flex";
		container.style.display = "none";
		winner.textContent = "You won!";
	} else if (cpuScoreData === 5) {
		startGame.style.display = "flex";
		container.style.display = "none";
		winner.textContent = "CPU won!";
	}
}

start.addEventListener("click", () => {
	container.style.display = "flex";
	startGame.style.display = "none";
	playerScoreData = 0;
	cpuScoreData = 0;
	console.log(`Game Started ${playerScoreData}, ${cpuScoreData}`);
	playerScore.textContent = `${playerScoreData}`;
	cpuScore.textContent = `${cpuScoreData}`;
});

setInterval(checkWinner, 500);

// function playRound(playerSelection, computerSelection) {
// 	if (playerSelection == "rock" && computerSelection == "Paper") {
// 		cpuScore++;
// 		return `You lose ${computerSelection} beats ${
// 			playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
// 		}`;
// 	} else if (playerSelection == "rock" && computerSelection == "Scissors") {
// 		playerScore++;
// 		return `You won ${
// 			playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
// 		} beats ${computerSelection}`;
// 	} else if (playerSelection == "paper" && computerSelection == "Scissors") {
// 		cpuScore++;
// 		return `You lose ${computerSelection} beats ${
// 			playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
// 		}`;
// 	} else if (playerSelection == "paper" && computerSelection == "Rock") {
// 		playerScore++;
// 		return `You won ${
// 			playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
// 		} beats ${computerSelection}`;
// 	} else if (playerSelection == "scissors" && computerSelection == "Rock") {
// 		cpuScore++;
// 		return `You lose ${computerSelection} beats ${
// 			playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
// 		}`;
// 	} else if (playerSelection == "scissors" && computerSelection == "Paper") {
// 		playerScore++;
// 		return `You won ${
// 			playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
// 		} beats ${computerSelection}`;
// 	} else {
// 		return "TIE";
// 	}
// }

// function game() {
// 	for (let i = 0; i < 5; i++) {
// 		let playerSelection = prompt("Please enter Rock, Paper, Scissors:");
// 		console.log(playRound(playerSelection, getComputerChoice()));
// 		console.log(playerScore);
// 	}

// 	if (playerScore > cpuScore) {
// 		console.log("YOU WON");
// 	} else {
// 		console.log("YOU LOST");
// 	}
// }

// game();
