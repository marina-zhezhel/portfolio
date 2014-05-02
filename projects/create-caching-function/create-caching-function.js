"use strict";
function createCachable(func) {
	var obj = {};
	return function(x) {
		if (obj[x] === undefined) {
			obj[x] = func(x);
		}
		return obj[x];
	}
}