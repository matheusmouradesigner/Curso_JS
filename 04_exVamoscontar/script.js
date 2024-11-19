function contar(){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML='Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let ps = Number(pas.value)
        if(i<f){
            for(let c = i; c <= f; c += ps){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            for(let c = i; c >= f; c -= ps){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } 
        res.innerHTML += `\u{1F3C1}`
    }
    

}