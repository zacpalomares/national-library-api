var db = require('../db');
var AuthorInfo = require('./AuthorInfo').AuthorInfo;
var Book = require('./Book').Book;

var BookAuthors = db.sequelize.define('book_authors',  {
  started: db.Sequelize.BOOLEAN
});

// many to many mapping
Book.belongsToMany(AuthorInfo, { through: BookAuthors });
AuthorInfo.belongsToMany(Book, { through: BookAuthors });

module.exports = {
  BookAuthors: BookAuthors
}
