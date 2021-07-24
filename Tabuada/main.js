function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('selTab')
    if (num.value.length == 0) {
        alert("Digite um número")
    } else {
        var n = Number(num.value)
        tab.innerHTML= ''
        for (let i = 1; i <=10 ; i++) {
            var item = document.createElement('option')
            item.text = `${n} X ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}