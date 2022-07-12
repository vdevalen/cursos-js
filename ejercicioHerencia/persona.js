class Persona{
    
    static contadorPersonas= 0;
    
    constructor(nombre, apellido, edad){
        this._idPersona= ++Persona.contadorPersonas; //por medio de la variale se inicializa
        this._nombre= nombre;
        this._apellido= apellido;
        this._edad= edad;
    }
    get idPersona(){
        return this._idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){ //convertir en templete string click derecho, se accede a los atributos con el signo de $
        return `
        ${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

//prueba clase Persona
let persona1 = new Persona('Valetina', 'Pinzon', 19);
console.log(persona1.toString());

let persona2 = new Persona('Carlos', 'Ramirez', 35);
console.log( persona2.toString() );