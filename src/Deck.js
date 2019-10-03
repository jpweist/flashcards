class Deck {
  constructor(card) {
    this.cards = [];
    this.numOfCards = this.cards.length;
  }
  makeDeck(card) {
    this.cards.push(card);
    this.numOfCards = this.cards.length;
  
  }

}

module.exports = Deck;
