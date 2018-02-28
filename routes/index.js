var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game', function(req, res, next) {
  res.sendFile('game.html', {root : path.join(__dirname, '../views/')});
});
module.exports = router;
