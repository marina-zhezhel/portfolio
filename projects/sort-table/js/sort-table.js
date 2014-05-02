document.querySelector('#grid').onclick = function(e) {
	var target = e && e.target || event.srcElement;

	if (target.nodeName !== 'TH')
		return;
	var tableElement = document.querySelector('#grid');
	var tbodyElement = tableElement.querySelector('tbody');
	var trElement = tbodyElement.querySelectorAll('tr');
	var tdAgeElement = [];
	var tdNameElement = [];
	for ( var i = 0; i < trElement.length; i++) {
		tdAgeElement.push(trElement[i].querySelectorAll('td')[0]);
		tdNameElement.push(trElement[i].querySelectorAll('td')[1]);
	}
	var textNodeAgeElement = [];
	var textNodeNameElement = [];
	for ( var i = 0; i < tdAgeElement.length; i++) {
		textNodeAgeElement.push(parseInt((tdAgeElement[i].textContent), 10));
	}
	for ( var i = 0; i < tdNameElement.length; i++) {
		textNodeNameElement.push(tdNameElement[i].textContent);
	}
	function sortingAscending(i, ii) { 
		if (i > ii)
			return 1;
		else if (i < ii)
			return -1;
		else
			return 0;
	}
	if (target===document.querySelector('th[data-type="number"]')) {
		var textNodeAgeElementSort=textNodeAgeElement.slice();
		textNodeAgeElementSort.sort(sortingAscending);
		var textNodeNameElementSort=[];
		for ( var i = 0; i < textNodeAgeElementSort.length; i++) {
			for ( var j = 0; j < textNodeAgeElement.length; j++) {
				if (textNodeAgeElementSort[i]===textNodeAgeElement[j]) {
					var index=textNodeAgeElement.indexOf(textNodeAgeElement[j]);
					textNodeNameElementSort.push(textNodeNameElement[index]);
				}
			}
		}
		for ( var i = 0; i < tdAgeElement.length; i++) {
			tdAgeElement[i].textContent=textNodeAgeElementSort[i];
		}
		for ( var i = 0; i < tdNameElement.length; i++) {
			tdNameElement[i].textContent=textNodeNameElementSort[i];
		}
	}
	if (target===document.querySelector('th[data-type="string"]')) {
		var textNodeNameElementSort=textNodeNameElement.slice();
		textNodeNameElementSort.sort(sortingAscending);
		var textNodeAgeElementSort=[];
		for ( var i = 0; i < textNodeNameElementSort.length; i++) {
			for ( var j = 0; j < textNodeNameElement.length; j++) {
				if (textNodeNameElementSort[i]===textNodeNameElement[j]) {
					var index=textNodeNameElement.indexOf(textNodeNameElement[j]);
					textNodeAgeElementSort.push(textNodeAgeElement[index]);
				}
			}
		}
		for ( var i = 0; i < tdAgeElement.length; i++) {
			tdAgeElement[i].textContent=textNodeAgeElementSort[i];
		}
		for ( var i = 0; i < tdNameElement.length; i++) {
			tdNameElement[i].textContent=textNodeNameElementSort[i];
		}
	}
};