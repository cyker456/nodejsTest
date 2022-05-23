const mysql = require("mysql");
var db = mysql.createConnection({
  host: "parkmysql1.mysql.database.azure.com",
  user: "prkt4252@parkmysql1",
  password: "eu023622!@",
  database: "bbs",
});

db.connect();
module.exports = db;
