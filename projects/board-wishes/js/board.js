function f_click1() {
	var imya = document.getElementById("imya");
	if (imya.value=="") {
		window.alert("Заповніть поле Ім'я");
		imya.focus();
		return false;
	}
	var t = /^[a-zA-Zа-яёА-ЯЁіІїЇ]+$/
	if (!t.test(imya.value)) {
		window.alert("Ім'я може містити тільки літери");
		imya.focus();
		return false;
	}
	else {
		var k = /^[a-zA-Zа-яёА-ЯЁіІїЇ]{3,}$/
		if (!k.test(imya.value)) {
			window.alert("Ім'я може містити мінімум 3 символи");
			imya.focus();
			return false;
		}
	}
	var mail1 = document.getElementById("mail1");
	if (mail1.value=="") {
		window.alert("Заповніть поле e-mail");
		mail1.focus();
		return false;
	}
	else {
		var p = /^[a-z0-9_\.\-]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/i;
		if (!p.test(mail1.value)) {
			window.alert("Поле e-mail повинне відповідати правилам запису е-mail адреси");
			mail1.focus();
			return false;
		}
	}
	var pobazh = document.getElementById("pobazh");
	if (pobazh.value=="") {
		window.alert("Заповніть поле Побажання");
		pobazh.focus();
		return false;
	}
		var pobazh1=document.getElementById("pobazh");
		var text2=pobazh1.value;
		var pob1=document.createElement("div");
		pob1.setAttribute("class", "pob1");
		var pobd=document.createElement("div");
		pobd. setAttribute("class", "pobd");
		var pob2=document.createElement("p");
		var text=document.createTextNode(text2);
		pob2.appendChild(text);
		pob1.appendChild(pobd);
		pobd.appendChild(pob2);
		document.body.appendChild(pob1);
		pobazh.value="";
		pobazh.focus();
	return true;
}