'use strict'

const botaoSequencia = document.getElementById('botao-sequencia');
const botaoImpar = document.getElementById('botao-impar');
const botaoPar = document.getElementById('botao-par');
const botaoMultiplos = document.getElementById('botao-multiplos');
const quantidade = document.getElementById('quantidade');

function gerarSequencia () {
    // const quantidade = document.getElementById('quantidade');
    const resultadoSequencia = document.getElementById('resultado-sequencia');

    resultadoSequencia.textContent = "";
    for (let contador = 0; contador <= quantidade.value; contador++){
        resultadoSequencia.textContent += contador + " ";
    };
};

function gerarNumerosImpares () {
    const resultadoImpar = document.getElementById('resultado-impar');

    resultadoImpar.textContent = "";
    for (let contador = 1; contador <= quantidade.value; contador+=2){
        resultadoImpar.textContent += contador + " ";
    };
};


function gerarNumerosPares () {
    const resultadoPar = document.getElementById('resultado-par');

    resultadoPar.textContent = "";
    for (let contador = 0; contador <= quantidade.value; contador+=2) {
        resultadoPar.textContent += contador + " ";
        
    };
};

function gerarNumerosMultiplos () {
    const resultadoMultiplos = document.getElementById('resultado-multiplos');

    resultadoMultiplos.textContent = "";
    for (let contador = 1; contador <= quantidade.value; contador++) {
        if (contador % 5 == 0) {
            resultadoMultiplos.textContent += contador + " ";
        };
    };
};

botaoSequencia.addEventListener('click' , gerarSequencia);
botaoImpar.addEventListener('click' , gerarNumerosImpares);
botaoPar.addEventListener('click' , gerarNumerosPares);
botaoMultiplos.addEventListener('click' , gerarNumerosMultiplos);