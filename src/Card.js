class Card {
  constructor(id, question, possibleAnswers = [], correctAnswer) {
    this.id = id;
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  }


}

module.exports = Card;


// Each card has an id, a question, possible answers, and a correct answer
