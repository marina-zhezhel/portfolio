"use strict";
function every(arr, func) {
	for ( var i = 0; i < arr.length; i++) {
		if (!func(arr[i], i, arr)) {

			return false;

		}
	}
	return true;
}

