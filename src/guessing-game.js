class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.tryToGuess = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.tryToGuess = Math.ceil((this.max + this.min) / 2)
        return this.tryToGuess;
    }

    lower() {
        this.max = this.tryToGuess;
    }

    greater() {
        this.min = this.tryToGuess;
    }
}
module.exports = GuessingGame;
