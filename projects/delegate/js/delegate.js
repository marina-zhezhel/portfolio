function delegate(elem, eventName, selectorFunc, handler) {
	eventName='on'+eventName;
	elem[eventName]=function(e) {
		var target = e && e.target || event.srcElement;
		while (target !== elem) {
			if (selectorFunc(target)) {
				return handler.call(target, e);
			}
			target = target.parentNode;
		} 
	};
}
