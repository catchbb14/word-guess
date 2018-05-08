var Letter = require('./Letter.js');

function Word(value) {
    this.strValue = value;
    this.arrValue = value.split("");
    this.letterArray = function() {
        var letterArray = [];
        (this.arrValue).forEach(letter => {
            letterArray.push(new Letter(letter))
        });
        return letterArray;
    };
    this.checkGuess = function(guess) {
        var correct = false;
        (this.letterArray()).forEach(letter => {
            if(letter.checkGuess(guess)) {
                correct = true;
            }
        })
        return correct;
    }
}


module.exports = Word;