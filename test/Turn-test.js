const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    it('should be a function', function() {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function(){
      const turn = new Turn();
      expect(turn).to.be.an.instanceof(Turn);
    });

    it('should Instantiated with two arguments -  user’s guess and a Card object for the current card in play.', function() {
      const turn = new Turn('seven', Card);
      expect(turn.guess).to.be.a('string');
      expect({Card: 0}).to.deep.equal({Card: 0});
    });

    it('should have a method that returns the guess', function() {
      const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const turn = new Turn('pug', card);
      expect(turn.returnGuess).to.be.an('function');
      expect(turn.returnGuess()).to.equal('pug');
    });

    it('should have a method that returns the Card', function() {
      const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const turn = new Turn('pug', card);
      expect(turn.returnCard).to.be.an('function');
      expect(turn.returnCard()).to.equal(card);
    });

    it('should be a method that returns a boolean indicating if the user’s guess matches the correct answer on the card', function() {
      const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

      const turn = new Turn('pug', card);

      expect(turn.evaluateGuess).to.be.an('function');
      expect(turn.evaluateGuess()).to.be.false;
    });

    it('should be method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
      const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const turn = new Turn('pug', card);
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
