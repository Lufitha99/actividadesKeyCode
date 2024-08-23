// DESAFIO FINAL

//declaro variable con arreglo vacio donde se guardaran los pares
let numerosArray=[];
// funcion recibe los numeros del for y el array vacio
 function numerosPares(numero, numerosArray){
    if (numero % 2 == 0){
        let creacionArray = numerosArray.push(numero)
        return creacionArray;
    }
}


// cree un for que va hasta el 20, este toma los numeros del 1 al 20 que pasan por la funcion que aparta los pares y los envia al array
// la ventaja de hacerlo asi es que puedes poner en el for numeros incluso hasta el 100 sin hacerlo de forma manual y te retornara los pares de ese rango
for(i=1; i <= 20; i++){
//llamado a la funcion
 numerosPares(i, numerosArray);

}
console.log("array numeros pares: ")
console.log(numerosArray)