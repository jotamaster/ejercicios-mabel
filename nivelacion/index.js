
let user = {
    name: 'Exequiel',
    rut:'123123123',
    typeUser: 'basic'
}

let nombreDiv = 'midiv'

let elDiv = document.getElementById(nombreDiv)

// const elTexto = document.createTextNode('Mabel')
// elDiv.appendChild(elTexto)

elDiv.innerHTML = `<ul>
                    <li>Mabel</li>
                  </ul>
                  `
// elDiv.innerHTML = 'Hola Mabel'
console.log(user.typeUser)
if(user.typeUser == 'admin'){
    elDiv.style.background = 'black'
}else{
    elDiv.style.background = 'green'
}

elDiv.style.color = 'white'

console.log(elDiv.appendChild)