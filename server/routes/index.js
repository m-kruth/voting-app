var express = require('express');
var router = express.Router();

db = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/vote', function(req, res, next) {
  vote = req.body.vote
  console.log(vote)
  db.push(vote)
  console.log(db)
});

module.exports = router;