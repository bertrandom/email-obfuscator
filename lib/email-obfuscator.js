var addrs = require("email-addresses");

function obfuscatePart(part, obfuscationCharacter) {
	if(!obfuscationCharacter || !obfuscationCharacter.length){
		obfuscationCharacter = 'x';
	}
	
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

			obfuscatedPart += obfuscationCharacter;

		} else {

			obfuscatedPart += char;
			expose = true;

		}

	}

	return obfuscatedPart;

}

function obfuscate(emailAddress, obfuscationCharacter) {
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
			obfuscatedDomain = obfuscatePart(domainParts.join('.'), obfuscationCharacter) + '.' + tld;

		} else {
			obfuscatedDomain = domain;
		}


		obfuscatedAddress += obfuscatePart(local, obfuscationCharacter) + '@' + obfuscatedDomain;

		return obfuscatedAddress;

	}

	return emailAddress;

}

module.exports = obfuscate;
