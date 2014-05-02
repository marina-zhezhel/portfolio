'use strict';
function hasClass(node, classToCheck) {
	var massPartClass = node.className.split(" ");
	for ( var i = 0; i < massPartClass.length; i++) {
		if (massPartClass[i] === classToCheck) {
			return true;
		} else {
			return false;
		}
	}
}