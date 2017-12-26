var User = require('.././models/User').User;
var AuthorInfo = require('.././models/AuthorInfo').AuthorInfo;
var Promise = require('bluebird');

var AuthorService = {
  getAllAuthors : function() {
    return User.findAll({
  		where: {
      	id: userId,
        role: 'AUTHOR' // just to make sure it's author
      },
    	include: [
  			{ model: AuthorInfo, attributes: ['authorName', 'authorCountry'] }
  		]
  	});
  },
  getAuthorById : function(id) {
    return User.find({
  		where: {
      	id: id,
        role: 'AUTHOR' // just to make sure it's author
      },
    	include: [
  			{ model: AuthorInfo, attributes: ['authorName', 'authorCountry'] }
  		]
  	});
  },
  updateAuthor : function(id, info) {
    return new Promise(function(resolve, reject) {
      if (id && info) {
        UserService.getUserById(id).then(function(user) {
          var userId = user.userId;
          AuthorInfo.find({where: {
            user_id: userId
          }}).then(function(info){
            info.update({
              authorName: info.author_name,
              authorCountry: info.author_country
            }).then(function(response) {
              resolve(response);
            }).catch(function(response) {
              reject(response);
            });
          });
        });
      } else {
        reject({
          error: 'user or user id is null'
        })
      }
    });
  },
  deleteAuthor : function(id) {
    return new Promise(function(resolve, reject) {
      if (id) {
        UserService.getUserById(id).then(function(user) {
          user.destoy.then(function(user) {
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

module.exports = AuthorService;
