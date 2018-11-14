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
  static addUser(displayname, emailaddress, password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    // SQL QUERY
    return db.one(`insert into users
    (displayname, emailaddress, password)
        values
    ($1, $2, $3)`,
      [displayname, emailaddress, password])
      .then(data => {
        const u = new User(data.id, displayname, emailaddress);
        return u;
      })
  }

  // RETRIEVE
  static getById() {
    // db.one query
    // this.id
    return db.one(`
    select *
    from 
    users
    where id=$1`,
      [id])
      .then(result => {
        const u = new User(result.id, result.displayname, result.emailaddress, result.password);
        return u;
      })
  }


  // UPDATE
  updateDisplayName(newName) {
    this.displayname = newName;
    // sql query
    [this.id, newName]
  }


  // DELETE
  deleteSelf() {
    // sql query
    [this.id]
  }

}

module.exports = User;