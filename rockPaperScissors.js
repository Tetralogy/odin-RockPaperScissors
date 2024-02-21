function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    // Normalize inputs to handle case sensitivity
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    
    // Determine the winner
    if (playerChoice === computerChoice) {
        return `It's a tie! Both players chose ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}`;
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        
        console.log(`Round ${i + 1}: ${result}`);
        
        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }
        // No score update needed for ties
    }
    
    console.log("Game Over!");
    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log("Congratulations! You've won the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You've lost the game. Better luck next time!");
    } else {
        console.log("It's a tie! Well played.");
    }
}

// To start the game, call playGame()
 playGame();
