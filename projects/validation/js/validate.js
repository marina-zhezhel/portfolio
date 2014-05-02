// Для удобства пользователя форма проверяется и при потере фокуса элементом формы и при отправке формы 
if (!Array.prototype.some) {
	Array.prototype.some = function(fun /* , thisArg */) {
		'use strict';

		if (this === void 0 || this === null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== 'function')
			throw new TypeError();

		var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
		for ( var i = 0; i < len; i++) {
			if (i in t && fun.call(thisArg, t[i], i, t))
				return true;
		}

		return false;
	};
}
if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== "function") {
			throw new TypeError(
					"Function.prototype.bind - what is trying to be bound is not callable");
		}
		var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {
		}, fBound = function() {
			return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
					aArgs.concat(Array.prototype.slice.call(arguments)));
		};
		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();
		return fBound;
	};
}
(function() {
	'use strict';
	function addEvent(obj, event_name, handler) {
		var handler_wrapper = function(event) {
			event = event || window.event;
			if (!event.target && event.srcElement) {
				event.target = event.srcElement;
			}
			return handler.call(obj, event);
		};
		if (obj.addEventListener) {
			obj.addEventListener(event_name, handler_wrapper, false);
		} else if (obj.attachEvent) {
			obj.attachEvent('on' + event_name, handler_wrapper);
		}
		return handler_wrapper;
	}
	function Validate() {
		this.messageNode = null;
		this.email = document.querySelector("#email");
		this.password = document.querySelector("#password");
		this.city = document.querySelector("#city");
		this.checkbox = document.querySelector("#checkbox");
		this.send = document.querySelector("#submit");
		this.form = document.querySelector("form");
		this.message = [
				"Данное поле является обязательным для заполнения",
				"Ошибка в email-е",
				"email уже занят",
				"Пароль должен состоять не меньше чем из пяти симоволов",
				"Пароль слишком прост. Пароль должен состоять из латинских букв, цифр, знака подчеркивания или минуса",
				"Пароль содержит запрещенные символы (разрешенные - латинские буквы, цифры, знаки подчеркивания, минуса)",
				"Галочка 'Согласен со всем' не поставлена" ];

		this.busyEmailName = [ "author@mail.com", "foo@mail.com",
				"tester@mail.com" ];
	}
	Validate.prototype.validityEmail = function() {
		this.hideDisplayMessage(this.email);
		var self = this;
		var isValid = true;
		var errorMessage = "";
		if (this.email.value === "") {
			errorMessage = this.message[0];
		} else if (!(/.+@.+\..+/.test(this.email.value))) {
			errorMessage = this.message[1];
		} else if (this.busyEmailName.some(function(emailName) {
			return (emailName === self.email.value);
		})) {
			errorMessage = this.message[2];
		}
		if (errorMessage) {
			this.showDisplayMessage(self.email, errorMessage);
			isValid = false;
		}
		return isValid;
	};
	Validate.prototype.validityPassword = function() {
		this.hideDisplayMessage(this.password);
		var isValid = true;
		var self = this;
		var errorMessage = "";
		if (this.password.value === "") {
			errorMessage = this.message[0];
		} else if (!(this.password.value.length > 5)) {
			errorMessage = this.message[3];
		} else if (/^[A-Za-z0-9]+$/.test(this.password.value)) {
			errorMessage = this.message[4];
		} else if (!(/^[A-Za-z0-9_\-]+$/.test(this.password.value))) {
			errorMessage = this.message[5];
		}
		if (errorMessage) {
			this.showDisplayMessage(self.password, errorMessage);
			isValid = false;
		}
		return isValid;
	};
	Validate.prototype.validityCheckbox = function() {
		this.hideDisplayMessage(this.checkbox);
		var isValid = true;
		var errorMessage = "";
		var self = this;
		if (!(this.checkbox.checked)) {
			errorMessage = this.message[6];
		}
		if (errorMessage) {
			this.showDisplayMessage(self.checkbox, errorMessage);
			isValid = false;
		}
		return isValid;
	};
	Validate.prototype.enableSendButton = function() {
		this.send.setAttribute("class", "btn btn-primary");
	};

	Validate.prototype.disableSendButton = function() {
		this.send.setAttribute("class", "btn btn-primary disabled");
	};
	Validate.prototype.showDisplayMessage = function(element, errorMessage) {
		this.messageNode = document.createElement("div");
		this.messageNode.setAttribute("class", "alert alert-danger");
		element.parentNode.appendChild(this.messageNode);
		this.messageNode.innerHTML = errorMessage;
		element.parentNode.setAttribute("class", "form-group has-error");
		this.disableSendButton();
	};
	Validate.prototype.hideDisplayMessage = function(element) {
		var parentElement = element.parentNode;
		var messageElement = parentElement.childNodes;
		if ((parentElement.className === "form-group has-error")
				&& (messageElement[7])) {
			messageElement[7].parentElement.removeChild(messageElement[7]);
			parentElement.setAttribute("class", "form-group required");
			this.enableSendButton();
		}
	};
	Validate.prototype.sendForm = function(event) {
		var isValid = true;
		if (!this.validityEmail()) {
			isValid = false;
		}
		if (!this.validityPassword()) {
			isValid = false;
		}
		if (!this.validityCheckbox()) {
			isValid = false;
		}
		if (!isValid) {
			event.preventDefault();
		}
		return isValid;
	};
	Validate.prototype.eventHandler = function() {
		addEvent(this.email, "blur", this.validityEmail.bind(this));
		addEvent(this.password, "blur", this.validityPassword.bind(this));
		addEvent(this.checkbox, "click", this.validityCheckbox.bind(this));
		addEvent(this.form, "submit", this.sendForm.bind(this));
	};
	window.Validate = Validate;
})();

var validate = new Validate();
validate.eventHandler();
