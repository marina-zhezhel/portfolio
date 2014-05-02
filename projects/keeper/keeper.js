"use strict";
function createKeeper() {
	var masskey = [];
	var massvalue = [];
	return {
		put : function(key, value) {
			var itemNumber = masskey.indexOf(key);
			if (itemNumber === -1) {
				masskey.push(key);
				massvalue.push(value);
			} else {
				massvalue[itemNumber] = value;
			}
		},
		get : function(key) {
			var itemNumber = masskey.indexOf(key);
			if (itemNumber !== -1) {
				return massvalue[itemNumber];
			} else {
				return null;
			}
		}
	};
}

