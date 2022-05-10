class persona {
	
	constructor (nombre, edad) {
		this._nombre = nombre;
		this._edad = edad;
}

get nombre (){
return this._nombre;
}

get edad () {

return this._edad;
}


//metodo info devuelve name age
info() {
return `My name is ${this._nombre} and I have ${this._edad} years old`;
}

//propiedades
dormir(){
console.log (" I am slepping");
}

comer () {

console.log ("I am eating");

}

despertar () {

console.log ("I am wake up");
}


}

//CLASE TRABAJADOR


class trabajador extends persona{
	
	constructor (nombre, edad) {
		super(nombre, edad);
		this.trabaja = "Yes";
}

get salario (){
return this._salario;
}

set cambiaSalario (salario) {
this._salario = salario;
}

info() {
return `My name is ${this._nombre} and I have ${this._edad} years old, is he/she working?: ${this.trabaja}`;
}

}
//------------------------------------
//LO QUE IMPRIME
//CLASE PERSONA
const personal = new persona ("Jose", 33);

console.log(personal.info());
personal.despertar();
personal.comer();
personal.dormir();

// CLASE TRABAJADOR
const trabador1 = new trabajador ("Alejandra", 26);
console.log(trabador1.info());
trabador1.cambiaSalario =1500;
console.log (trabador1.salario);
console.log(trabador1.edad);
console.log(personal.edad);
