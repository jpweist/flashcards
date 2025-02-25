const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
const deck = new Deck([card1, card2, card3]);

describe('Deck', function(){

    it('should be a function', function(){
      const deck = new Deck();
      expect(Deck).to.be.an('function');
    });

    it('should be an instance of Deck', function() {
      const deck = new Deck();
      expect(deck).to.be.an.instanceof(Deck);
    });

    it('should be an array of cards', function() {
      expect(deck.cards).to.deep.equal(deck.cards);
    })

    it('should know how many cards are in the deck', function() {
      deck.countCards(deck.cards.length);
      expect(deck.numOfCards).to.equal(3);
    })
});
