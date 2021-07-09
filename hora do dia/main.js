function carregar(){
    var texto = document.getElementById('texto')
    var img = document.getElementById('imgManha')
    var data = new Date
    var hora = data.getHours()
    texto.innerHTML = `Agora são ${hora} horas`

    if (hora>=0 && hora<12) {
        img.src = './img/manha.jpg'
        document.body.style.background = '#ceb395'
    } else if(hora<18) {
        img.src = './img/tarde.jpg'
        document.body.style.background = '#db7d62'
    } else{
        img.src = './img/noite.jpg'
        document.body.style.background = '#0a3c83'
    }
}
