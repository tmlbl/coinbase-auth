var counter = require('./counter.js')();

module.exports = function () {
	var no = new Date();
	var now = +no;
  now *= 1000;
	now += no.getMilliseconds();
	now += counter.increment().no();
	return now;
};