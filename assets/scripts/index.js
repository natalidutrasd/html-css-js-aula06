function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours()
msg.innerHTML= `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA !
    img.src = "assets/img/manha.jpg"
    document.body.style.background= '#e0d9d4'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE !
    img.src = "assets/img/tarde.jpg"
    document.body.style.background= '#8e53bf'
} else {
    // BOA NOITE !
    img.src = "assets/img/noite.jpg"
    document.body.style.background='#644741'
}
}
