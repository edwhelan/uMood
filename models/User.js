const db = require(`./db`);
const bcrypt = require('bcrypt');
const saltRounds = 10;
class User {
  constructor(id, displayname, emailaddress, password) {
    this.id = id,
      this.displayname = displayname,
      this.emailaddress = emailaddress,
      this.password = password
  }

  // CREATE


  // RETRIEVE


  // UPDATE


  // DELETE
}

module.exports = User;