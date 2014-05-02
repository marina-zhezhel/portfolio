"use strict";
function toQueryString(obj) {
	var str = "";
	var str1 = "";
	for ( var key in obj) {
		str += key + "=" + obj[key] + "&";
		str1 = str.substring(0, str.length - 1);
	}
	return str1;
}
// toQueryString({test: true, bar:"foo"});
