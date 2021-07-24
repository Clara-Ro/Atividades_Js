function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('ano')
    var resp = document.querySelector('div#resposta')
    if (anoNasc.value.length==0 || anoNasc.value > anoAtual) {
        alert('ERRO! Verifique os dados')
    } else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoNasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','imagem')
        if (sexo[0].checked) {
            genero = 'Masculino'
            if (idade>=0 && idade<10) {
                img.setAttribute('src', './Img/criança m.jpg')
            } else if (idade<21 ) {
                img.setAttribute('src', './Img/adolescente m.jpg')
            } else if(idade < 50){
                img.setAttribute('src', './Img/adulto m.jpg')
            } else {
                img.setAttribute('src', './Img/idoso m.jpg')
            }
        } else if(sexo[1].checked){
            genero = 'Feminino'
            if (idade>=0 && idade<10) {
                img.setAttribute('src', './Img/criança f.jpg')
            } else if (idade<21 ) {
                img.setAttribute('src', './Img/adolescente f.jpg')
            } else if(idade < 50){
                img.setAttribute('src', './Img/adulta f.jpg')
            } else {
                img.setAttribute('src', './Img/idosa f.jpg')
            }
        }
        resp.style.textAlign = 'center'
        resp.innerHTML = `Você é do genero ${genero} e tem ${idade} anos`
        resp.appendChild(img)
    }
}