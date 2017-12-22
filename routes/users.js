var express = require('express');
var router = express.Router();
var User = require('.././models/User').User;
var UserInfo = require('.././models/UserInfo').UserInfo;

// Get all users
router.get('/', function(req, res, next) {
	User.findAll({
  	include: [
			{ model: UserInfo, attributes: ['firstName', 'lastName'] }
		]
	}).then(function(users){
		res.json(users);
	});
});

// Single user lookup
router.get('/:id', function(req, res, next) {
	User.find({
		where: {
    	id: req.params.id
    },
  	include: [
			{ model: UserInfo, attributes: ['firstName', 'lastName'] }
		]
	}).then(function(users){
		res.json(users);
	});
});

// For saving new User
router.post('/', function(req, res) {
	var obj = req.body;

	User.create({
		username: obj.username,
		password:	obj.password
	}).then(function(response){
		UserInfo.create({
			firstName: obj.users_info.firstName,
			lastName: obj.users_info.lastName,
			user_id: response.dataValues.id
		}).then(function(){
			res.sendStatus(200);
		});
	})
});

// For updating User
router.put('/:id', function(req, res) {
	res.json(req.body);
});

// For deleting User
router.delete('/:id', function(req, res) {
	res.json(req.body);
});

module.exports = router;
