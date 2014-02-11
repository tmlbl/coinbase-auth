var https = require('https'),
	url = require('url'),
	crypto = require('crypto');

var key, secret;

function APIkey (userKey) {
	key = userKey;
}

function APIsecret (shh) {
	secret = shh;
}

function nonce () {
	return Date.now();
}

function Get (ops, callback) {

	var uri = url.parse(ops.url);

	var options = {
		hostname: uri.hostname,
		port: 443,
		path: uri.pathname,
		method: 'GET',
		headers: {
			'ACCESS_KEY': key,
			'ACCESS_SIGNATURE': secret,
			'ACCESS_NONCE': nonce(),
			'Content-Type': 'application/json',
			'Connection': 'close'
		}
	};

	var req = https.request(options, function (res) {
		if (res.headers.status == '200 OK') {
			var result = '';
			res.on('data', function (d) {
				result += d;
			});
			res.on('end', function () {
				result = JSON.parse(result);
				callback(result);
			});
		} else {
			var err = 'Coinbase error: received header ' + res.headers.status;
			callback('', err);
		}
	});

	req.write(JSON.stringify(ops.json));
	req.end();

	// console.log(req);

	req.on('error', function (e) {
		console.error(e);
	});

}

module.exports.key = APIkey;
module.exports.secret = APIsecret;
module.exports.get = Get;