function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('ires')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src','menino.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src','adolecentem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','homen.png')
            } else {
                // Idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src','menina.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src','adolecentef.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','mulher.png')
            } else {
                // Idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dedtectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}