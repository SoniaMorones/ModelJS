
let tabla = parseInt(prompt("Wich table do you whant to calculate?"));
document.write(`Les't start whith ${tabla} table</br>`);

//Forma 1 de calcular tabla de multiplicar
/*for (let i = 1; i <=10; i ++){
	resultado = tabla*i;
	document.write (`${tabla}*${i} = ${resultado}</br>`);
}*/


/*

//Forma 2 de calcular tabla de multiplicar
let i = 1;
while(i<=10){
resultado = tabla *i;
document.write(`${tabla}*${i}=${resultado}</br>`);

i++
}*/

//Forma 3 de calcular tabla de multiplicar
let i = 1;
do {
	resultado = tabla *i;
    document.write(`${tabla}*${i}=${resultado}</br>`);
	i++;
	}
	
	while(i<=10);
	document.write("Loop do-while finished</br>");
	
