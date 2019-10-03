const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn')

const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
const deck = new Deck([card1, card2, card3]);

const round = new Round(deck);

describe('Round', function() {
  it('currentCard should be the first Card in the Deck at the start of the Round', function() {
    // console.log(round.currentCard)
    expect(round.currentCard).to.equal(card1);
  });

  it('should be a method that returns the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('takeTurn: should update turns count', function() {
    expect(round.turns).to.equal(0);
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('takeTurn: should evaluates guesses', function() {
    round.takeTurn();
    expect(turn).to.equal(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  });

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
});
