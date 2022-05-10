// crear Arrays
const numero = [];
console.log(numero);
//crear con valores
const colores =['rojo','verde','azul','amarillo'];
console.log(colores);
//Otra forma de reccorerlo
for( i in colores){
colores.reverse();	
document.write("<br/>");	
document.write(colores[i]);
}

//crear con valores iguales
const seis = new Array(10).fill(6);
console.log(seis);
//mostrar
for(let =i; i<seis.legth;i++){
	console.log(seis[i]);
	console.log(seis.slice(2,4));
}
/*
for (color of colores){
	console.log("For de Colores");
	console.log(color);
}
*/

