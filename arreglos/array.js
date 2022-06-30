const autos=['BMW', 'Mercedes Benz', 'Volvo'] ;  //guarda varios valores 
console.log(autos); //autos guadra todos los autos 

console.log(autos[0]); //acceder solo a un elemento que queremos ingresar los elementos comienzan desde 0

for (let i = 0; i < autos.length; i++){ //varirable contador i, el largo del arreglo "length" saber cuantos elementos hay
    console.log(autos[i]); 
}

//modificar un valor, se pone el objeto y se pone el indice en el que esta ubicado en este caso mercedes esta en el 1 y se le pone el nuevo obj que se quiera ingresar 

autos[1] = 'MercedesBenz'
console.log(autos[1])

//push, permite agregar nuevos valores o elemntos a un arreglo 

autos.push('Audi'); //con este metodo se agrega este auto 
console.log (autos); //se valida que se agrega el elemento 


//agregar variable a un arreglo con el largor 

console.log(autos.length); //se validan que hay 4 elemntos
autos[autos.length]= 'cadallic'; //agregar un nuevo elementos a el final del arreglo  

console.log(autos); //aca se valida que ya se agrego el cadallic en la ultima posicion 