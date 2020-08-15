var express = require('express');
var router = express.Router();

db = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/vote', function(req, res, next) {
  vote = req.body.vote
  vote2 = req.body.vote2
  console.log(vote)
  console.log(vote2)
  db.push(vote)
  console.log(db)
});

module.exports = router;