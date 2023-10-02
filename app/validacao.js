function verificaSeOChutePossuiUmValorValido (chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML +='<div>valor invalido</div>';
        return
    }

    if(numeroMaioOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML+=`<div>valor inválido: fale um número q está entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h2>você acertou!</h2>
        <h3>o numero secreto era${numeroSecreto}</3>
        
        <button id="jogar-novamente" class="btn-jogar">jogar novamente</button>`
        
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML+= `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div> !-->`
    }else{
        elementoChute.innerHTML+= `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div> !-->`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaioOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
