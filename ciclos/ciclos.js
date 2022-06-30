/*
let contador = 0;
while( contador < 3 ){
    console.log(contador);
    contador++;
}

do{
    console.log(contador);
    contador++;
}while(contador < 3);
*/

/*for(let contador = 0; contador < 3 ; contador++ ){
    console.log(contador);
}
console.log("Fin ciclo for");

imprimir los numeros pares de 0 a 10
*/
/*for (let contador =0; contador <=10; contador++){
    if (contador % 2==0){
    console.log(contador)
    }
} */

/*si queremos imprimir el primer numeor par que este, se usa break que rompe el ciclo y sigue con el console */

for (let contador =0; contador <=10; contador++){
    if (contador % 2==0){
    console.log(contador);
    break;
    }
} 
console.log("fin del ciclo"); /*solo imprime el primer numero par que encuentre y sigue con el ciclo*/