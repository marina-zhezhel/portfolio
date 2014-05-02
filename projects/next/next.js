'use strict';
function next(node) {
	var mass = [].slice.call(node.parentNode.childNodes);
	var mass1 = mass.filter(function(node) {
		return ((node.nodeType !== 3) && (node.nodeType !== 8))
	});
	for ( var i = 0; i < mass1.length; i++) {
		if (mass1[i + 1] !== null) {
			return mass1[i + 1];
		} else {
			return null;
		}
	}
}
