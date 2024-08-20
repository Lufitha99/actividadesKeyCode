//ARRAYS
let frutas = ["Manzana","Banana", "Naranja"]
frutas[1] = "Pera";
console.log(frutas)// [ "Manzana","Pera", "Naranja"]
frutas.push("mango")
console.log(frutas)//[ "Manzana","Pera", "Naranja", "mango"]

//EJERCICIO COLORES
let colores = ["Azul", "Verde", "Rosado","Morado"];
console.log(colores[0]);
console.log(colores[3]);
colores.push("Amarillo");
console.log(colores);
colores.shift()
console.log(colores);
console.log(colores.length)