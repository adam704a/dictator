var express = require('express');
var passport = require('passport');
var router = express.Router();

var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Running Dictator' });
});

router.get('/login',
  function(req, res){
    res.render('login', { env: env });
  });

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/teachers');
  });

router.get('/classes', function(req, res, next) {
  res.render('classes', { title: 'Running Dictator' });
});

router.get('/teachers', function(req, res, next) {
  res.render('teachers', { title: 'Running Dictator' });
});

router.get('/students', function(req, res, next) {
  res.render('students', { title: 'Running Dictator' });
});

router.get('/resources', function(req, res, next) {
  res.render('resources', { title: 'Running Dictator' });
});

router.get('/storyboard', function(req, res, next) {
  res.render('storyboard', { title: 'Running Dictator' });
});

module.exports = router;
