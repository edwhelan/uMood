const db = require(`./db`);
const bcrypt = require('bcrypt');
const saltRounds = 10;
class User {
  constructor(id, displayname, emailaddress, passHash) {
    this.id = id,
      this.displayname = displayname,
      this.emailaddress = emailaddress,
      this.passHash = passHash
  }

  // CREATE
  static addUser(displayname, emailaddress, password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    // SQL QUERY
    return db.one(`insert into users
    (displayname, emailaddress, password)
        values
    ($1, $2, $3)
    returning id`,
      [displayname, emailaddress, hash])
      .then(data => {
        const u = new User(data.id, displayname, emailaddress);
        return u;
      })
  }

  // RETRIEVE
  static getById(id) {
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

  static getByEmail(email) {
    return db.one(`
      select * from users where emailaddress ilike '$1:raw'`, [email])
      .then(result => {
        const u = new User(result.id, result.displayname, result.emailaddress, result.password);
        return u;
      });
  }

  checkPassword(password) {
    return bcrypt.compareSync(password, this.passHash);
  }


  // UPDATE
  static updateDisplayNameAndEmail(newName, newEmail, id) {
    // this.emailaddress = newEmail;
    // this.displayname = newName;
    return db.one(`
    update users
    set displayname=$1,
    emailaddress=$2
    where id=$3`, [newName, newEmail, id]
    )
  }


  updatePassword(newPassword) {
    return db.one(`
    update users
    set password=$1
    where id=$2`, [newPassword, this.id]
    )
  }


  // DELETE
  deleteSelf() {
    // sql query
    [this.id]
  }

}

module.exports = User;