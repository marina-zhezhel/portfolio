document.getElementById('messages-container').onclick = function(e) {
	var target = e && e.target || event.srcElement;

	if (target.nodeName != 'SPAN') {
		return;
	}
	var parentElement = target.parentNode;
	document.getElementById('messages-container').removeChild(parentElement);
};