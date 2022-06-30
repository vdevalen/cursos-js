//las funciones son tareas y se podran reutilizar las veces que queramos 

//declarar una funcion 
function miFuncion(a, b){
    return a+b;
}
//se llama la funcion 
let resultado = miFuncion(2, 3);
console.log(resultado); // 5  


//funcion anonima, solo se usa una vez 
// (function (a, b ){
//     console.log('ejecutando la funcion: ' + (a+b));
// })(3, 4);

console.log(typeof miFuncion); //Se valida que es tipo function 

//------FUNCION TIPO EXPRESION------------
let x= function(a, b){ return a+b}; 
resultado=x(1, 2);
console.log(resultado) // 3

console.log(typeof miFuncion); //Se valida que es tipo function 

//-------FUNCIONES TIPO FLECHA-----------
const sumarFuncionTipoFlecha = (a, b) => a+b; 
resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);  //no se necesita la palabrra funcion ni llaver solo el simbolo de flecha => que significa que se va indicar el cuerpo de la funcion 

//DIFERECIAS: dentro de los parentesis van los parametros

//-----------------Reproducir 59. Ejemplo: Sumar todos los Argumentos------primero se llama la funcion y luego se define 

let resultado1 = sumarTodo(5, 4, 13, 10, 9); 
console.log(resultado);//se llama la funcion

function sumarTodo(){
    let suma= 0;
    for (let i=0; i < argumentos.length; i++){
        sima +=arguments[i]; //se toman vada uno de los valores del arreglo // suma= suma+arguments[i] por vada elemento se va almacenando en la varibale suma
    } //se van a tomar todos los argumentos con el lenth lo recorre todo 
    return suma;
} 
// la palabra argumentos para tomar todos los valores definidos 