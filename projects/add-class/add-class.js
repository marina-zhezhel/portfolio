'use strict';
function addClass(node, classToAdd) {
	if (node.className !== null) {
		var massPartClass = node.className.split(" ");
		var classExists = false;
		for ( var i = 0; i < massPartClass.length; i++) {
			if (massPartClass[i] === classToAdd) {
				classExists = true;
			}
		}
		if (!classExists) {
			node.setAttribute("class", node.className + " " + classToAdd);
		}
	} else {
		node.setAttribute("class", classToAdd);
	}
}

/*
 * ������ ���������� ��� ��������
 * 
 * <div class='main-column'></div>
 * 
 * ����� ������
 * 
 * addClass(document.querySelector('.main-column'), 'main');
 * 
 * HTML ������ �����:
 * 
 * <div class='main-column main'></div>
 */
