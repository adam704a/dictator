var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('teachers', { title: 'Running Dictator' });
});

router.get('/classes', function(req, res, next) {
  res.render('classes', { title: 'Running Dictator' });
});

router.get('/teacher_login', function(req, res, next) {
  res.render('teacher_login', { title: 'Running Dictator' });
});

module.exports = router;
