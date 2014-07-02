var chai = require('chai'),
	obfuscate = require('../lib/email-obfuscator'),
	expect = chai.expect,
	emailAddresses = require('./fixtures/email-addresses.json');

describe('emails', function() {

	it("should obfuscate email addresses", function(done) {

		emailAddresses.forEach(function(emailAddress) {
			expect(obfuscate(emailAddress[0])).to.not.equal(emailAddress[0]);
			expect(obfuscate(emailAddress[0])).to.equal(emailAddress[1]);
		});

		done();

	});

});