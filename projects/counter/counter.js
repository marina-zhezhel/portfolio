"use strict";
function CreateSummator(initialValue) {
	if (initialValue === undefined) {
		initialValue = 0;
	}
	this.counter = initialValue;
}

CreateSummator.prototype.inc = function(num) {
	if (num === undefined) {
		num = 1;
	}
	this.counter = this.counter + num;
}

CreateSummator.prototype.dec = function(num) {
	if (num === undefined) {
		num = 1;
	}
	this.counter = this.counter - num;
}

CreateSummator.prototype.get = function() {
	return this.counter;
}

var s1 = new CreateSummator();

/*s1.inc();
s1.inc();
s1.inc();
console.log(s1.get()); // 3
var s2 = new CreateSummator(10);
s2.inc(2);
s2.inc(3);
s2.inc(4);
console.log(s2.get()); // 19
var s3 = new CreateSummator(5);
s3.inc(5);
s3.dec(10);
console.log(s3.get()); // 0 */
