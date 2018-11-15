const db = require(`./db`);

class Answer {
  constructor(id, answer, date) {
    this.id = id,
      this.answer = answer,
      this.date = date
  }

  // CREATE
  static add(answer, date, user_id, question_id) {
    // sql query
    return db.any(`insert into answers
    (answer, date,  user_id, question_id)
      values
    ($1, $2, $3, $4)`,
      [answer, date, user_id, question_id])
      .then(result => {
        const a = new Answer(result.id, result.answer, result.date, result.user_id, result.question_id);
        return a;
      })
  }

  // RETRIEVE
  static getAnswerByDate(date) {
    // sql query
    [date]
      .then(result => {
        return result
        // const a = new Answer(result.id, result.answer, result.date);
        // return a;
      })
  }

  // UPDATE
  // None

  // DELETE
  // None
}

module.exports = Answer;