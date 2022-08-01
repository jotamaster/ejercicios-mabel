// necesitamos obtener el valor del textarea al momento que su contenido cambie
//asi como existe el evento "onclick" tambien existe el evento "onchange"
//pero en este caso no nos sirve por que el evento "onchange" se "dispara" o ejecuta cuando
// un elemento es cambiado y pierde el foco y para este caso buscamos que el contador
//se actualice mientras escribimos

// para lo cual usaremos el evento "oninput" que la diferencia esta en que es ejecutado cada vez que el
// valor del elemento en nuestro caso el textarea cambie sin la necesidad de tener que perder el foco

//nuestro evento "oninput" que esta en el index.html ejecuta o llama una funcion llamada "updateCount"
//esta funcion fue creada por nosotros  y como parametro le pasamos el "evento" que se ejecutó
//cuando hablamos de pasarle el evento por parametro es nada más que pasar la información de dicho evento
//información como el valor anterior, valor acutual, los atributos del textarea ect.
//por lo general este parametro lo escriben como "e","evt","event"
//el evento trear demaciada información y a nosotros en este momento nos importa solo el valor de textarea
//que se encuentra en event.target.value
//si te das cuenta event es gran objeto 

// function updateCount(e){
//     console.log(e.target.value)
// }

//ejercicio
// modifica la funcion "updateCount", camtura el valor del text area en una variable
//identifica el contador y cambiale su contenido por el numeros de caracteres que tiene 
//el textarea. para eso puedes ayudarte del metodo length() que tienen los string pasa saber el largo
// y para modificar el el contenido de un elemento de html puedes usar innerHTML()
// y usa el boton limpiar para resetear el contador y limpiar el textarea


//extra calcular el numero de caracteres sin contar los espacios