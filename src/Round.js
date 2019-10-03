class Round {
  constructor(deck) {
    this.turns = 0;
    this.currentCard = deck.cards[this.turns];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn() {
    const turn = new Turn(deck[this.turns]);
    this.turns++;

  }

}

module.exports = Round;
