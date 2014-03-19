/* TODO: Separate into get and post functions like it was before */

var https = require('https'),
	url = require('url'),
	crypto = require('crypto'),
	nonce = require('./nonce.js');

var key, secret;

function APIkey (userKey) {
	key = userKey;
}

function APIsecret (shh) {
	secret = shh;
}

function Post (ops, callback) {

	var uri = url.parse(ops.url);
	var bodyString = '';
	if (ops.json) {
		bodyString = JSON.stringify(ops.json);
	}
	var no = nonce();
	// console.log('Nonce 2: ' + no);
	var signature = no + ops.url + bodyString;
	signature = crypto.createHmac('sha256', secret).update(signature).digest('hex');

	var options = {
		hostname: uri.hostname,
		port: 443,
		path: uri.pathname,
		method: 'POST',
		headers: {
			'ACCESS_KEY': key,
			'ACCESS_SIGNATURE': signature,
			'ACCESS_NONCE': no,
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
				callback(null, result);
			});
		} else {
			var err = 'Coinbase error: received header ' + res.headers.status;
			callback(err, null);
		}
	});

	req.write(bodyString);
	req.end();

	req.on('error', function (e) {
		console.error(e);
	});

}

function Get (ops, callback) {

	var uri = url.parse(ops);
	var no = nonce();
	// console.log('Nonce 1: ' + no);
	var signature = no + ops;
	signature = crypto.createHmac('sha256', secret).update(signature).digest('hex');

	var options = {
		hostname: uri.hostname,
		port: 443,
		path: uri.pathname,
		method: 'GET',
		headers: {
			'ACCESS_KEY': key,
			'ACCESS_SIGNATURE': signature,
			'ACCESS_NONCE': no,
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
				callback(null, result);
			});
		} else {
			var err = 'Coinbase error: received header ' + res.headers.status;
			callback(err, null);
		}
	});

	req.end();

	req.on('error', function (e) {
		console.error(e);
	});

}

function Delete (ops, callback) {

	var uri = url.parse(ops);
	var no = nonce();
	// console.log('Nonce 1: ' + no);
	var signature = no + ops;
	signature = crypto.createHmac('sha256', secret).update(signature).digest('hex');

	var options = {
		hostname: uri.hostname,
		port: 443,
		path: uri.pathname,
		method: 'DELETE',
		headers: {
			'ACCESS_KEY': key,
			'ACCESS_SIGNATURE': signature,
			'ACCESS_NONCE': no,
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
				callback(null, result);
			});
		} else {
			var err = 'Coinbase error: received header ' + res.headers.status;
			callback(err, null);
		}
	});

	req.end();

	req.on('error', function (e) {
		console.error(e);
	});

}

function Put (ops, callback) {

	var uri = url.parse(ops);
	var no = nonce();
	// console.log('Nonce 1: ' + no);
	var signature = no + ops;
	signature = crypto.createHmac('sha256', secret).update(signature).digest('hex');

	var options = {
		hostname: uri.hostname,
		port: 443,
		path: uri.pathname,
		method: 'PUT',
		headers: {
			'ACCESS_KEY': key,
			'ACCESS_SIGNATURE': signature,
			'ACCESS_NONCE': no,
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
				callback(null, result);
			});
		} else {
			var err = 'Coinbase error: received header ' + res.headers.status;
			callback(err, null);
		}
	});

	req.end();

	req.on('error', function (e) {
		console.error(e);
	});

}

module.exports.key = APIkey;
module.exports.secret = APIsecret;
module.exports.post = Post;
module.exports.get = Get;
module.exports.delete = Delete;
module.exports.put = Put;
