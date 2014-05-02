"use strict";
function createSummator(initialValue) {
	if (initialValue === undefined) {
		initialValue = 0;
	}
	var counter = initialValue;
	return {
		inc : function(num) {
			if (num !== undefined) {
				counter = counter + num;
			} else {
				counter = counter + 1;
			}
			return counter;
		},
		dec : function(num) {
			if (num !== undefined) {
				counter = counter - num;
			} else {
				counter = counter - 1;
			}
			return counter;
		},
		get : function() {
			return counter;
		}

	};
}
var s1 = createSummator();
s1.inc();
s1.inc();
s1.inc();
console.log(s1.get()); // 3
var s2 = createSummator(10);
s2.inc(2);
s2.inc(3);
s2.inc(4);
console.log(s2.get()); // 19
var s3 = createSummator(5);
s3.inc(5);
s3.dec(10);
console.log(s3.get()); // 0
