//vamos a crear una lista a la cual podamos agregar o quitar elementos

//primero vamos a aprender a crear un elemento en el html desde el JS

//Document.createElement()
//en HTML tenemos el mentodo createElement(tagName)
//el parametro tagName especifica el tipo de elemento ejemplo "p", "ul","li","span" etc.

//en la practica para crear un elemento "p" seria asi:

const parrafo = document.createElement("p");

//ahora hay que entender que solo lo creamos a nivel de JS aun no esta en el HTML que queremos intervenir
//si bien usamos el metodo getElementById() para seleccionar un elementeo existente y luego usars sus metodos y propiedades
//lo mismo pasa ahora con parrafo porque es un elemento y podemos usar innerHTML y modificar su contenido

//estado actual de parrafo seria algo asi: <p></p>

parrafo.innerHTML = "contenido de mi parrafo"

//estado actual de parrafo despues de modificar su contenido: <p>contenido de mi parrafo</p>

//ya tenemos en <p> y ademas con contenido pero aun no lo agregamos al HTML
//en el HTML tenemos creado un div con el id "content" y es adentro de ese div donde agregaremos el parrafo
// para ello utilizamos el metodo appendChild() que como lo dice es añadir o adjuntar un hijo en este caso al div

//primero selecciono el div a modificar y lo guardo en una variable para mayor comodidad

const divContent = document.getElementById('content')

// luego a mi div le agrego mi elemento parrafo por medio de la funcion appendChild() que como parametro le pasas el elemento

divContent.appendChild(parrafo)



//de momento sabemos crear elementos y agregarlos dentro de otros elementos

//ahora vamos a crear un elemento <ul> en el HTML con un identificador

/**** anda al html crea el elemento ul y obtenlo aqui como en la linea 29 ****/


/*****************************************************************************/

// luego de tener nuestro <ul> vamos a agregarle elementos de tipo <li> pero para que sea mas dinamico lo haremos desde un array

//tenemos un arrray de textos
let items = ['item 1','item 2','item 3','item 4','item 5']

// tenemos que recorrer ese array con un for y por cada vuelta o iteracion crear y agregar un elemento <li>
//con el texto del string de array que corresponda al bucle
// esperado
// <ul id="elquelepusiste">
//     <li>item 1</li>
//     <li>item 2</li>
//     <li>item 3</li>
//     <li>item 4</li>
//     <li>item 5</li>
// </ul>

for (let index = 0; index < items.length; index++) {
    
}



