const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');


describe('Turn', function() {
    it('should be a function', function() {
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function(){
      expect(turn).to.be.an.instanceof(Turn);
    });

    it('should Instantiated with two arguments -  user’s guess and a Card object for the current card in play.', function() {
      expect(turn.guess).to.equal('pug');
      // console.log(turn.card.possibleAnswers)
      expect(turn.card.id).to.equal(1);
      expect(turn.card.question).to.equal('What is Robbie\'s favorite animal');
      expect(turn.card.possibleAnswers).to.deep.equal(['sea otter', 'pug', 'capybara']);
      expect(turn.card.correctAnswer).to.equal('sea otter');
    });

    it('should have a method that returns the guess', function() {
      expect(turn.returnGuess).to.be.an('function');
      expect(turn.returnGuess()).to.equal('pug');
    });

    it('should have a method that returns the Card', function() {
      expect(turn.returnCard).to.be.an('function');
      expect(turn.returnCard()).to.equal(card);
    });

    it('should be method that returns boolean indicating user’s guess matches the correct answer on the card', function() {
      expect(turn.evaluateGuess).to.be.an('function');
      expect(turn.evaluateGuess()).to.be.false;
    });

    it('should be method that returns ‘incorrect!’/‘correct!’ based on whether the guess is correct/not', function() {
      expect(turn.giveFeedback).to.be.an('function');
      expect(turn.giveFeedback()).to.equal('incorrect!');

    });

    // expect(name('something')).to.be.a('string');

    // .which.is.a('string').to.be.equal("abc");

      // expect([keyword]).which.is.an('object').has.a.property('[keyword]')
      // expect(typeof([keyword]) == 'function').to.be.true;
      // expect([keyword]).which.is.an('object').but.has.a.property('name').which.is.a('string');
      // expect(typeof([keyword]) == 'object').to.be.true;
      // expect(new [keywor]).to.be.an('object');



});
