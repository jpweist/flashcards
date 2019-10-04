const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[this.turns];
    this.incorrectGuesss = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[this.turns]);
    // console.log(this.turns)

    turn.evaluateGuess();
    turn.giveFeedback();
    this.turns++;
    // console.log(deck)

  }

}

module.exports = Round;
