function Letter(value) {
    this.value = value,
    this.guessed = false,
    this.setGuessed = function() {
        this.guessed = true;
    },
    this.displayLetter = function() {
        if(this.guessed) {
            return this.value;
        } else {
            return "_";
        }
    },
    this.checkGuess = function(guess) {
        if(this.value === guess) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;