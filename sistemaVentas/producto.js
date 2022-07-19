class Producto{
    static contadorProductos= 0; /*variable para saber cuantos obj de tipo producto se van creando*/

    constructor(nombre, precio){
        this._idProducto= ++Producto.contadorProductos;
        this._nombre= nombre;
        this._precio= precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        history._precio=precio;
    }
    toSring(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`; 
    }
}

class Orden{
    static contadorOrdenes= 0;
    
    static get MAX_PRODUCTOS(){ //metodo () 
        return 5; //se retorna el valor de la constante entonces solo se puede ingresar 5 productos, este metodo indica el tope de obj ingresados 
    }

    constructor(){
        this._idOrden= ++Orden.contadorOrdenes; //por cada obj que se cree se usa el contador para que incfremente cada que se agg un obj 
        this._productos= []; //arreglo de productos para la relacion de  muna orden puede tener muchos productos agg por medio del arreglo
        //arreglo vacio que se le va agregar productos por medio del metodo agregar productos
        // this._contadorProductosAgregados= 0;
}

get idOrden(){
    return this._idOrden;
}

agregarProducto(producto){
    if (this._productos.length < Orden.MAX_PRODUCTOS){ //.length regresa la cantidad de elementos que tenemos en el arreglo de productos
        this._productos.push(producto);//si no se ha llegado al tope de obj en el arreglo para agg es: this._el nombre del arreglo.push(el nuevo producto) el metodo push hace que se agg un nuevo producto
        // this._productos[this._contadorProductosAgregados]= producto; otra manera de ingresar un producto 
    } 
    else{
        console.log('No se pueden agregar mas productos');
    }
}

calcularTotal(){
    let totalVenta= 0 
    for (let producto of this._productos) {//recorrer el arreglo for (let variable que almacena los elemntos del arreglo of arreglo que usaremos) y asi JS va recorrer cada elemntos que ingresemos
        totalVenta += producto.precio; //la variabel total venta va ir sumando cada uno de los precios de cada producto que este en el arreglo 
        //totalVenta= totalVenta+ producto.precio 
    }   
    return totalVenta; //calculo total
}

mostrarOrden(){ //metodo que va imprimir cada uno de los elementos de la orden y sus productos, y por cada producto se van a convertir en una cadena 
    let productosOrden= ' ';
    for (let producto of this._productos){
        productosOrden += '\n{'+ producto.toSring() + ' }'; //agg cada producto 
    }
    console.log(`Orden: ${this._idOrden} Total: ${this.this.calcularTotal()}, Productos: ${productosOrden}`)
}

// let producto1= new Producto ('pantalon', 200);
// console.log(producto1.toSring());
// let producto2= new Producto('camisa', 300);
// console.log(producto2.toSring());

//crear nuevo objt tipo orden
//-------agregaer nuevos produdctos RELACION DE AGREGACION-----

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden(); //mostrar toda la orden generada y agregada anteriormente 

let orden2= new Orden();
let producto3= new Producto('Cinturon', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.mostrarOrden();

}
