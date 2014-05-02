document.querySelector('#contents').onclick = function(e) {
	var target = e && e.target || event.srcElement;
	while (target !== this) {
		if (target.tagName === 'A') {
			if (window.confirm('Уйти на '+target.getAttribute('href')+'?')) {
				return true;
			}
			else return false;
		}
		target = target.parentNode;
	}
};
