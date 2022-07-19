let miFuncion= function (){
    console.log('saludos desde mi funcion normal'); //funcion normal
}
//const o let se puede usar, const es porque no se puede cambiar mas, con let si se puede asignar una nueva referencia

//------------funcion flecha sintaxis-----------------
const miFuncionFlecha = () => { //en la funcion flecha no se usa la palabra funcion si no que se usa entre los arcumentos t los cuerpos se pone =>
    console.log('saludos desde mi funcion flecga'); //funcion flecha
}
miFuncionFlecha(); //se llama la funcion flecha

//-----------funcion flecha simplificada------------
const miFuncionFlecha1= () => console.log('saludos desde mi funcion flecha simplificada ya que es una linea');

miFuncionFlecha1();

//------------funcion flecha NUEVA saludar------------------

const saludar= () => {
    return 'Saludos desde mi funcion flecha';
}

console.log(saludar()); //se llama a imprimir la funcion directa mente

//------------funcion flecha NUEVA saludarc simplificada------------------

const saludar1= () => 'Saludos desde mi funcion flecha'; 

//-------------funcion flecha si queremos regresar un objeto-------

const regresaObjeto= () => ({nombre: 'Juan', aprelliod: 'Pinzon'}); //se pone entre parentesis y llaves para cuadno queramos regresar un obj
console.log(regresaObjeto()); 

//----------funcion para regresar parametros-----------

const funcionConParametros = (mensaje) => console.log (mensaje); //funcion mensaje que se imprime
funcionConParametros('Saludos desde mi funcion con parametros'); // se le pasan los argumentos a la funcion y el parametro que lo resive se imprime 

//----------funcion con varios parametros y argumentos--------------

const funcionConVariosParametros= (op1, op2) => {
    let resultado= op1 + op2;
    return resultado;
    //resultado `Resultado: ${resultado}`; //tambien se puede hacer el toString 
} 
console.log( funcionConVariosParametros(3,5)); 