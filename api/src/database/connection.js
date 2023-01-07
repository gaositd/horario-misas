require('dotenv').config();
const mariadb = require('mysql2');

const cxn = mariadb.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWD,
});

cxn.query(
  `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`,
  function (err, results) {
    console.log(results);
    console.log(err);
  }
);

cxn.end();

module.exports = cxn;