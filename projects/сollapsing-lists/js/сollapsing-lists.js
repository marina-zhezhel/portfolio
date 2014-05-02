document.querySelector('.tree').onclick = function(e) {
	var target = e && e.target || event.srcElement;
	if (target.nodeName != 'SPAN') {
		return;
	}
	var liElement=target.parentNode;
	var ulChildLiElement=liElement.querySelectorAll('ul')[0];
	if (ulChildLiElement) {
		if (ulChildLiElement.style.display) {
			ulChildLiElement.style.display='';
		}
		else {
			ulChildLiElement.style.display='none';
		}
	}
};
document.querySelector('.tree').onmouseover = function(e) {
	var target = e && e.target || event.srcElement;

	if (target.nodeName != 'SPAN') {
		return;
	}
	target.style.fontWeight = 'bold';
};
document.querySelector('.tree').onmouseout = function(e) {
	var target = e && e.target || event.srcElement;

	if (target.nodeName != 'SPAN') {
		return;
	}
	target.style.fontWeight = 'normal';
};