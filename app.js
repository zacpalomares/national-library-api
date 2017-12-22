var express = require('express'),
		bodyParser = require('body-parser'),
		http = require('http'),
		oauthserver = require('oauth2-server');

// routes
var users = require('./routes/users'),
		books = require('./routes/books'),
		authors = require('./routes/authors');

app = express();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// OAuth2 config [Start]
app.oauth = oauthserver({
	model: require('./model.js'),
	grants: ['password', 'client_credentials'],
	debug: true
});

app.all('/oauth/token', app.oauth.grant());
// OAuth2 config [End]

app.use('/user', app.oauth.authorise(), users);
app.use('/book', app.oauth.authorise(), books);
app.use('/author', app.oauth.authorise(), authors);

// Error handling as JSON
app.use(function (err, req, res, next) {
    res.status(err.statusCode || 500).json(err);
});

// Set app port listener
server.listen(8090, function(err){
		console.log('Server is running on 8090');
});
