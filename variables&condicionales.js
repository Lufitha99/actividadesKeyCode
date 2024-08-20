// EJEMPLOS DE TIPOS DE DECLARACION DE VARIABLES
var uno = "Es la forma más antigua de declarar variables en Js";
let dos = "Es la forma mas moderna de declarar las variables";
const tres = "es para cajas que no se pueden cambiar";
var nombre = "Ana";
//anidacion o concanetacion
let edad = 30
if(true){
    let edad= 25;
    console.log(edad);
}
console.log(edad);
//imprime 30 y 25

const pais = "Argentina";
console.log(pais);

//EJERCICIO MAYOR DE EDAD CON CONDICIONALES
let edads = 20;
if(edad >= 18){
    console.log("Eres mayor de edad");
}else if(edad >= 13){
    console.log("Eres un adolescente");
}

//EJERCICIO PUNTUACIÓN
let puntaje = 69;
if(puntaje >= 90){
    console.log("Excelente");
}else if(puntaje >= 70 && puntaje <=89){
    console.log("Bueno");
}else {
    console.log("Necesita mejorar");
}
//EJERCICIO HORA
let hora = 8
if(hora >= 6 && hora < 12 ){
    console.log("Buenos dias");
}else if(hora >= 12 && puntaje < 18){
    console.log("Buenas tardes");
}else {
    console.log("Buenas noches");
}