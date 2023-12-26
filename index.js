let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo dos Conselhos');
    exibirTextoNaTela('p', 'Você pode pedir conselhos');
}

exibirMensagemInicial();

 { 
    alert("oi");
}
    