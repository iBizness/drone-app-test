var http = require('http');
var fs = require('fs');

server = http.createServer(function(req, res) {
		res.writeHead(200, {
			'Content-Type': 'text/javascript',
			'Access-Control-Allow-Origin': '*'
		});
		res.end('{\"alive\":true}\n');
});

port = 8080;
host = '0.0.0.0';
server.listen(port, host);
console.log('App at http://' + host + ':' + port);
