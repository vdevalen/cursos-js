//caracteristica de POO, en js se usa para re utilizar codigo

//ejemplo: se tiene la clase padre persona y clase hija empleado las dos tienen atibutos y metodos 
//clase persona, atributos _nombre, _apellido, metodos los set y get 
//clase hija que es empleado EXRENDS (tiene todo lo de la clase padre nombre, apellido)y tiene otro atributo diferente departamento con los get y set
// get es para recuperar el valor del atributo
// set es para modificar el valor del atributo

class Persona{ //CLASE PADRE PERSONA 
    constructor(nombre,apellido){ 
        this._nombre=nombre; //ATRIBUTOS 
        this._apellido=apellido;
    }
    get nombre(){ //GET NOMBRE
        return this._nombre;
    }
    set nombre(nombre){ //SET NOMBRE
        this._nombre=nombre;
    }
    get apellido(){ //GET APELLIDO
        return this._apellido;
    }
    set apellido(apellido){ //SET APELLIDO
        this._apellido=apellido;
    } 
    //--------CLASE PADRE, METODO PARA HEREDAR----
    nombreCompleto(){  
        return this._nombre + ' ' + this._apellido;
    }
    //----sobreescribiendo el metodo de la clase padre(object)-----
    toString(){
        //se aplica polimorfismo  (multiples formas en tiempo de ejecucion)
        //el metodo se ejecuta depende si es una referencia de tipo padre o de tipo hijo 
        return this.nombreCompleto();
    }
    //---static hace que este metodo solo se pueda utilizar en este clase, mas no con los demas obj que se creen de esta---
    static saludar(){
        console.log('Saludos desde metodo static')
    }
}

class Empleado extends Persona{ //CLASE HIJA EMPLEADO, palabra EXTENDS para heredar lo de la clase padre y nombre de la clase 
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //se usa para llamar los atributos y el constructor de la clase padre
        this._departamento=departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento=departamento;
    }
    //---SOBRE ESCRITURA--- //se pone el mismo metodo de la clase padre con la palabra super. que hace que se herede lo del emtodo mas el atributo que tiene demas la clase hija
    nombreCompleto(){ 
        return super.nombreCompleto + ' ' + this._departamento;
    }
}

let persona1 = new Persona('juan', 'perez');
console.log(persona1.toString()); //obj clase padre

//-------OBEJTO DE LA CLASE HIJA------- tener en cuenta haber puesto la palabra "super" en el constructor
let empleado1= new Empleado('Maria', 'Montoya', 'Sistemas');
console.log(empleado1);

//-----DEFINIR METODO EN LA CLASE PADRE PARA HEREDAR EN LA CLASE HIJA----

console.log(empleado1.nombreCompleto()); //se le ponen () porque se esta imprimiendo un metodo 
console.log(empleado1.toString());  //obj clase hija

//---------SOBREESCRITURA EN JS----------
//en la clase padre definimos un obj como persona y los atributos son nombre y apellido entonces nombre completo solo toma esos dos, y desconoce el atributo de departamento ya que es de la clase hija. 
//SOBRE ESCRITURA nos ayuda a que la clase hija pueda usar nombreCompleto que es de la clase padre y agg departamento que es el atributo que tiene, asi que vamos a modificar el comportamiento del metodo de nombre completo en la clase hija. 

//importante

//-----clase object, sobrecarga, metodo toString, polimorfismo----

//-------------METODO toString---------
// este metodo permite mandar a imprimir informacion del estado del objecto, valores actuales de cada atributo. 
//prototype: permite agg atributos o metodos de manera dinamica 

//----PALABRA STATIC EN JS--- metodo que solo se asocia con el metodo no con los obj 

//el metodo static se pone en la clase pirncipla Persona, asi que solo se puede imprimir llamando esa clase, de lo contrario saldra error. -- 
//  static saludar(){
//  console.log('Saludos desde metodo static')
Persona.saludar(); //manera correcta 
persona1.saludar(); //manera incorrecta porque el static no puede ser usado en sus obj solo en la clase principal que es Persona. 

//-----ATRIBUTOS ESTATICOS EN JS------
//