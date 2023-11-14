'use strict'



function mudarCor () {
    forma1.classList.toggle('vermelho');
}

function mudarForma () {
    forma2.classList.toggle('circulo');
}

function mudarTamanho () {
    forma3.classList.toggle('maior');
}

function girarElemento () {
    forma4.classList.toggle('girar225');
}

function mudarTudo () {
    formaFinal.classList.toggle('vermelho');
    formaFinal.classList.toggle('circulo');
    formaFinal.classList.toggle('maior');
    formaFinal.classList.toggle('girar225');
}



const forma1 = document.getElementById('forma1');
const forma2 = document.getElementById('forma2');
const forma3 = document.getElementById('forma3');
const forma4 = document.getElementById('forma4');
const formaFinal = document.getElementById('forma-final');

forma1.addEventListener('click' , mudarCor);
forma2.addEventListener('click' , mudarForma);
forma3.addEventListener('click' , mudarTamanho);
forma4.addEventListener('click' , girarElemento);
formaFinal.addEventListener('click' , mudarTudo);