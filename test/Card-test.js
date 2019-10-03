const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

describe('Card', function() {

  it('should be a function', function() {
    const card = new Card();
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should have and id', function() {
    expect(card.id).to.equal(1);
  });

  it('should store a question', function() {
    expect(card.question).to.equal('What is Robbie\'s favorite animal');
  });

  it('should store a list of possible answers', function() {
    expect(card.possibleAnswers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('sea otter');
  });
});
