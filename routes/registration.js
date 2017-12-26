var express = require('express');
var router = express.Router();
var User = require('.././models/User').User;
var UserService = require('.././services/UserService');

// For saving new User
router.post('/', function(req, res) {
	var obj = req.body;
	UserService.saveUser(obj).then(function(response){
		res.sendStatus(200).send({status: 'SUCCESS'});
	})
});

module.exports = router;
