var http = require('http');
var net = require('net');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.json({'ip address': req.ip,
			  'language': req.get("accept-language"),
			  'software': req.get('user-agent')
	});
});

app.listen(port, function(){
	console.log('listening on ' + port);
});