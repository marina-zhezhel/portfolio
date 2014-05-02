"use strict";
function toMatrix(data, rowSize) {
	var arr = [];
	var k = rowSize;
	arr.length = Math.ceil(data.length / rowSize);
	if (data.length !== 0) {
		for ( var j = 0; j < arr.length; j++) {
			arr[j] = data.slice(k-rowSize, k);
			k = k + rowSize;
		}
	} 
	else {
		arr = data;
	}
	return arr;
}
//toMatrix([1,2,3,4,5,6], 2);
