var User = require('.././models/User').User;
var AuthorInfo = require('.././models/AuthorInfo').AuthorInfo;
var Promise = require('bluebird');

var UserService = {
  getAllUsers : function() {
    return User.findAll({
    	include: [
  			{ model: AuthorInfo, attributes: ['authorName', 'authorCountry'] }
  		]
  	})
  },
  getUserById : function(userId) {
    return User.find({
  		where: {
      	id: userId
      },
    	include: [
  			{ model: AuthorInfo, attributes: ['authorName', 'authorCountry'] }
  		]
  	})
  },
  saveUser : function(user) {
    return new Promise(function(resolve) {
      User.create({
    		username: user.username,
    		password:	user.password,
        role: user.role
    	}).then(function(response){

        // if role is AUTHOR then info should be at the request at the first place
    		if (user.role == 'AUTHOR' && user.users_info) {
    			AuthorInfo.create({
    				authorName: user.users_info.author_name,
    				authorCountry: user.users_info.author_country,
    				user_id: response.dataValues.id
    			}).then(function(response){
    				resolve(response);
    			})
    		}
    	})
    });
  },
  updateUser : function(user) {
    return new Promise(function(resolve, reject) {
      if (user && user.id) {
        UserService.getUserById(user.id).then(function(parsedUser) {
          parsedUser.updateAttributes({
            username: user.username,
            password: user.password
          }).success(function(data){
            resolve(data);
          });
        });
      } else {
        reject({
          error: 'user or user id is null'
        })
      }
    });
  },
  deleteUser : function(id) {
    return new Promise(function(resolve, reject) {
      if (id) {
        UserService.getUserById(id).then(function(user) {
          User.destroy(user).then(function(user) {
            resolve(user);
          });
        });
      } else {
        reject({
          error: 'user or user id is null'
        })
      }
    });
  }
}

module.exports = UserService;
