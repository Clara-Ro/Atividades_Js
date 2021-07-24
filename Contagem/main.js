function contar() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var resul = document.getElementById('resultado')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //alert("Erro! Dados incorretos, verifique e tente novamente")
        resul.innerHTML = `Impossivel contar`
    } else {
        resul.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
    if (p<=0) {
        p=1
    }    
    if (i<f) {
        for (let c = i; c <= f ; c+=p) {
            resul.innerHTML += `${c} \u{27A1}` 
        }
    }   else {
        for (let c = i; c>=f; c-=p) {
            resul.innerHTML +=`${c} \u{27A1}`
            }
        }   
        resul.innerHTML += `FIM`  
    }    
}