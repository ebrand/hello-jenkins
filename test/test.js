var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
	it('respond with Hello world!', function(done) {
		request(app).get('/').expect('Hello JENKINS!', done);
	});
});