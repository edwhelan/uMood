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
  static getAnswerByDate(id, date) {
    // sql query
    return db.any(`select * from answers
    inner join
    users u
    on u.id = user_id
    where u.id = $1 AND date = $2`, [id, date])
      .then(result => {
        return result;
      })
  }

  static answerByQuestion(user_id, question_id) {
    return db.any(`
      select * from answers
      where user_id = $1
      AND 
      question_id = $2
      order by date asc
      limit 7`, [user_id, question_id]
    )
      .then(result => {
        return result;
      })
  }

  // UPDATE
  // None

  // DELETE
  // None
}

module.exports = Answer;