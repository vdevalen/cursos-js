class Cliente extends Persona{

    static contadorClientes= 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente= ++Cliente.contadorClientes;
        this._fecharegistro= fechaRegistro;
    }
    get _dCliente(){
        return this._idCliente
    }
    get fecharegistro(){
        return this._fecharegistro
    }
    set fecharegistro(fechaRegistro){
        this._fecharegistro= fechaRegistro;
    }
    toString(){
        return `
        ${super.toString()} 
        ${this._idCliente} 
        ${this._fecharegistro}`; 
    }
}


let cliente1 = new Cliente('Miguel', 'Cervantes', 30, new Date());
console.log( cliente1.toString() );

let cliente2 = new Cliente('Maria', 'Lara', 38, new Date());
console.log(cliente2.toString());