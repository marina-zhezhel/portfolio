var numberImode = 7;
var userInput = prompt("������� ����� �� 10, � � �����, ������� �� �� ���");
var userGuess = parseInt(userInput,10);

if (userInput!==null) {
	if (!isNaN(userGuess)){
		if (userInput<0 || userInput>10) {
			console.log ("��������� ����� �� ������������� ���������� ���������");
		}
		else {
			if (userGuess===numberImode) {
				console.log ("����� �������");
			}
			else {
				console.log ("����� �� �������");
			}
		}
	}
	else { 
		console.log ("������� �� �����");
	}
}
else {
	console.log ("�� ������ �� �����");
}