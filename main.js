//descendiente de main.js

/*IMPORT DE TODO
import * as p1 from "./practica1.js"*/ 


import {secundaria} from "./practica1.js"

let principal = 100

//FUNCION

//para hacerlo funcion hacen falta los ()
/*resultado es un objeto
innerHTML es lo que hay dentro del <div>hola</div> del html.
*/
function saludar(nombre){
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = nombre
}

//estructuras de control
let ficha = {
nombre: "ruben",
personaFavorita: "cualquier perro",
ponerNota: calcularNota
}
function calcularNota() {
    //todo lo que sea
    return 0;
}

//operador igual es ==
console.log("10 es igual a 20: ", 10 == 20)
console.log("20 es igual a 20: ", 20 == 20)

//operador distinto de es !=
console.log("10 es igual a 20: ", 10 != 20)
console.log("20 es igual a 20: ", 20 != 20)

function factorial(numero) {
    if(condition) {

        factorial(numero-1)
    }
    return 1;
}
let valor = 0
let resultado = factorial(valor)


function factorial(numero) {
    if(numero >= 1) {

        return numero * factorial(numero-1)
 }
    return 1;
}
let valor = 10
let resultado = factorial(valor)
console.log("el resultado")

function factorial(n)
let m = n;
let resultado = n;
while (m >= 1) {

return resultado;
  }


/*SUMA*/ 
function suma(lista) {
    resultado= 0;


    

    return resultado;
}

let numeros = [120, 200, 5, 48, 190, -49];
console.log("la suma de la lista es: ", suma(numeros))


//----------------------------------------
//document selecciona algo del documento
//document.getElementById("resultado")
//para visualizarlo
//let resultado = document.getElementById("resultado")


/*console.log(secundaria)*/