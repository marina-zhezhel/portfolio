(function() {
	'use strict';
	function TagList(node, tags) {
		this.inputElementValue = [];
		this.newTagSpanClose;
		this.node = node || undefined;
		this.tags = tags || undefined;
		this.curWrapper = document.querySelector('.wrapper');
		if (this.node !== undefined) {
			this.startAddDiv_f();
		}
		if (this.tags !== undefined) {
			this.startAddTags_f();
		}
		this.editTags = this.curWrapper.querySelector('.edit-tags');
		this.finishEditing = this.curWrapper.querySelector('.finish-editing');
		this.addTag = this.curWrapper.querySelector('.button');
		this.formElement = this.curWrapper.querySelector('form');
		this.inputElement = this.curWrapper.querySelector('.input');
		this.newTagSpan;
		this.eventHandler();
	}
	TagList.prototype.assignEvent = function(event) {
		event = event || window.event;
		var target = event.target || event.srcElement;
		if (target.getAttribute('class') === 'edit-tags') {
			this.editTags_f();
		}
		if (target.getAttribute('class') === 'finish-editing') {
			this.finishEditing_f();
		}
		if (target.getAttribute('class') === 'button') {
			this.addTag_f();
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		}
		if (target.getAttribute('class') === 'close') {
			this.deleteTag_f(target);
		}
	};
	TagList.prototype.editTags_f = function() {
		this.finishEditing.style.display = 'inline';
		this.editTags.style.display = 'none';
		this.formElement.style.display = 'block';
		this.inputElement.value = '';
		this.showСlosing_f();
	};
	TagList.prototype.finishEditing_f = function() {
		this.finishEditing.style.display = 'none';
		this.editTags.style.display = 'inline';
		this.formElement.style.display = 'none';
		this.hideСlosing_f();
	};
	TagList.prototype.showСlosing_f = function() {
		var newTagSpanCloseAll = this.curWrapper.querySelectorAll('.close');
		for ( var i = 0; i < newTagSpanCloseAll.length; i++) {
			newTagSpanCloseAll[i].style.display = 'inline';
		}
	};
	TagList.prototype.hideСlosing_f = function() {
		var newTagSpanCloseAll = this.curWrapper.querySelectorAll('.close');
		if (this.newTagSpanClose) {
			for ( var i = 0; i < newTagSpanCloseAll.length; i++) {
				newTagSpanCloseAll[i].style.display = 'none';
			}
		}
	};
	TagList.prototype.createNodeDiv_f = function() {
		var newTagDiv = document.createElement('div');
		newTagDiv.setAttribute('class', 'tag');
		this.newTagSpan = document.createElement('span');
		this.newTagSpan.setAttribute('class', 'text');
		this.newTagSpanClose = document.createElement('span');
		this.newTagSpanClose.setAttribute('class', 'close');
		var textCloseTag = document.createTextNode('x');
		this.newTagSpanClose.appendChild(textCloseTag);
		newTagDiv.appendChild(this.newTagSpan);
		newTagDiv.appendChild(this.newTagSpanClose);
		var newTag = this.curWrapper.querySelector('.new-tag');
		newTag.appendChild(newTagDiv);
	};
	TagList.prototype.startAddDiv_f = function() {
		var startWrapper = '<div class="edit"><div class="edit-tags">Редактировать теги</div><div class="finish-editing">Завершить редактирование</div></div><div class="new-tag"></div><form name="add-tag"><input class="input" placeholder="Введите название тега"type="text"><button class="button">Добавить</button>';
		var newTags = document.createElement('div');
		newTags.setAttribute('class', 'wrapper');
		newTags.innerHTML = startWrapper;
		this.node.appendChild(newTags);
		this.curWrapper = newTags;
	};
	TagList.prototype.startAddTags_f = function() {
		for ( var i = 0; i < this.tags.length; i++) {
			this.createNodeDiv_f();
			var textNameTag = document.createTextNode(this.tags[i]);
			this.newTagSpan.appendChild(textNameTag);
			this.inputElementValue.push(this.tags[i]);
		}
		this.hideСlosing_f();
	};
	TagList.prototype.addTag_f = function() {
		var textInput = this.inputElement.value;
		if ((this.inputElementValue.indexOf(textInput) === -1)
				&& (textInput !== '')) {
			this.inputElementValue.push(textInput);
			this.createNodeDiv_f();
			var textNameTag = document.createTextNode(textInput);
			this.newTagSpan.appendChild(textNameTag);
		}
	};
	TagList.prototype.deleteTag_f = function(target) {
		for ( var i = 0; i < this.inputElementValue.length; i += 1) {
			if (target.parentNode.childNodes[0].textContent === this.inputElementValue[i]) {
				this.inputElementValue.splice(i, 1);
			}
		}
		target.parentNode.parentNode.removeChild(target.parentNode);
	};
	TagList.prototype.assignEventKeyboard = function(event) {
		var target = event.target || event.srcElement;
		if (target.getAttribute('class') === 'button') {
			if (event.keyCode === 32) {
				this.addTag_f();
				if (event.preventDefault) {
					event.preventDefault();
				} else {
					event.returnValue = false;
				}
			}
		}
	};
	TagList.prototype.eventHandler = function() {
		addEvent(this.curWrapper, 'click', this.assignEvent.bind(this));
		addEvent(this.curWrapper, 'keyup', this.assignEventKeyboard.bind(this));
	};
	window.TagList = TagList;
})();

var tagList = new TagList();
