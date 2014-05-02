"use strict";
function createObject(keys, values) {
	rez = {};
	for ( var i = 0; i < keys.length; i++) {
		rez[keys[i]] = values[i];
	}
	return rez;
}

