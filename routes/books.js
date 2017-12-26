var express = require('express');
var router = express.Router();
var BookService = require('.././services/BookService');

// search book
router.post('/search', function(req, res) {
  var body = req.body;
  BookService.searchBook(body.bookNames, body.authorNames).then(function(result) {
    res.json(result);
  })
});

router.get('/', function(req, res) {
  BookService.getAllBooks().then(function(books) {
    res.json(books);
  })
});

//add a book
router.post('/', function(req, res) {
  BookService.saveBook(req.body).then(function(response) {
    res.sendStatus(200).send({status: 'BOOK_ADDED'});
  });
});

router.put('/:id', function(req, res) {
  BookService.updateBook(req.params.id, req.body).then(function(response) {
    res.sendStatus(200).send({status: 'BOOK_UPDATED'});
  });
});

router.delete('/:id', function(req, res) {
  BookService.deleteBook(req.params.id).then(function(response) {
    res.sendStatus(200).send({status: 'BOOK_DELETED'});
  });
});

module.exports = router;
