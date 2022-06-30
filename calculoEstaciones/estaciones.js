let mes = 12;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno"; //si el mes es igual a enero O igual a febrero O diciembre, estacion es igual  INVIERNO
}
else if( mes == 3 || mes == 4 || mes == 5){ //SINO, el mes es igual a marzo mes 3, mes 4 y 5 es igual a PRIMAVERA
    estacion = "Primavera";
}
else if( mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Verano";
}
else if( mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Otoño";
}
else{
    estacion = "Valor incorrecto";
}

alert (console.log(estacion));


/* estaciones del año con CASE y BREAK 

let mes = 11;
let estacion = 'Estación desconocida';

switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';                
}
console.log(estacion); */