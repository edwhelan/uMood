const db = require(`./db`);

class Health {
  constructor(id, dailyscore, date, notes) {
    this.id = id,
      this.dailyscore = dailyscore,
      this.date = date,
      this.notes = notes
  }

  // CREATE
  static add(dailyscore, date, notes, user_id) {
    // sql query
    return db.any(`
    insert into health 
      (dailyscore, date, notes, user_id)
        values
      ($1, $2, $3, $4)`,
      [dailyscore, date, notes, user_id])
      .then(result => {
        const h = new Health(result.id, dailyscore, date, notes, user_id);
        return h;
      })
  }

  // RETRIEVE
  static getByDate(date) {
    // sql query
    return db.any(`
    select 
    dailyscore, date, notes, user_id, displayname
    from
    health
      inner join
      users u
      on u.id = user_id
    where date=$1 AND u.id=$2;`,
      [date, id])
      .then(result => {
        const h = new Health(result.id, result.dailyscore, result.date, result.notes, displayname);
        return h;
      })
  }
  // UPDATE
  // No methods, health won't be updated

  // DELETE
  // No methods here
}

module.exports = Health;