class Round {
  constructor(deck) {
    this.currentCard = deck;
  }
  returnCurrentCard() {
    var deckIndex = Object.keys(this.currentCard);
    console.log(deckIndex[0]);
  }

}

module.exports = Round;
