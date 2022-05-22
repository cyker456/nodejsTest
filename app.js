const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./routes/login");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("http://localhost:3000/login");
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router); // 일단 / 경로가 들어가면
