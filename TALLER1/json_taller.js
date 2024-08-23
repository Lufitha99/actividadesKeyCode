//JSON
/*
{"Título":"Balada de pájaros serpientes y cantores",
"Autor": "Suzanne Collins",
"AñoPublicacion":2020
}
*/

const libro = {
    Titulo:"Balada de pájaros serpientes y cantores",
    Autor: "Suzanne Collins",
    AñoPublicacion:2020
    };
    let objeto = JSON.stringify(libro)
    console.log("convertir objeto a json: "+ objeto);

