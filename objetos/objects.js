//--------UN OBJ PUEDE TENER PROPIEDADES Y METODOS

// let persona = { //obj persona
//     nombre: 'Juan', //atributos o atributos del obj
//     apellido: 'Perez', //se usan puntos :
//     email: 'jperez@gmail.com',
//     edad: 28,
    // nombreCompleto: function(){
    //     return this.nombre + ' '+ this.apellido;
    // }


//-----OTRA MANERA DE DEFINIR UN OBJ 

// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(edad);
// console.log(persona.nombreCompleto());
// console.log(persona);

//-------OTRA MANERA DE CREAR OBJ

// let persona2= new Object(); //se usan iguales =
// persona2.nombre= 'carlos',
// persona2.apellido= 'rios',
// persona2.direccion= 'saturno 15',
// persona2.tel= '234234';

// console.log(persona.nombre);
// console.log(persona['apellido']); //otra forma para entrar a demostrar las propiedades del obj 

//---------FOR IN / RECORRER PROPIEDADES 

// for(propiedad in persona){ //Asi se recorre cada una de las propiedades del obj persona 
//     console.log(propiedad);
// }


//-----AGREGAR PROPIEDADES A LOS OBJETOS 

/*ACTUALIZAR | AGREGAR */

// persona.tel= '456'; //nombreObj.nombreNuevaPropiedad= valor 

//-----ACTUALIZAR editar propiedad MODIFICAR la propiedad de une leemnto ya creado 

// persona.tel= '5678';
// console.log(persona.tel); //se valida que esta 5678 la que se actualizo


// /*ELIMINAR*/

//------ELIMINAR PROPIEDAD DE UN OBJ YA EXISTENTE, se eleimina la propiedad y el valor asociado

// delete persona.tel; //delete nombre del obj + propiedad que se quiera eliminar

// console.log(persona); 


// /*IMPRIMIR*/

//-----IMPRIMIR 1, Mandar a imprimir un OBJETO con js 
//concatenar cada valor de cada propiedad

// console.log(persona.nombre + ' ' + persona.apellido); //concatenar

//---IMPRIMIR 2, for in para iterar cada una de las propiedades 

// for(nombrePropiedad in persona){
//     console.log(persona[nombrePropiedad]);
// }

//----IMPRIMIR 3, como un arreglo el obj 

// let personaArray = Object.values(persona); //metodo que regresa el obj como un arreglo
//     console.log(personaArray);

//-----IMPRIMIR 4, usar cadena y usar el metodo JSON 

// let personaString = JSON.stringify(persona); //convierte el obj en una cedena
//     console.log(personaString);

//-----METODO GET | OBJETENER | PERMITE ACCEDER A LOS VALORES DE LAS PROPIEDADES 

// console.log(persona.nombreCompleto); //se imprime la varibale nombreCompletp

//se pone get para que sea un metodo y no una funcion 

// idioma: 'es',
// get lang(){ //Esta funcion va recuperar el idioma 
//     return this.idioma.toUpperCase(); //pone todo en mayuscula
// },
// set lang(lang){
//     thid.idioma=lang-toUpperCase();
// },
// get nombreCompleto(){
//     return this.nombre + ' ' + this.apellido;
//     }
// }
// console.log(persona.nombreCompleto); 
// console.log(persona.lang); //Se llama la funcion o sea el get 

//-----METODO SET | MODIFICAR | PERMITE MODIFICAR LOS VALORES DE LOS ATRIBUTOS DE LOS OBJ 

// let persona = {
//     nombre: 'Juan',
//     apellido: 'Perez',
//     email: 'jperez@mail.com',
//     edad: 28,
//     idioma: 'es',
//     get lang(){
//         return this.idioma.toUpperCase();
//     },
//     set lang( lang ){
//         this.idioma = lang.toUpperCase();
//     },
//     get nombreCompleto(){
//         return this.nombre + ' ' + this.apellido;
//     }
// }

// console.log( persona.lang );

// persona.lang = 'en';//se llama metodo set lang

// console.log( persona.lang );//se llama metodo get lang
// console.log( persona.idioma );

//I M P O R T A N T E 
//---CONSTRUCTORES: es una funcion especial que se trabaj con obj en js y para llamar una funcion const se usa: new 

//funcion constructor de objetos de tipo persona 
// function Persona(nombre, apellido, email){
//     this.nombre = nombre;
//     this.apellido = apellido; 
//     this.email= email;  //this.nombre de la propiedad, no tiene this es la propiedad lo que esta dentro de los aprentesis nombre1
//     this.nombreCompleto= function(){
//         return this.nombre + ' ' + this.apellido; 
//     }
// }
// //Se puede crear varios objetos de tipo Persona con diferentes atributos                
// let padre = new Persona ('juan', 'perez', 'jperez@mail.com');
// console.log(padre.nombreCompleto()); //se llama la funcion de nombre completo aqsi que concatena todo el nombre y se imprime, obj con funcion

// let madre = new Persona('Sara', 'giraldo', 'sgirandol@email.com')
// console.log(madre); 
// //los cambios que hagaos en el obj padre no afectaran los hijos 

// //---OBJETOS OTRA MANERA DE CREARLOS----

// var miObjeto = new Object(); //se crea obj 
// let miObjeto2= {}; //crear objeto, sintaxis mejor 

// let miCadena1 = new String('hola');
// let miCadena2 ='hola'; //recoemndable 

// let miNumero= new Number(1);
// let miNumero2= 1; //recoemndada 

// let miBoolean1= new Boolean (false);
// let miBoolean= false; //recomendada 

// let miArreglo1= new Array();
// let miArreglo2= []; //recoemndadao

// let miFuncion= new function();
// let miFuncion2= function(){}


//--- Uso de Prototype en JavaScript---

//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '44332211'; //prototype sirve para agregarle nuevas propiedades y valores a todos los obj que se ayana  crear de tipo persona

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '11223344'; // este se usa si solo se quiere cambiar uno en especifico c ambiarle el que en prototype se l epuso en general. 
console.log( padre.tel );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
madre.tel = '66889900';
console.log( madre.tel );

//I M P O R T A N T E 
//----74. Uso de Call en JavaScript--------

//¿Para que sirve? permite llamar un metodo que esta definido en un objeto desde otro objeto. 

let persona1= { //definimos un obj 
    nombre: 'juan',
    apellido: 'perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2={
    nombre:'Carlos',
    apellido:'lara'
}

//uso del call para usar el metodo persona1.nombreCompleto con los datos del persona2 

console.log(persona1.nombreCompleto()); 

console.log(persona1.nombreCompleto.call(persona2)); //lamar el metodo de persona1 con los datos de persona2 


///metodo call 
 
let persona3 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona4 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar 
//el metodo persona3.nombreCompleto con los datos del persona4
console.log( persona3.nombreCompleto() );

console.log( persona3.nombreCompleto.call( persona4 ) );

//Uso de apply para usar 
//el metodo persona3.nombreCompleto con los datos del persona4
console.log( persona3.nombreCompleto() ); //se lamma nombre completo juan perez y en la segunda se llama apply
console.log( persona3.nombreCompleto.aplly( persona4 ) );