//CICLO FOR
for (let i = 1; i <= 5 ; i++){
    console.log(i);
}
let i = 1
while(i <= 5){
    console.log(i)
    i++
}


do{
    console.log(i);
    i++
}while(i <= 5);

//EJERCICIO CICLOS
let mayoresCinco = 0;

for(i = 1; i <= 10; i++){
    console.log(i)
    if(i > 5){
        mayoresCinco++
        
    }
}
console.log("los numeros mayores que 5 son : "+ mayoresCinco)