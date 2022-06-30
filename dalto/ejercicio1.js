/*PROBLEMA 1: 
INGRESAR EL MONTO MAS CARO 
SI HAY 2 O MAS, MOSTRAR MAS  
INDICAR EL VUELTO */

dineroRoberto = prompt ("¿cuanto dinero tiene?");
dineroPedro = prompt ("¿cuanto dinero tiene?");
dineroCofla = prompt ("¿cuanto dinero tiene?");

dineroCofla = parseInt(dineroCofla); //convierte en entero o sea a numero 

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("cofla; comprate el helado de agua");
	alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("cofla; comprate el helado de crema");
	alert("y te sobran" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("cofla; comprate el helado de heladix");
	alert("y te sobran" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("cofla; comprate el helado de heladovich");
	alert("y te sobran" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("cofla; comprate el helado de helardo");
	alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("cofla, comprate helado con confites o el pote de 1/4kg");
	alert("y te sobran" + (dineroCofla - 2.9));

} else {
	alert("lo siento cofla, pobre de mierda, no te alcanza para ningun helado");
}





if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("roberto, comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("roberto, comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("roberto, comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("roberto, comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("roberto, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento roberto, pobre de mierda, no te alcanza para ningun helado");
}




if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("pedro; comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("pedro; comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("pedro; comprate el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("pedro; comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("pedro; comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("pedro, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento pedro, pobre de mierda, no te alcanza para ningun helado");
}
// a
frutas = ["banano", "fresa", "mango", "piña"]
	document.write(frutas[1]);



	 
l