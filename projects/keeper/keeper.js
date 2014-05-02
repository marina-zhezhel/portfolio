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

// var keeper = createKeeper();
// var key1 = {};
// var key2 = {};
// var key1Copy = key1;

// keeper.put(key1, 999)
// keeper.put(key2, [1,2,3])
// console.log(keeper.get(key1)); // 999
// console.log(keeper.get(key2)); // [1,2,3]
// console.log(keeper.get(key1Copy)); // 999
// console.log(keeper.get({})); // null
// keeper.put(key1, key2);
// console.log(keeper.get(key1Copy) === key2); // truekeeper.put(key1, value);
