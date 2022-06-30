calculaHora = prompt ("¿Que hora es?");


if (calculaHora >= 6 && calculaHora <= 11){
	alert("Buenos dias");
}

else if (calculaHora >= 12 && calculaHora <=18) {
	alert("Buenas tardes");
}

else if (calculaHora >= 19 && calculaHora <= 24) {
	alert("Buenas noches");
}

else if (calculaHora >= 0 && calculaHora < 6) {
	alert("Durmiendo");
}

