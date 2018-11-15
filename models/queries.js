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
function getHealthByDate(date, id) {
  return db.any(`
  select 
  dailyscore, date, notes, user_id, displayname
  from
  health
    inner join
    users u
    on u.id = user_id
  where date=$1 AND u.id=$2;`, [date, id]
  ).then(console.table)
}
//get answer by date
function getAnswerByDate(id, date) {
  return db.any(`
  select
  *
  from answers
    inner join
      users u 
      on u.id = user_id 
  where u.id = $1 and date=$2` [id, date]
  ).then(console.table)
}

// UPDATE
//update display name
function updateUserDisplayName(newName) {
  return db.one(`
update users
set displayname=$1
where id=$2`, [newName, this.id]
  )
}

//update email 
function updateUserEmail(newEmail) {
  return db.one(`
update users
set emailaddress=$1
where id=$2`, [newEmail, this.id]
  )
}

function updatePassword(newPassword) {
  return db.one(`
update users
set password=$1
where id=$2`, [newPassword, this.id]
  )
}
// DELETE

module.exports = {
  addAUser,
  addAHealth,
  addAnAnswer,
  getQuestions,
  getUserByID,
  getHealthByDate,
  getAnswerByDate,
}