const db = require('./db');

// CREATE 
//create a user
function addAUser(displayname, emailaddress, password) {
  return db.one(`insert into users
  (displayname, emailaddress, password)
      values
  ($1, $2, $3)`, [displayname, emailaddress, password])
}
//create a health

//make an answer
//RETRIEVE

// UPDATE

// DELETE

module.exports = {
  addAUser,
}