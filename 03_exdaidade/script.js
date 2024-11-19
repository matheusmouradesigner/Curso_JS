function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if( fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var msex = document.getElementById('masc')
        var fsex = document.getElementById('fem')
        var idade = ano - Number(fano.value)
        var genero = 'pessoa'
        var img = document.createElement('img')
        img.setAttribute('id','foto')

            if (msex.checked) {
            genero = 'Homem'
                if(idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src','crianca_m.jpg')
                } else if(idade >=10 && idade < 21){
                    //jovem
                    img.setAttribute('src','jovem_m.jpg')
                } else if(idade >=21 && idade < 50){
                    //adulto
                    img.setAttribute('src','adulto_m.jpg')
                } else{
                    //idoso
                    img.setAttribute('src','velho_m.jpg')
                }
             } else if (fsex.checked) {
            genero = 'Mulher'
                if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','crianca_f.jpg')
                } else if(idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src','jovem_f.jpg')
                } else if(idade >=21 && idade < 50){
                //adulto
                img.setAttribute('src','adulto_f.jpg')
                } else{
                //idoso
                img.setAttribute('src','velho_f.jpg')
                }
             }
        res.style.textAlign ='Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}