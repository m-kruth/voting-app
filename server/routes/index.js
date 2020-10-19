var express = require('express');
var router = express.Router();

db = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/vote', function(req, res, next) {
  vote = req.body.vote
  db.push(vote)
  next()
  console.log(db)
});

router.use('/vote', function(req, res) {
 res.render ('index', { title: 'GarbDB Votes', db})
})

module.exports = router;