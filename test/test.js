var assert = require('assert');
var app = require('../app');
var request = require("request");

describe('API', function() {
	it('GET /', function(done) {
		request.get('http://localhost:8080', function(err, response, body) {
			if (err) throw err;
			assert.equal(200, response.statusCode)
			assert.equal("{\"alive\":true}\n", body)
			done();
		});
	});
});