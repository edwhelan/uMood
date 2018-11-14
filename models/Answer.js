const db = require(`./db`);

class Answer {
  constructor(id, answer, date) {
    this.id = id,
      this.answer = answer,
      this.date = date
  }

  // CREATE
  static add(answer, date) {
    // sql query
    [answer, date]
      .then(result => {
        const a = new Answer(result.id, result.answer, result.date);
        return a;
      })
  }

  // RETRIEVE
  static getAnswerByDate(date) {
    // sql query
    [date]
      .then(result => {
        const a = new Answer(result.id, result.answer, result.date);
        return a;
      })
  }

  // UPDATE
  // None

  // DELETE
  // None
}

module.exports = Answer;