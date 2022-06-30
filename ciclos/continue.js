/*preguntar si los valores son impares si no es par,, si e numero no es par, se va seguir a la siguiente interaccion*/

for(let contador =0; contador <=10; contador++){
    if (contador %2 !==0){ //si la variable contador no es un numero par
        continue //se ejecuta la sigueinte iteracion para que el for no sea infinito y break lo que hace es que rompe por completo el ciclo for
    }
    else{
        console.log(contador)
    }
}