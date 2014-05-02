"use strict";
function isInArray() {
	var a = arguments[arguments.length - 1];
	for ( var i = 0; i < arguments.length - 1; i++) {
		if (a.indexOf(arguments[i]) === -1) {
			return false;
		}
	}
	return true;
}

// isInArray(1, 2, 10, [1, 2, 5, 10]);
