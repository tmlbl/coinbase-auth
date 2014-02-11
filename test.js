var coinbase = require('./lib/coinbase.js'),
	https = require('https');

coinbase.key('H9a7GeR24GnXTvvf');
coinbase.secret('XAZdpOCfxMoR7BCtFoerQf3xGCfFMCOo');

var options2 = {
	url: 'https://coinbase.com/api/v1/addresses',
	json: {
		some: 'params'
	}
};

coinbase.get(options2, function (res, err) {
	if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
});