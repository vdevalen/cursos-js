//-------------------CLASES----------

//una clase es un plantilla, tiene atributos, metodos y nombre 
//un obj es una instancia de una clase  
//una clase SIEMPRE debe tener NOMBRE DE LA CLAS, ATRIBUTOS, METODOS

class Persona{ //el nombre de la clase sea con letra mayuscula
    constructor(nombre, apellido){ //se debe crear el constructor de la clase 
        this._nombre= nombre; //inicializamos los atributos, se usa _ para diferenciar los get y set
        this._apellido= apellido; //nombre del atributo=nombre de la clase
    }      
//-----METODO GET Y SET PARA CLASES-----
// get es para recuperar el valor del atributo
// set es para modificar el valor del atributo

    get nombre(){ //GET se usa para cuadno solo se quiera usar una propiedad e4n especifico
        return this._nombre;
    }

    set nombre(nombre){ //SET
        this._nombre=nombre;
    }

}

let persona1 = new Persona('juan', 'perez'); //creamos un obj de tipo Persona de la clase 
//de manera automatica se manda a llamar el constructor de la clase si no tiene se crea uno vacio
persona1.nombre='juan carlos'; // SET se asigna nuevo valor con el set 
console.log(persona1); //Se imprime todo el obj
console.log(persona1.nombre); // GET se imrpime solo el nombre con el get _ 

let persona2 = new Persona('karla', 'Suarez');
console.log(persona2) //Se crea otro obj 

//-----HOISTING EN CLASES-------

//No es posible crear obj antes declarar la clase 
// no se aplica el concepto de hoisting 


