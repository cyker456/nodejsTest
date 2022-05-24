const mysql = require("mysql");

const db = mysql.createConnection({
  host: "parkdb1.mysql.database.azure.com",
  user: "prkt4252@parkdb1",
  password: "eu023622!@",
  database: "bbs",
  port: "3306",
});

module.exports = db;
