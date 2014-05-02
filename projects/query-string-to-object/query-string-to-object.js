"use strict";
function parse(queryString) {
	var obj = {};
	var k;
	if (queryString !== "") {
		var str = queryString.split("&");
		for ( var i = 0; i < str.length; i++) {
    		k = str[i].indexOf("=");
			if (isNaN(str[i].slice(k + 1))) {
				obj[str[i].slice(0, k)] = (str[i].slice(k + 1));
			} else {
				obj[str[i].slice(0, k)] = parseInt((str[i].slice(k + 1)),10);
			}
			if (str[i].slice(k + 1) === "true") {
				obj[str[i].slice(0, k)] = true;
			}
			if (str[i].slice(k + 1) === "false") {
				obj[str[i].slice(0, k)] = false;
			}
		}
	} else {
		obj = {};
	}
	return obj;
}
