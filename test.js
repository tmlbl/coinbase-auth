var coinbase = require('./lib/coinbase.js'),
	creds = require('./creds.js')(),
	https = require('https');

coinbase.key(creds.key);
coinbase.secret(creds.secret);

var options2 = {
	url: 'https://coinbase.com/api/v1/addresses'
};

coinbase.post(options2, function (res, err) {
	if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
});