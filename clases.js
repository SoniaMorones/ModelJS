class coche {

//constructor,inicia propiedades y metodos
constructor (marca, motor, color){
    this.marca= marca;
	this.motor=motor;
	this._color= color;
	this._velocidad =0;
  }
   //Asignar atributos
     get velocidad (){
	   return this._velocidad;
	   
	 }
	 set cambiaCorlor(color){
		 this._color =color;
	 }
	 
	 get dameDatos(){
		 return `The car ${this.marca} ,has the color ${this._color}`;
	 }
//metodos
arrancar(){
	console.log('Encendido');
}

detenerse (){
     console.log('Detenido');
}

acelerar (){
	this._velocidad= this.velocidad +10;
	console.log (`Current velocity = ${this._velocidad}`);
}

frenar (){
  if (this._velocidad > 0){
    this._velocidad = this._velocidad -10;
	console.log(`Current velocity metodo frenado = ${this._velocidad}`);
  } else{
    this._velocidad=0;
	console.log(`Current velocity metodo frenado = ${this._velocidad}`);
  }

}
}
const miCoche = new coche('Mazada','Gasoline','Red');
console.log (miCoche.dameDatos);
miCoche.arrancar();
miCoche.acelerar();
miCoche.acelerar();
console.log(`Acelerar-Current velocity is: ${miCoche.velocidad}`);
miCoche.frenar();
console.log(`Frenar-Current velocity is: ${miCoche.velocidad}`);
miCoche.cambiaCorlor = 'Azul';
console.log (miCoche.dameDatos);
miCoche.detenerse();