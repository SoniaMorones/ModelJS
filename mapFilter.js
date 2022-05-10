const numeros = [4,5,2,9,7,1,5,4,2,3,15,13];
numeros.forEach(function(numero){

    console.log (numero/2);

   }
   );
   
   //Aplicar funcion a cada elemento del array MAP
   
   const duplica = numeros.map(function(numero){
   
   return numero *2;
   });
   
   console.log("Using function MAP:");
   console.log(duplica);
   
  //Extraer elementos que cumplen una condion -FILTER
  
  const mayores = numeros.filter(function(numero){
     return numero > 9;
  });
  
  
  console.log ("Usando filter");
  console.log (mayores);
  
  //Devolver indice de valor coincidiente
  const indice = numeros.findIndex(function(valor) {
    return valor === 1;
  }
  );
  
  console.log ("Column that contains the number : 1");
  console.log (indice);
  
  //Return igual elemento
  const valor = numeros.find(function(numero) {
  return numero == 5;
  
  });
  console.log("Valor 5 encontrado");
  console.log(valor);