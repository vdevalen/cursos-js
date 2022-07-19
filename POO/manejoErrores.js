//si ponemos el modo stricyo y no declaramos la variable produce error, 
//recuperarnos de este error se usa TRY CATCH 
//posible error el use de una variable y una funcion que no ha sido declarado
'use strict'
try{ //SE TOMA EL ERROR 
    let x = 10;
    //miFuncion();
}
catch(error){ //SE PROCEDE Y LO IMPRIME 
    console.log(error);
}


finally{ //siempre se ejecuta este bloque 

    console.log('termina la revisión de errores');
}  

console.log('continuamos...');



//clausula throw  arroja el propio error clase 111













