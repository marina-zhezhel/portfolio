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


