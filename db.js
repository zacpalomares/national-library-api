var config = require('./config.js').DBConfig;
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.provider + '://' +
                    config.username + ':'+ config.passowrd +'@'+
                    config.host +':'+ config.port +'/'+ config.database);

// set force to true for drop and create
sequelize.sync({ force: config.drop_create }).then(function (result) {
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
