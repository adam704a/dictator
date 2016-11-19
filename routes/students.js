var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('students', { title: 'Running Dictator' });
});

module.exports = router;
