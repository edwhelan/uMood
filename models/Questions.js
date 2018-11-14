const db = require(`./db`);

class Question {
  constructor(id, questiontext) {
    this.id = id,
      this.questiontext = questiontext
  }

  // RETRIEVE
  static getQuestions() {
    // db.any query
    .then(questionArray => {
      const instanceArray = questionArray.map(quesObj => {
        const q = new Question(quesObj.id, quesObj.questiontext);
        return q;
      });
      return instanceArray;
    })
  }

}

module.exports = Question;