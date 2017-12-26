var db = require('../db');
var AuthorInfo = require('./AuthorInfo').AuthorInfo;

var Book = db.sequelize.define('books', {
  bookName: {
    type: db.Sequelize.STRING,
    field: 'book_name'
  },
  bookEdition: {
    type: db.Sequelize.STRING,
    field: 'book_edition'
  }
},
{
  freezeTableName: true,
  timestamps: false
});

// the main author
AuthorInfo.hasOne(Book, { foreignKey: 'main_author_id' });


module.exports = {
  Book: Book
};
