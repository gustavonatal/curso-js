function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO} Digite o ano novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            genero = 'Homem'
            if (idade>=4 && idade<=16) {
                img.setAttribute('src', 'imgs/menino.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','imgs/jovem-h.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','imgs/homem.jpg')
            } else {
                img.setAttribute('src','imgs/velho.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade>=4 && idade<=16) {
                img.setAttribute('src','imgs/menina.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','imgs/jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','imgs/mulher.jpg')
            } else {
                img.setAttribute('src','imgs/velha.jpg')
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}