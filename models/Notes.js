const db = require(`./db`);

class Notes {
  constructor(id, date, note) {
    this.id = id,
      this.date = date,
      this.note = note
  }

  // CREATE
  static add(date, note, user_id) {
    // sql query
    return db.any(`
    insert into notes 
      (date, notes, user_id)
        values
      ($1, $2, $3, $4)`,
      [, date, note, user_id])
      .then(result => {
        const h = new Notes(result.id, date, note, user_id);
        return h;
      })
  }

  // RETRIEVE
  static getByDate(date, id) {
    // sql query
    return db.any(`
    select 
    *
    from
    notes
      inner join
      users u
      on u.id = user_id
    where date=$1 AND u.id=$2;`,
      [date, id])
      .then(result => {
        return result;
        // const h = new Notes(result.id, result., result.date, result.notes, result.user_id);
        // return h;
      })
  }
  // UPDATE
  // No methods, health won't be updated

  // DELETE
  // No methods here
}

module.exports = Notes;