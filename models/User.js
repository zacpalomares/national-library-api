var db = require('../db');
var UserInfo = require('./UserInfo').UserInfo;

var User = db.sequelize.define('users', {
  username: {
    type: db.Sequelize.STRING,
    field: 'username'
  },
  password: {
    type: db.Sequelize.STRING,
    field: 'password'
  },
  isSuperUser: {
    type: db.Sequelize.BOOLEAN,
    field: 'is_super_user',
    default: false
  }
},
{
  freezeTableName: true,
  timestamps: false
});

User.hasOne(UserInfo, { foreignKey: 'user_id' });

module.exports = {
	User: User
};
