var express = require('express'),
		bodyParser = require('body-parser'),
		http = require('http'),
		oauthserver = require('oauth2-server');

app = express();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(app.oauth.errorHandler());

// OAuth2 config [Start]
app.oauth = oauthserver({
	model: require('./model.js'),
	grants: ['password', 'client_credentials'],
	debug: true
});

app.all('/oauth/token', app.oauth.grant());
// OAuth2 config [End]


// Set app port listener
server.listen(8090, function(err){
		console.log('Server is running on 8090');
});
