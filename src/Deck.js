class Deck {
  constructor(card) {
    this.cards = card;
    this.numOfCards = 0;
  }
  countCards(length) {
    this.numOfCards = length;
  }

}

module.exports = Deck;
