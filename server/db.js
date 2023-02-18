const Pool = require("pg").Poolrequire("dptenv").config();

const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: "todo",
});

module.exports = pool;
