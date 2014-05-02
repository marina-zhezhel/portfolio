'use strict';
function removeClass(node, classToRemove) {
	var massPartClass = node.className.split(" ");
	var massRemoveClass=[];
	var strRemoveClass="";
	for ( var i = 0; i < massPartClass.length; i++) {
		if (massPartClass[i] !== classToRemove) {
			massRemoveClass.push(massPartClass[i]);
		}
	}
	for ( var i = 0; i < massRemoveClass.length; i++) {
		strRemoveClass+=massRemoveClass[i]+" ";
	}
	strRemoveClass = strRemoveClass.substring(0, strRemoveClass.length - 1);
	if (strRemoveClass!=="") {
		node.setAttribute("class", strRemoveClass);
	}
	else {
		node.removeAttribute("class");
	}
	return node;
}



