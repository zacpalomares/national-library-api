var Book = require('.././models/Book').Book;
var AuthorInfo = require('.././models/AuthorInfo').AuthorInfo;
var BookAuthors = require('.././models/BookAuthors').BookAuthors;
var Promise = require('bluebird');

var BookService = {
  getAllBooks : function() {
    return Book.findAll({ include: [
      { model: AuthorInfo, attributes: ['authorName', 'authorCountry'] }
    ]})
  },
  saveBook : function(book) {
    return new Promise(function(resolve) {
      console.log(book);
      Book.create({
        bookName: book.book_name,
        bookEdition: book.book_edition,
        main_author_id: book.main_author_id
      }).then(function(newBook){
        var coAuthors = book.co_authors;
        if (coAuthors && coAuthors.length > 0) {
          BookAuthors.bulkCreate(createCoAuthors(newBook.id, coAuthors))
            .then(function(){
              resolve(newBook);
            });
        }
      });
    });
  },
  updateBook : function(id, book) {
    return new Promise(function(resolve) {
      Book.find({where: {id: id}}).then(function(parsedBook) {
        parsedBook.updateAttributes({
          bookName: book.book_name,
          bookEdition: book.book_edition
        }).success(function(data){
          resolve(data);
        });
      });
    });
  },
  deleteBook : function(id) {
    return new Promise(function(resolve, reject) {
      if (id) {
        Book.find({where: {id: id}}).then(function(parsedBook) {
          Book.find({where: {id: id}}).then(function(book){
            resolve(book);
          });
        });
      } else {
        reject({
          error: 'user or user id is null'
        })
      }
    });
  },
  searchBook : function(authorNames, bookNames) {
    return new Promise(function(resolve, reject) {
      Book.find({
        where: {
          bookName: bookNames
        },
        include: [{
          model: AuthorInfo,
          where: { authorName: authorNames }
        }]
      })
    });
  }
}

function createCoAuthors(bookId, coAuthors) {
  var coAuthorsArr = [];
  coAuthors.forEach(function(value) {
    coAuthorsArr.push({
      bookId: bookId,
      usersInfoId: value
    })
  });

  console.log(coAuthorsArr)
  return coAuthorsArr;
}


module.exports = BookService;
