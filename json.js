const alumno = {
	nombre: "Pedro",
	nota: 6
};
console.log(alumno);
//asignarle un valor 5 al campo nota
alumno['nota']=5;
console.log (alumno);
//imprimir el valor de nombre
console.log(alumno['nombre']);
//imprimir el valor de nota
console.log(alumno.nota);

//Estructura compleja de Json:

const alumnos =
   [ 
    {
	nombre:"Maria",
	nota: 10
	}
	,
    {
	nombre: "José",
    nota: 8	
    }
    ,
	{
	nombre : "Patricia",
	  nota: 9
	}
  ];
  
  console.log(alumnos);
 //MI autoria, no funcionó;  console.log (alumnos.nombre[0] = "Claudia");

// añadir un alumno al Json con PUSH
let nuevoAluno =
{
	nobre: "Rogelio",
	nota: 6
};

alumnos.push(nuevoAluno);
console.log(alumnos);	

//Borrar el registro de la posción cero
alumnos.splice (0,1);
console.log(alumnos);

//recorrer Json e imprimirlo
for(let i=0; i<alumnos.length; i++){
document.write(`</br>`);	
document.write(`${alumnos[i].nombre}`);

}
//Borrar un registro de la posición uno y despues mostrar en consola
console.log(alumnos);
alumnos.splice (1,1);
console.log(alumnos);


  