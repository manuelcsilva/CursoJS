function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = 'fotodia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#863b28'
    } else {
        // Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#243a32'
    }
}
