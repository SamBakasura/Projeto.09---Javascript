'use strict'
// 3º var
// 2º let
// 1º const

function limparCores() {
    titulo.classList.remove('azul', 'vermelho', 'verde', 'cinza');
}

function trocarCor () {
    const titulo = document.getElementById('titulo');
    const corEscolhida = document.getElementById('cor-escolhida').value;

    if (corEscolhida == 'azul'){
        limparCores();
        titulo.classList.add('azul');
    } else if (corEscolhida == 'vermelho'){
        limparCores();
        titulo.classList.add('vermelho');
    } else if (corEscolhida == 'verde') {
        limparCores();
        titulo.classList.add('verde');
    } else if (corEscolhida == 'cinza') {
        limparCores();
        titulo.classList.add('cinza');
    } else {
        limparCores();
    }
}
const botaoTrocarCor = document.getElementById('trocar-cor');

botaoTrocarCor.addEventListener('click', trocarCor);