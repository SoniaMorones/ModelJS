//condition swiths
console.log("Select one option:\n");
console.log("1. Show\n");
console.log("2. Print\n");
console.log("3. Exit\n");

opcion =parseInt(prompt("Choose one option"));

switch (opcion){
case 1: document.write("Loading..");
        break;
		
case 2: console.log("Print ☺...");
      break;
case 3: console.log ("Exit...◘");
      break;

default:
console.log("\n Optinon mumber doestn exist");	  
	  break;

}

