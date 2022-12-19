
function carregar() {

    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data = new Date()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12){
        img.src='manha.jpg' 
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18){
        img.src='tarde.jpg' 
        document.body.style.background = 'orange'
    } else {
        img.src='noite.jpg'
        document.body.style.background = 'grey'
    } 
}