//···················TIPOS DE VARIABLES···················



let incognita //undefined
let nombre = 'Mi nombre' //String
let edad = 30 // Number
let soltero = true //boolean (true o false)
let zero = null //valor especifico
let incognita //undefined

/*si a una variable le asignas un valor te muestra que tipo es.
 Undefined es algo a evitar
 
 
 
 */

 //valores referenciales 

 //object - parejas clave/valor
 let ficha = {
    nombre: 'Mi nombre',
    edad: '30',
    soltero: true
 }

 //esto se va a ejecutar, imprime resultados.
 console.log(nombre)
 console.log(ficha)

//ACCESO A PROPIEDADES
//por punto "."
console.log(ficha.edad)
//por nombre de propiedad
console.log(ficha['nombre'])



//ARRAY
let lista = [
    'paul',
    'john',
    'george',
    'ringo'
]
console.log(lista)

//ACCESO A ELEMENTOS ARRAY (al ser dinamico no conocemos el orden y por eso indicamos el 3.)
console.log(lista[3])


//-------------------------------------------------------

/*FUNCIONES 
() sin nada dentro repite sin mas lo que contiene.

*/    
let imprimir = function algo() {
    console.log('imprime algo')
}

//al añadir msg debemos indicar que valor debemos sacar en la consola ej: imprimir(50) imprimir(hola mundo)
let imprimir = function algo(msg) {
    console.log('imprime algo')
}

let imprimir = function algo(usuario){
    console.log('hola',usuario.nombre)
    console.log('tu edad es: ',usuario.edad)

}
imprimir(ficha)
//-------------------------------------------------------

 //diferencia entre valor y referencia
 let a = 5
 let b = a
a = 7
console.log(a)
console.log(b)
//a =5 y b=7 porque es valor


let a = {clave1: 30, clave2: 50}
let b = a
a.clave = 40
// clave1: 40 clave2: 50 porque es referencia.






