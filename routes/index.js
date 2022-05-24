var express = require('express');
const { listen } = require('../app');
var router = express.Router();
var db = require('../public/db/db');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const mainPage = fs.readFileSync(path.resolve(__dirname, "../views/index.ejs"), 'utf8');

/* GET home page. */
router.get('/getlist', function(req, res, next) {
  db.query("SELECT * from test_db", (err, results, fields) => {
    if(err) return res.status(500).send('server error');
    // var result = [];
    // for(var i=0; i<results.length; i++) {
    //   result.push('test_id' + results[i].test_id + 'test_name' + results[i].test_name);
    //   console.log(list);
    // }
    // res.send(list.join('\n'));
    else {
      var page = ejs.render(mainPage, {
          data : results
      });
      res.send(page);
    }
  });
});

module.exports = router;
