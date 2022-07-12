//EJEMPLO DE LA PALABRA STATIC EN JS 

class Persona{ 

    static contadorPersonas = 0;//atributo de nuestra clase

    //metodo que dice el maximo de objetos que podemos crear 
    static get MAX_OBJ(){ //metodo que permite leer no modificar, ger pprque solo se recupera inf 
        return 5; //solo se pueden crear 5 obj de la clase persona 
    }

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona= ++Persona.contadorPersonas;
        }
        else{
            console.log('Se han superado el maximo de objetos permitidos');
        }
        // this.idPersona = ++Persona.contadorPersonas; //por cada obj que se cree de tipo persona, se le asgina un nuevo identificador ya que se esta incrementado el contador estatico se incrementa en 1 por cada obj que se cree, asi que cadaa obj va tener un valor unico 
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez'); //un objeto
console.log( persona1.toString() ); 

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas'); //dos obejtos 
console.log( empleado1.toString() );

console.log( Persona.contadorPersonas ); //cuentas las personas que se han creado 

let persona2 = new Persona('Karla', 'Ramirez'); //tres objetos 
console.log( persona2.toString() );

console.log( Persona.contadorPersonas);

console.log(Persona.MAX_OBJ); //5

let persona3 = new Persona('Sandra', 'Ramirez'); //cuatro objetos 
let persona4 = new Persona('Sandra', 'Ramirez'); //cinco objetos 
let persona5 = new Persona('Sandra', 'Ramirez'); //sale error ya que solo pusimos que se pudieran crear 5 obj 