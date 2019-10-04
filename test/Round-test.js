const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');


describe('Round', function() {
  let card1, card2, card3, round, turn;
  let deck = [];

  beforeEach( () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    turn = new Turn('sea otter', card1);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

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
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('takeTurn should gives feedback', function(){
    turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('correct!');
  });

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
});
