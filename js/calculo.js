//funcao que recebe as notas e calcula a media
export function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    return media;   
}

// funcao que recebe a media retorna o status do aluno
export function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

// funcao que recebe o status do aluno e retorna a classe css correspondente
export function definirClasseSituacao(situacao) {
    if (situacao === "Aprovado") {
        return "aprovado";
    } else if (situacao === "Recuperação") {
        return "recuperacao";
    } else {
        return "reprovado";
    }
}
