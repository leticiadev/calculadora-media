// este arquivo guarda as funcoes que manipulam a interface do usuario, ou seja, que mostram mensagens

// funcao para mostrar mensagens de erro
export function mostrarErro(elemento, mensagem){
    elemento.className = "erro";
    elemento.innerHTML = mensagem;
}

// funcao para mostrar o resultado do calculo final na tela
export function mostrarResultado(elemento, nome, media, situacao, classeCSS){
    elemento.className = classeCSS;
    elemento.innerHTML = `${nome}, sua média é ${media.toFixed(2)}. Situação: ${situacao}.`;
}

// funcao que limpa os campos do formulario
export function limparCampos(inputNome, inputNota1, inputNota2, inputNota3){
    inputNome.value = "";
    inputNota1.value = "";
    inputNota2.value = "";
    inputNota3.value = "";
}