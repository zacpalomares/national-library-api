var db = require('../db');
var AuthorInfo = require('./AuthorInfo').AuthorInfo;

var User = db.sequelize.define('users', {
  username: {
    type: db.Sequelize.STRING,
    field: 'username'
  },
  password: {
    type: db.Sequelize.STRING,
    field: 'password'
  },
  role: {
    type: db.Sequelize.STRING,
    field: 'role'
  }
},
{
  freezeTableName: true,
  timestamps: false
});

User.hasOne(AuthorInfo, { foreignKey: 'user_id' });

module.exports = {
	User: User
};
