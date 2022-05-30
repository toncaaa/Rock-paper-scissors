
function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const play = choice[Math.floor(Math.random()*choice.length)];
    console.log(choice.length);
    console.log(Math.random()); // generates a number between 0 and 1
    console.log(play);
    return play;
}
const computerSelection = computerPlay(); // assign value of function to a variable
let playerSelection = prompt('Enter your choice: ');

console.log(playerSelection);


function playRound (playerSelection, computerSelection) {  //play one round
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); // making input case insensitive 
     if (playerSelection === computerSelection) {   // game rules 
        console.log('It\s a draw');
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log(`You've won ${playerSelection} beats ${computerSelection}`);
        }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        console.log(`You've lost ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log(`You've won ${playerSelection} beats ${computerSelection}`);
        }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        console.log(`You've lost ${computerSelection} beats ${playerSelection}`);
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log(`You've won ${playerSelection} beats ${computerSelection}`);
        }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        console.log(`You've lost ${computerSelection} beats ${playerSelection}`);
    }
}

console.log(playRound(playerSelection,computerSelection));

