const db = require(`./db`);

class Health {
  constructor(id, dailyscore, date, notes) {
    this.id = id,
      this.dailyscore = dailyscore,
      this.date = date,
      this.notes = notes
  }

  // CREATE
  static add(dailyscore, date, notes) {
    // sql query
    [dailyscore, date, notes]
      .then(result => {
        const h = new Health(result.id, dailyscore, date, notes);
        return h;
      })
  }

  // RETRIEVE
  static getByDate(date) {
    // sql query
    [date]
      .then(result => {
        const h = new Health(result.id, result.dailyscore, result.date, result.notes);
        return h;
      })
  }
  // UPDATE
  // No methods, health won't be updated

  // DELETE
  // No methods here
}

module.exports = Health;