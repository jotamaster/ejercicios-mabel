function calculateBtn(){
    let nombre = document.getElementById('nombre').value;
    let estaturaCM = parseInt(document.getElementById('estatura').value)
    let estaturaMT = estaturaCM / 100
    let peso = parseInt(document.getElementById('peso').value)
    let imc = Math.round(peso / (estaturaMT * estaturaMT))
    let img = document.getElementById('image')
    let text = document.getElementById('text')
    let IMC = document.getElementById('IMC')

    if (imc < 18.5) {
        text.innerHTML = 'Estás muy delgado(a) :( '
        img.style.backgroundImage = 'url(imgs/underweight.jpg)'
    } else if (imc < 25){
        text.innerHTML = 'Felicidades, estás saludable :)'
        img.style.backgroundImage = 'url(imgs/good.jpg)'
    } else {
        text.innerHTML = 'Tienes sobrepeso :3'
        img.style.backgroundImage = 'url(imgs/overweight.jpeg)'
    }
    IMC.innerHTML = 'Tu IMC es: ' + imc

}

  