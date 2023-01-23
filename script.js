let cpuScore = 0;
let playerScore = 0;


function getComputerChoice() {
	let choice = ["Rock", "Paper", "Scissors"];
	let random = Math.floor(Math.random() * 3) + 1;

	return choice[random - 1];
}



function playRound(playerSelection, computerSelection) {
   
    
    if (playerSelection == "rock" && computerSelection == "Paper") {
        cpuScore++;
        return `You lose ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors") {
        playerScore++;
        return `You won ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`
        
    }
     else if (playerSelection == "paper" && computerSelection == "Scissors") {
        cpuScore++;
        return `You lose ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
        
    }
     else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        return `You won ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`
        
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        cpuScore++;
        return `You lose ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
        
    }
     else if (playerSelection == "scissors" && computerSelection == "Paper") {
         playerScore++;
        return `You won ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`
        
    } else {
        return "TIE"
    }
}



function game() {
    for(let i = 0; i < 5; i++ ) {
        let playerSelection =  prompt("Please enter Rock, Paper, Scissors:");
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log(playerScore);
    }
    
    if(playerScore > cpuScore) {
        console.log('YOU WON')
    } else {
        console.log('YOU LOST')
    }
}


game();

