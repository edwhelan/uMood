// Pulling in pg-promise and setting up DB
const pgp = require("pg-promise")({
  query: e => {
    console.log('QUERY: ', e.query);
    if (e.params) {
      console.log('PARAMS: ', e.params);
    }
  }
});

// DB object to export
const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

module.exports = db;