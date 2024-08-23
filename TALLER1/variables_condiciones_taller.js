//variables y condiciones
let temperatura = 30;


// este codigo implementa otra condicional para saber que clima es templado, ya que menos de 30 grados no es frio como tal
if(temperatura >= 30 ){
    console.log("Hace calor");
}else if(temperatura >= 22 && temperatura <= 29){
    console.log("El clima es templado");
}else{
    console.log("Hace frio");
}

// segun lo requerido solo son dos condiciones
if(temperatura >= 30 ){
    console.log("Hace calor");
}else{
    console.log("Hace frio");
}

