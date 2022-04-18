const pgp = require('pg-promise')();
const db = pgp({
  user: 'postgres',
  host: 'localhost',
  database: 'blog',
  password: '123',
  port: 5432,
});

module.exports = db;
