const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.listen(3000, function () {
  console.log("Server is running at : http://127.0.0.1:3000");
});

const indexRouter = require("./routes/index");
app.use("/", indexRouter);
