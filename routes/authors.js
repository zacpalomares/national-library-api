var express = require('express');
var router = express.Router();
var AuthorService = require('.././services/AuthorService');

// use /register probably?
router.post('/', function(req, res) {
});

router.put('/:id', function(req, res) {
	var id = req.params.id;
	var body = req.body;
	AuthorService.updateAuthor(id, body)
		.then(function(response) {
			res.sendStatus(200);
		})
});

router.get('/:id', function(req, res) {
	AuthorService.getAuthorById(req.params.id)
		.then(function(author){
			res.json(author);
		});
});

router.delete('/:id', function(req, res) {
	AuthorService.deleteAuthor(req.params.id)
		.then(function(response){
			res.sendStatus(200);
		});
});

module.exports = router;
