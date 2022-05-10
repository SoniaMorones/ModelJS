//var mensaje = "message form var";

try {
document.write(mensaje);
console.log(mensaje);	
}
catch(error) {
console.log(error);
console.log(error.message);
console.log(error.name);
}

console.log("ESto se vera pase lo que pase");

//Example

var num1 = 34; var num2= 5;
try {
	if (num2!==0) {
		resultado = num1/num2;
		console.log (resultado);
	}
	else {
		throw new Error("División entre cero no es permitida");
	 }

}
catch (error) {
console.log(error);
}	




