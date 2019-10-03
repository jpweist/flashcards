const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
const deck = new Deck([card1, card2, card3]);

const round = new Round(deck);

describe('Round', function() {
  it('should take the deck as an input', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should be a method that returns the current card being played', function() {
    round.returnCurrentCard();
    expect(returnCurrentCard).to.equal(card1);
  });


});
