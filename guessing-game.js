function guessingGame() {
    let won = false;
    let winningNum = Math.floor(Math.random()*100);
    let numGuess = 0;
    return function checkForWin(guessNum){
        if(won) return 'The game is over, you already won!';
        
        if(guessNum === winningNum){
            won = true;
            numGuess ++;
            return `You win! You found ${winningNum} in ${numGuess} guesses.`;
        }else if(guessNum < winningNum){
            numGuess ++;
            return `${guessNum} is too low!`
        }else if(guessNum > winningNum){
            numGuess ++;
            return `${guessNum} is too high!`
        }
        
        
    };
}

module.exports = { guessingGame };
