var inquirer = require("inquirer");
var Word = require("./Word.js");
//var clc = require("cli-color");

var randomWords = ['pluck', 'abstract', 'cluster', 'frank', 'joint', 'theme', 'percent', 'permission',
    'cream', 'humanity', 'performance', 'policy', 'haunt', 'bare', 'finish', 'moral', 'stun', 'install',
    'face', 'guideline'];
var guessesLeft = 10;
var lettersGuessed = [];
var word = {};

Word.prototype.toString = function() {
    var stringToDisplay = "";
    (this.letterArray()).forEach(letter => {
        stringToDisplay += letter.displayLetter() + " ";
    })
    return stringToDisplay.trim();
}

function chooseRandomWord() {
    var randIndex = Math.floor(Math.random() * randomWords.length);
    return randomWords[randIndex];
}

function checkGuess(guess) {
    if(lettersGuessed.indexOf(guess) !== -1) {
        return `You have already guessed ${guess}`
    }

   if(word.checkGuess()) {
        return "correct"
   } else {
       return "incorrect"
   }
    
}

function displayWord(result) {
    var continueGame = true;
    switch(result) {
        case "correct":
            console.log("Correct!!!");
            var currStatus = word.toString();
            if(currStatus.indexOf("_") === -1) {
                console.log("You got it right! Next word!")
                resetGame();
            } else {
                console.log(word);
            }
            break;
        case "incorrect":
            console.log("Incorrect!!!");
            guessesLeft--;
            if(guessesLeft === 0) {
                console.log("You lost. Next word!");
                resetGame();
            } else {
                console.log(word);
            }
            break;
        case "":
        console.log(word.toString())
            break;
        default:
            console.log(result);
            console.log(word);
            break;
    }
}

function promptForGuess() {
    inquirer.prompt(
        {
            name: "guess",
            message: "Guess a letter!"
        }
    ).then( function(answer) {
        var guess = answer.guess;
        displayWord(checkGuess(guess));
        promptForGuess();
    } )
}

function resetGame() {
    guessesLeft = 10;
    lettersGuessed = [];
    word = new Word(chooseRandomWord());
    
    displayWord("");
    promptForGuess();
}

resetGame();