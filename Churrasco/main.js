// carne 400g por pessoa, mais de 6 horas usa 650g
// cerveja 1200ml por pessoa, mais de 6 horas usa 2000ml
// refrigerante/água 1000ml por pessoa, mais de 6 horas usa 1500ml
//crianças vale 0,5

let lerAdultos = document.getElementById('adultos')
let lerCriancas = document.getElementById('criancas')
let lerDuracao = document.getElementById('duracao')
let lerResultado = document.getElementById('resultado')

function calcular() {
    let adultos = lerAdultos.value
    let criancas = lerCriancas.value
    let duracao = lerDuracao.value
    let resultado = lerResultado

    if (duracao>=6) {
        let quantCarne = 650 * adultos + (650/2 * criancas)
        let quantCerveja = 2000 * adultos 
        let quantRefri = 1500 * adultos + (1500/2 *criancas)
        resultado.innerHTML = `<p>${quantCarne/1000}Kg de Carne </p>`
        resultado.innerHTML += `<p>${Math.ceil(quantCerveja/355)}Latas de Cerveja </p>`
        resultado.innerHTML += `<p>${Math.ceil(quantRefri/2000)} garrafas de 2L de refrigerante </p>`

    }else{
         let quantCarne = 400 * adultos + (400/2 * criancas)
         let quantCerveja = 1200 * adultos
         let quantRefri = 1000 * adultos + (1000/2 * criancas)
         resultado.innerHTML = `<p>${quantCarne/1000}Kg de Carne </p>`
         resultado.innerHTML += `<p>${Math.ceil(quantCerveja/355)} Latas de Cerveja </p>`
         resultado.innerHTML += `<p>${Math.ceil(quantRefri/2000)} garrafas de 2L de refrigerante </p>`
    }
}