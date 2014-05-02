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

