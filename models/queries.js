const db = require('./db');

// CREATE 
//create a user
function addAUser(displayname, emailaddress, password) {
  return db.one(`insert into users
  (displayname, emailaddress, password)
      values
  ($1, $2, $3)`, [displayname, emailaddress, password])
    .then(results => {
      console.log(results);
    })
}
//create a health
function addAHealth(dailyscore, date, notes, user_id) {
  return db.any(`
  insert into health 
    (dailyscore, date, notes, user_id)
      values
    ($1, $2, $3, $4)`, [dailyscore, date, notes, user_id]
  )
}
//make an answer
function addAnAnswer(answer, date, user_id, question_id) {
  return db.any(`insert into answers
    (answer, date,  user_id, question_id)
      values
    ($1, $2, $3, $4)`, [answer, date, user_id, question_id]
  )
}

//RETRIEVE
//get questions
function getQuestions() {
  return db.any(`
  select *
  from
  questions
  `).then(console.log)
}
//get users by id
function getUserByID(id) {
  return db.one(`
  select *
  from 
  users
  where id=$1`, [id]
  ).then(console.log)
}
//get display name

//get health by date

//get answer by date

// UPDATE

// DELETE

module.exports = {
  addAUser,
  addAHealth,
  addAnAnswer,
  getQuestions,
  getUserByID,
}