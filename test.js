var coinbase = require('./lib/coinbase.js'),
	creds = require('./creds.js')(),
	https = require('https');

coinbase.key(creds.key);
coinbase.secret(creds.secret);

var options = 'https://coinbase.com/api/v1/account/balance';

coinbase.get(options, function (res, err) {
	if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
});

var options2 = {
	url: 'https://coinbase.com/api/v1/account/generate_receive_address',
	json: {
		'address': {
			'callback_url': 'http://www.example.com/callback',
			'label': 'Dalmation donations'
		}
	}
};

coinbase.post(options2, function (res, err) {
	if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
});