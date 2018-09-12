



var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var remainingGuesses = 10;



computerchoice();
var pastGuesses = [];

document.onkeyup = function (event) {
    var userGuesses = event.key;
   
    remainingGuesses--;
    pastGuesses.push(userGuesses);
    console.log(userGuesses);
    console.log(computerGuess);

    console.log(pastGuesses);
    

    if (userGuesses === computerGuess) {
        alert("you win");
        wins++;
        remainingGuesses = 10;
        console.log(computerGuess);
        gameover();
        computerchoice();
    }

    else if (remainingGuesses === 0) {
        losses++;
        
        console.log(computerGuess);
        alert("you lose");
        remainingGuesses = 10;
        gameover();
        computerchoice();
    }

    document.getElementById("guesses-text").textContent = "previous guesses: "+pastGuesses.toString();
    document.getElementById("wins-text").textContent = "wins: " + wins;
    document.getElementById("losses-text").textContent = "losses: " +losses;
    document.getElementById("guessesLeft-text").textContent = "Remaining guesses: " +remainingGuesses;
    

}




function computerchoice() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

function gameover() {
pastGuesses=[];
document.getElementById("guesses-text").textContent = pastGuesses.toString();

}









