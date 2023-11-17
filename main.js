//Practica 1

let msg = "hola mundo"

console.log(msg)

document.getElementById("title")

/* document.addEventListener se utiliza para
  agregar un "escuchador de eventos al documento HTML" */
 /*"DOMContentLoaded" significa que queremos hacer algo cuando el contenido
  del DOM (Document Object Model) haya cargado completamente. */
document.addEventListener("DOMContentLoaded", init)



function init(event) {
    let title = document.getElementById("title")
    title.style.color = "red"
    title.value = msg
    loadData("data.json")
}

/*    fetch(url).then
        .then(Response => json = Response.json())
        .then(data => {
            json = data
            console.log(json)
        }) */

function loadData(url){
fetch(url)

.then(response => response.json())
.then(data => pintaMisHobbies(data))
}

function pintaMisHobbies(json){
    console.log(json)
}



