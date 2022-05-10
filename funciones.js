//funcion sin parametros y sin retorno de valor
function mostrar () {
document.write ('Text from the function</br>');
}
for (let i = 0; i<10;i++) {
mostrar();
}

//Funcion con PARAMETRO
function imprimir (nombre){
document.write(`Hello,  ${nombre}</br>`);

}
//Para llamra funcion imprimir
    imprimir('Jose</br>');
    imprimir('Lucia');

//Funcioon que devuelva un resultado
function mayor (val1,val2)
{
let mayor =0;
if (val1>val2){
 mayor = val1;
 }
 else{
	 mayor = val2;
 }
 return  mayor;
 }
 document.write(mayor(5,20));
 
 //devolver el valor de la funcion a una variable
 let numMay = mayor (4,8);
 document.write (`<br/> The big number is:  ${numMay}`);