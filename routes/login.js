const express = require("express");
var router = express.Router();
const path = require("path");

router.get("/login", (req, res, next) => {
  console.log("login.html");
  res.sendFile(path.join(__dirname, "..", "write.html"));
});

router.post("/view", (req, res) => {
  //   console.log(req.body.title, req.body.date);
  res.render(
    "view.ejs",
    { title: req.body.title, date: req.body.date },
    (err, html) => {
      if (err) console.log(err);
      res.end(html);
    }
  );
});

module.exports = router;
