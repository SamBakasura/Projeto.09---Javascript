'use strict'

const botaoSequencia = document.getElementById('botao-sequencia');
const botaoImpar = document.getElementById('botao-impar');
const botaoPar = document.getElementById('botao-par');
const botaoMultiplos = document.getElementById('botao-multiplos');
const botaoCalcularTodos = document.getElementById('botao-calcular-todos');

const botaoLimparTodos = document.getElementById('botao-limpar-todos');

const quantidade = document.getElementById('quantidade');
const resultadoSequencia = document.getElementById('resultado-sequencia');
const resultadoImpar = document.getElementById('resultado-impar');
const resultadoPar = document.getElementById('resultado-par');
const resultadoMultiplos = document.getElementById('resultado-multiplos');

function novaSpan(valor, resultado) {
        const novaSpan = document.createElement('span')
        novaSpan.textContent = valor
        resultado.appendChild(novaSpan)
}

function gerarSequencia () {
    resultadoSequencia.textContent = '';
    for (let contador = 0; contador <= quantidade.value; contador++){
        novaSpan(contador, resultadoSequencia);
    };
};

function gerarNumerosImpares () {
    resultadoImpar.textContent = '';
    for (let contador = 1; contador <= quantidade.value; contador+=2){
        novaSpan(contador, resultadoImpar);
    };
};


function gerarNumerosPares () {
    resultadoPar.textContent = '';
    for (let contador = 0; contador <= quantidade.value; contador+=2) {
        novaSpan(contador, resultadoPar);
    };
};

function gerarNumerosMultiplos () {
    resultadoMultiplos.textContent = '';
    for (let contador = 5; contador <= quantidade.value; contador+= 5) {
        novaSpan(contador, resultadoMultiplos);
    };
};

function gerarTodos() {
    gerarSequencia();
    gerarNumerosImpares();
    gerarNumerosPares();
    gerarNumerosMultiplos();
}

function limparTodos() {
    resultadoSequencia.textContent = '';
    resultadoImpar.textContent = '';
    resultadoPar.textContent = '';
    resultadoMultiplos.textContent = '';

    quantidade.value = '';
}

botaoSequencia.addEventListener('click' , gerarSequencia);
botaoImpar.addEventListener('click' , gerarNumerosImpares);
botaoPar.addEventListener('click' , gerarNumerosPares);
botaoMultiplos.addEventListener('click' , gerarNumerosMultiplos);
botaoCalcularTodos.addEventListener('click' , gerarTodos)
botaoLimparTodos.addEventListener('click' , limparTodos)