//clase padre y clase hija herencia. 

class Empleado{
    constructor(nombre, sueldo){ //clase padre
    this._nombre=nombre;
    this._sueldo= sueldo;

    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{ //clase hija
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo) //se llama el constructor de la clase padre y los hereda
        this.departamento= departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles}departamento: ${this.departamento}`; //se lalma el obtener detaller de gerente y con super. se llama el de la clase padre SOBREESCRITURA METODOS EN LA CLASE PADRE Y EN LA CLASE HIJA  
    }
}

function determinarTipo(tipo){ //determina el tipo este metodo, determina el tipo del obj que se esta trabajando   
    console.log( tipo.obtenerDetalles() );
    if(tipo instanceof Gerente){ //que es? se recomientda poner la clase de menor gerarquia
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Object){ //clase objt es la clase padre de todas las clases 
        console.log('Es un tipo Object');
    }
}

let empleado1= new Empleado('Juan', 5000); // la clase padre solo toma el obtener detalle 
let gerente1= new Gerente ('Carlos', 3000, 'sistemas'); // obtener 
console.log(gerente1.obtenerDetalles());