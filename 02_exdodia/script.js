function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#FFEEC2'
        document.querySelector("header").style.color ='black'
        document.querySelector("footer").style.color ='black'
    } else if (hora >=12 && hora < 18){
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#F19C79'
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#94B0DA'
    }

}
