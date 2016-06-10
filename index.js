var http = require('http');
var net = require('net');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.json({'ip address': req.connection.remoteAddress,
			  'language': req.headers["accept-language"],
			  'software': req.headers['user-agent']
	});
});

app.listen(port, function(){
	console.log('listening on ' + port);
});