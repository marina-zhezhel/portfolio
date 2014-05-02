'use strict';
function makeIterable(trim) {
	return function(arr) {
		var res = [];
		for ( var i = 0; i < arr.length; i++) {
			res.push(trim(arr[i]));
		}
		return res;
	};
}
// Убирает пробельные символы с обоих концов строк
function trim(str) {
	var p = new RegExp(/\s/g);
	str = str.replace(p, "");
	return str;
}


