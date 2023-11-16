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


function gerarSequencia () {
    resultadoSequencia.textContent = '';
    for (let contador = 0; contador <= quantidade.value; contador++){
        const novaSpan = document.createElement('span')
        novaSpan.textContent = contador
        resultadoSequencia.appendChild(novaSpan)
    };
};

function gerarNumerosImpares () {
    resultadoImpar.textContent = '';
    for (let contador = 1; contador <= quantidade.value; contador+=2){
        const novaSpan = document.createElement('span')
        novaSpan.textContent = contador
        resultadoImpar.appendChild(novaSpan)
    };
};


function gerarNumerosPares () {
    resultadoPar.textContent = '';
    for (let contador = 0; contador <= quantidade.value; contador+=2) {
        const novaSpan = document.createElement('span')
        novaSpan.textContent = contador
        resultadoPar.appendChild(novaSpan)
    };
};

function gerarNumerosMultiplos () {
    resultadoMultiplos.textContent = '';
    for (let contador = 5; contador <= quantidade.value; contador+= 5) {
        const novaSpan = document.createElement('span')
        novaSpan.textContent = contador
        resultadoMultiplos.appendChild(novaSpan)
    };
};

function gerarTodos() {
    gerarSequencia();
    gerarNumerosImpares();
    gerarNumerosPares();
    gerarNumerosMultiplos();
}

function LimparTodos() {
    
}

botaoSequencia.addEventListener('click' , gerarSequencia);
botaoImpar.addEventListener('click' , gerarNumerosImpares);
botaoPar.addEventListener('click' , gerarNumerosPares);
botaoMultiplos.addEventListener('click' , gerarNumerosMultiplos);
botaoCalcularTodos.addEventListener('click' , gerarTodos)