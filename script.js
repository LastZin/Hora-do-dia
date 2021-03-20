function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
msg.innerHTML = `Agora são ${hora} hora(s), ${minutos} minuto(s) e ${segundos} segundos`
if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#e5c98a'
} else if (hora >= 12 && hora < 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#dca360'
} else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#033576'
}
}