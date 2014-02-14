module.exports = function () {
	var n = 0;
	function constructor () { }
	constructor.prototype.increment = function () {
		n++;
		return this;
	};
	constructor.prototype.no = function () {
		return n;
	};
	return new constructor();
};