
function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors']; // declare game choices   
    const play = choice[Math.floor(Math.random()*choice.length)]; // computer's random play 
    return play;
}

function playRound (playerSelection, computerSelection) {  //play one round
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); // making input case insensitive (first letter capitalized, rest lower case)
    let result;
     if (playerSelection === computerSelection) {   // game conditionals
        result = 'It\s a draw';
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        result = `You've won ${playerSelection} beats ${computerSelection}`; 
        playerScore++; 
        }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        result = `You've lost ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        result = `You've won ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        result = `You've lost ${computerSelection} beat ${playerSelection}`;
        computerScore++;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        result = `You've won ${playerSelection} beat ${computerSelection}`;
        playerScore++;
        }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        result = `You've lost ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    return result; 
}

let playerScore = 0; // initialize player score counter
let computerScore = 0; // initialize computer score counter 

function game () {
for (let i = 0;  i < 5; i++){ // play game for 5 rounds 
    const playerSelection = prompt('Enter your choice (Rock, Paper or Scissors): '); // prompt user for a pick
    const computerSelection = computerPlay(); // assign value of a function to computer pick
    console.log(`Result of round ${i+1}:`,playRound(playerSelection,computerSelection)); // Display round number and call function for a single round 
}
if (playerScore = computerScore){ //conditionals for the game outcome 
    console.log('The game is even!')
}
else if (playerScore > computerScore) {
    console.log('You have won the game!');
}
else {
    console.log('You have lost the game!');
}

}
console.log(game()); //initialize game function

