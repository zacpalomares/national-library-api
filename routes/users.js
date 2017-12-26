var express = require('express');
var router = express.Router();
var UserService = require('.././services/UserService');

// Get all users
router.get('/', function(req, res) {
	UserService.getAllUsers().then(function(users){
		res.json(users);
	});
});

// Single user lookup
router.get('/:id', function(req, res) {
	UserService.getUserById(req.params.id).then(function(user){
		res.json(user);
	});
});

// For saving new User
router.post('/', function(req, res) {
	var obj = req.body;
	UserService.saveUser(obj).then(function(response){
		res.sendStatus(200);
	})
});

// For updating User
router.put('/', function(req, res) {
	UserService.updateUser(req.body).then(function(data){
		res.sendStatus(200);
	}).catch(function(data){
		res.status(500).send(data);
	});
});

// For deleting User
router.delete('/:id', function(req, res) {
	res.json(req.body);
});

module.exports = router;
