email-obfuscator
================

Obfuscates e-mail addresses with x's.

For example,

`awesometown@gmail.com` becomes `axxxxxxxxxx@gxxxx.com`

[![Build Status](https://travis-ci.org/bertrandom/email-obfuscator.svg?branch=master)](https://travis-ci.org/bertrandom/email-obfuscator)

## Usage

```
var obfuscate = require('email-obfuscator');
var obfuscatedEmail = obfuscate('awesometown@gmail.com');
console.log(obfuscatedEmail);
```

should produce:

`axxxxxxxxxx@gxxxx.com`

## Custom obfuscation character

You can optionally pass a custom character as the second argument. This can also be a longer string or emoji.

Examples:

- `obfuscate('awesometown@gmail.com', '*') //produces 'a**********@g****.com'`
- `obfuscate('awesometown@gmail.com', 'ha') //produces 'ahahahahahahahahahaha@ghahahaha.com'`
- `obfuscate('awesometown@gmail.com', '🤔') //produces 'a🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔@g🤔🤔🤔🤔.com'`

## License

MIT
