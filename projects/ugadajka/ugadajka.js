var numberImode = 7;
var userInput = prompt("Введите число до 10, и я скажу, угадали ли Вы его");
var userGuess = parseInt(userInput,10);

if (userInput!==null) {
	if (!isNaN(userGuess)){
		if (userInput<0 || userInput>10) {
			console.log ("Введенное число не соответствует указанному диапозону");
		}
		else {
			if (userGuess===numberImode) {
				console.log ("Число угадано");
			}
			else {
				console.log ("Число не угадано");
			}
		}
	}
	else { 
		console.log ("Введено не число");
	}
}
else {
	console.log ("Вы ничего не ввели");
}