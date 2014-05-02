document.querySelector('#thumbs').onclick = function(event) {
	event = event || window.event;
	var target = event.target || event.srcElement;

	while (target !== this) {
		if (target.tagName === 'A') {
			document.querySelector('#largeImg')
					.setAttribute('src', target.href);
			event.preventDefault();
			break;
		}
		target = target.parentNode;
	}
};
