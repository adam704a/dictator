var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Get the user profile
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('resources', { title: 'Running Dictator' });
});

var url = process.env.MONGO_URL;

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db.close();
});


router.get('/2', function(req, res) {
	var collection = db.get('resources');
	collection.find({}, function(err, resources){
	    if (err) throw err;
	  	res.json(resources);
	});
});

module.exports = router;