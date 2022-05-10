

//bucle For

let tabla = parseInt(prompt("Wich table do you whant to calculate?"));
document.write(`Les't start whith ${tabla} table</br>`);
for (let i = 1; i <=10; i ++){
	resultado = tabla*i;
	document.write (`${tabla}*${i} = ${resultado}</br>`);
}