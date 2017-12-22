var db = require('../db');

var UserInfo = db.sequelize.define('users_info', {
  firstName: {
    type: db.Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: db.Sequelize.STRING,
    field: 'last_name'
  }
},
{
  freezeTableName: true,
  timestamps: false
});

module.exports = {
  UserInfo: UserInfo
};
