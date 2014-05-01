(function() {
	'use strict';
	function makeZoomable() {
		var images = document.querySelectorAll("img");
		for ( var i = 0; i < images.length; i++) {
			addEvent(images[i], "click", fClick);
		}
	}
	function addEvent(element, e, handler) {
		if (document.addEventListener) {
			element.addEventListener(e, handler, false);
		} else {
			element.attachEvent("on" + e, handler);
		}
	}
	function fClickClose() {
		var blockDiv = document.querySelector(".block");
		blockDiv.parentNode.removeChild(blockDiv);
	}
	function fKeyupClose(e) {
		if (e.keyCode === 27) {
			fClickClose();
		}
	}
	function imageSizes() {
		var documentElementWidth=document.documentElement.clientWidth;;
		var documentElementHeight=document.documentElement.clientHeight;
		var imageLarge = document.querySelector(".imagLarge>img");
		imageLarge.style.maxWidth = documentElementWidth + 'px';
		imageLarge.style.maxHeight = documentElementHeight + 'px';
	}
	function fClick(event) {
		var images = document.querySelectorAll("img");
		var clickedElement = event.srcElement ? event.srcElement : this;
		var indexElem;
		for (var i=0; i<images.length; i++) {
			if (clickedElement===images[i]) {
				indexElem=i;
			}
		}
		var imagesLarge = document.querySelectorAll(".large>img");
		var cloneImagesLarge = imagesLarge[indexElem].cloneNode(true);
		var blockDiv = document.createElement("div");
		blockDiv.setAttribute("class", "block");
		document.body.appendChild(blockDiv);
		var blockDivImage = document.createElement("div");
		blockDivImage.setAttribute("class", "imagLarge");
		blockDiv.appendChild(blockDivImage);
		var blockDivBackground = document.createElement("div");
		blockDivBackground.setAttribute("class", "block-background");
		blockDiv.appendChild(blockDivBackground);
		document.querySelector(".imagLarge").appendChild(cloneImagesLarge);
		var closeImage = document.createElement("img");
		closeImage.setAttribute("src", "img/mult.png");
		closeImage.setAttribute("class", "closeImage");
		blockDivImage.appendChild(closeImage);
		addEvent(closeImage, "click", fClickClose);
		var body = document.querySelector("body");
		addEvent(body, "keyup", fKeyupClose);
		imageSizes();
		addEvent(window, "resize", function () {
			if (blockDiv) {
				imageSizes();
			}
		});
	}
window.makeZoomable = makeZoomable;
}());
