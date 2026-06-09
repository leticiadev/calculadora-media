// Este é o arquivo principal.
// Ele conecta os outros arquivos e controla o funcionamento da aplicação.

import {
    calcularMedia,
    verificarSituacao,
    definirClasseSituacao
} from "./calculo.js";

import {
    mostrarErro,
    mostrarResultado,
    limparCampos
} from "./interface.js";

// Pegando os elementos do HTML.
const inputNome = document.getElementById("nome");
const inputNota1 = document.getElementById("nota1");
const inputNota2 = document.getElementById("nota2");
const inputNota3 = document.getElementById("nota3");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

// Função principal que será executada quando o botão for clicado.
function processarCalculo() {

    const nome = inputNome.value.trim();

    const nota1 = Number(inputNota1.value);
    const nota2 = Number(inputNota2.value);
    const nota3 = Number(inputNota3.value);

    // Validação dos campos.
    if (
        nome === "" ||
        inputNota1.value === "" ||
        inputNota2.value === "" ||
        inputNota3.value === ""
    ) {
        mostrarErro(resultado, "Por favor, preencha todos os campos.");
        return;
    }

    // Validação das notas.
    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        mostrarErro(resultado, "As notas precisam estar entre 0 e 10.");
        return;
    }

    // Usando as funções importadas do arquivo calculos.js.
    const media = calcularMedia(nota1, nota2, nota3);
    const situacao = verificarSituacao(media);
    const classeCSS = definirClasseSituacao(situacao);

    // Mostrando o resultado na tela.
    mostrarResultado(resultado, nome, media, situacao, classeCSS);

    // Limpando os campos.
    limparCampos(
        inputNome,
        inputNota1,
        inputNota2,
        inputNota3
    );
}

// Adicionando o evento de clique no botão.
btnCalcular.addEventListener("click", processarCalculo);