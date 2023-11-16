'use strict'

const botaoSequencia = document.getElementById('botao-sequencia');
const botaoImpar = document.getElementById('botao-impar');
const botaoPar = document.getElementById('botao-par');
const botaoMultiplos = document.getElementById('botao-multiplos');
const quantidade = document.getElementById('quantidade');


function gerarSequencia () {
    // const quantidade = document.getElementById('quantidade');
    const resultadoSequencia = document.getElementById('resultado-sequencia');

    resultadoSequencia.textContent = '';
    for (let contador = 0; contador <= quantidade.value; contador++){
        // resultadoSequencia.textContent += contador + ' ';
        const span = document.createElement('span')
        span.textContent = contador
        resultadoSequencia.appendChild(span)
    };
};

function gerarNumerosImpares () {
    const resultadoImpar = document.getElementById('resultado-impar');

    resultadoImpar.textContent = '';
    for (let contador = 1; contador <= quantidade.value; contador+=2){
        // resultadoImpar.textContent += contador + ' ';
        const span = document.createElement('span')
        span.textContent = contador
        resultadoImpar.appendChild(span)
    };
};


function gerarNumerosPares () {
    const resultadoPar = document.getElementById('resultado-par');

    resultadoPar.textContent = '';
    for (let contador = 0; contador <= quantidade.value; contador+=2) {
        // resultadoPar.textContent += contador + ' ';
        const span = document.createElement('span')
        span.textContent = contador
        resultadoPar.appendChild(span)
    };
};

function gerarNumerosMultiplos () {
    const resultadoMultiplos = document.getElementById('resultado-multiplos');

    resultadoMultiplos.textContent = '';
    for (let contador = 5; contador <= quantidade.value; contador+= 5) {
        // resultadoMultiplos.textContent += contador + ' ';
        const span = document.createElement('span')
        span.textContent = contador
        resultadoMultiplos.appendChild(span)
    };
};

botaoSequencia.addEventListener('click' , gerarSequencia);
botaoImpar.addEventListener('click' , gerarNumerosImpares);
botaoPar.addEventListener('click' , gerarNumerosPares);
botaoMultiplos.addEventListener('click' , gerarNumerosMultiplos);