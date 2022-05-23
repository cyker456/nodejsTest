const express = require("express");
const router = express.Router();
const db = require("../lib/db");
const fs = require("fs");
const ejs = require("ejs");
router.get("/", function (req, res) {
  // / url로 접속했을 때
  fs.readFile(__dirname + "/../views/list.ejs", "utf8", function (err, data) {
    // ejs 파일을 불러옴
    // 경로를 제대로 명시해주어야 ejs 파일을 불러올 수 있음.
    db.query("select * from MusicList", function (err, results) {
      // db의 SQL 질의의 결과
      if (err) {
        res.send(err);
      } else {
        res.send(
          ejs.render(data, {
            data: results,
          })
        );
      }
    });
  });
});

router.get("/delete/:id", function (req, res) {});

router.get("/insert", function (req, res) {});

router.post("/insert", function (req, res) {});

router.get("/edit/:id", function (req, res) {});

router.post("/edit/:id", function (req, res) {});

module.exports = router;
