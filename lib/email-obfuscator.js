var addrs = require("email-addresses");

function obfuscatePart(part) {

	var obfuscatedPart = '',
		expose = true,
		i,
		char,
		isAlphaNumeric;

	for (i = 0; i < part.length; i++) {

		char = part.charAt(i);
		isAlphaNumeric = char.match(/[0-9a-zA-Z]/);

		if (expose) {

			obfuscatedPart += char;
			expose = false;

		} else if (isAlphaNumeric) {

			obfuscatedPart += 'x';

		} else {

			obfuscatedPart += char;
			expose = true;

		}

	}

	return obfuscatedPart;

}

function obfuscate(emailAddress) {

	var obfuscatedAddress = '',
		parsedAddress,
		local,
		domain,
		domainParts,
		tld,
		obfuscatedDomain;

	parsedAddress = addrs.parseOneAddress(emailAddress);

	if (parsedAddress) {

		local = parsedAddress.local;
		domain = parsedAddress.domain;
		domainParts = domain.split('.');

		if (domainParts.length > 1) {

			tld = domainParts.pop();
			obfuscatedDomain = obfuscatePart(domainParts.join('.')) + '.' + tld;

		} else {
			obfuscatedDomain = domain;
		}


		obfuscatedAddress += obfuscatePart(local) + '@' + obfuscatedDomain;

		return obfuscatedAddress;

	}

	return emailAddress;

}

module.exports = obfuscate;