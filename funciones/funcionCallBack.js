//funciones callback,k funciones llamar devuelta
//llamar una funcion dentro de otra funcion pero resivienco como arguemtno la segunda funcion 

function miFuncion2(){
    console.log('mi funcion 2');
}

function miFuncion3(){
    console.log('mi funcion 3'); 
}

miFuncion2();
miFuncion3(); //se llaman las funciones de manera secuancial

//----------FUNCIONES CALLBACK-----------

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar (op1, op2, funcionCallBack){
    let resultado= op1+ op2;
    funcionCallBack(resultado);
    funcionCallBack(`Resultado: ${resultado}`);
}

sumar(5,3, imprimir); //la funcionCallBack quedo con la funcion imprimir()
