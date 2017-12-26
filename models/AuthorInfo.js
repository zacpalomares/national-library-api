var db = require('../db');

var AuthorInfo = db.sequelize.define('users_info', {
  authorName: {
    type: db.Sequelize.STRING,
    field: 'author_name'
  },
  authorCountry: {
    type: db.Sequelize.STRING,
    field: 'author_country'
  }
},
{
  freezeTableName: true,
  timestamps: false
});

module.exports = {
  AuthorInfo: AuthorInfo
};
