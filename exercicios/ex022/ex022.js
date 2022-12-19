var numero = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        false
    }

}


function adicionar(){
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' //limpa o resultado
    } else {
        window.alert('Valor invalido ou já está na lista')
    }
    numero.value = '' //limpa a caixa do numero
    numero.focus() // deixa selecionado para colocar novo num 
    
}

function finalizar (){
    if (valores.length==0){
        window.alert('Adicione um valor')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos]<menor)
                menor = valores[pos]
        }
        let media = soma/tot

        res.innerHTML = ' '
        res.innerHTML += `<p>Ao todo, temos ${tot} números. </p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores foi ${soma}</p>`
        res.innerHTML += `<p>A media dos valores doi ${media}</p>`
    }    
}
