// necesitamos obtener el valor del textarea al momento que su contenido cambie
//asi como existe el evento "onclick" tambien existe el evento "onchange"
//pero en este caso no nos sirve por que el evento "onchange" se "dispara" o ejecuta cuando
// un elemento es cambiado y pierde el foco y para este caso nosotros buscamos que el contador
//se actualice mientras escribimos
// para lo cual usaremos el evento "oninput" que la diferencia esta en que es ejecutado cada vez que el
// valor del elemento en nuestro caso el textarea cambie sin la necesidad de tener que perder el foco

//nuestro evento "oninput" que esta en el index.html ejecuta o llama una funcion llamada "updateCount"
//esta funcion fue creada por nosotros  y como parametro le pasamos el "evento" que se ejecutó
//cuando hablamos de pasarle el evento por parametro es nada más que pasar la información de dicho evento
//tiene información como el valor anterior, valor actual, los atributos del textarea ect.
//por lo general este parametro lo escriben como "e","evt","event"
//el evento trera demasiada información y a nosotros en este momento nos importa solo el valor de textarea
//que se encuentra en event.target.value
//si te das cuenta event es gran objeto 

function updateCount(e){
    // let valorTextArea = e.target.value.length // captura lo que esta dentro del textarea y agrega el largo al final
    let valorTextArea = e.target.value.replaceAll(" ", "")

    console.log(valorTextArea) 

    let counter = document.getElementById("counter-label")
    counter.innerHTML = valorTextArea.length
}

function clean(){
    let textArea = document.getElementById("texta")
    let counter = document.getElementById("counter-label")
    
    counter.innerHTML = 0
    textArea.value = ""
}



//ejercicio
// modifica la funcion "updateCount", captura el valor del text area en una variable
//identifica el contador y cambiale su contenido por el numero de caracteres que tiene 
//el textarea. para eso puedes ayudarte del metodo length() que tienen los string para saber el largo
// y para modificar el contenido de un elemento de html puedes usar innerHTML()
// y usa el boton limpiar para resetear el contador y limpiar el textarea


//extra calcular el numero de caracteres sin contar los espacios