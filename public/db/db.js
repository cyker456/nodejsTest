const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "eu023622",
  database: "bbs",
  port: "3306",
});

module.exports = db;
