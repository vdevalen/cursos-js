class Empleado extends Persona{

    static contadorEmpleados= 0

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado= ++Empleado.contadorEmpleados; //cuantos obj de tipo empleados se han creado 
        this._sueldo=sueldo;
    }
    get idEmpleados(){
        return this._idEmpleados;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `
        ${super.toString()} 
        ${this._idEmpleado} 
        ${this._sueldo}`;
    }
}
let empleado1 = new Empleado('Karla', 'Gomez', 25, 5000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Laura', 'Quintero', 33, 7000);
console.log( empleado2.toString() );

