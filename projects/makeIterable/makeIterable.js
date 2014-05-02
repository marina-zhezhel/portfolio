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
// ������� ���������� ������� � ����� ������ �����
function trim(str) {
	var p = new RegExp(/\s/g);
	str = str.replace(p, "");
	return str;
}

/*trim('    Hello \r\n'); // -> 'hello'

var iTrim = makeIterable(trim)
iTrim([ '   Hello', ' how   ', ' are', 'you' ]); // -> ['Hello', 'how','are', 'you']*/
