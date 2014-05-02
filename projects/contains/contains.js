"use strict";
function contains(where, what) {
	for ( var i = 0; i <= what.length; i++) {
		var rez = false;
		for ( var j = 0; j <= where.length; j++) {
			if (what[i] === where[j]) {
				rez = true; 
			}
		}
		if (!rez) {
			return false;
		}
	}
	return true;
}

//contains([1, 2, 3], [2, 3, 1]); --- true