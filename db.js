var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://OEK:password@localhost:5432/postgres');

// set force to true for drop and create
sequelize.sync({force:false}).then(function (result) {
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
