'use strict'

const users = [
    {
        nome: 'Ana Coelho',
        id: '9876543210',
        email: 'anac@gmail.com',
        celular: '11 98765-4321',
        cidade: 'Osasco',
        image: './img/ana-coelho.jpg',
        status: true,
    },
    {
        nome: 'Hugo Gomes',
        id: '0123456789',
        email: 'hugog@gmail.com',
        celular: '11912345678',
        cidade: 'Barueri',
        image: './img/hugo-gomes.jpg',
        status: false,
    },
    {
        nome: 'Joana Pereira',
        id: '0987654321',
        email: 'joanap@gmail.com',
        celular: '11981726354',
        cidade: 'Jandira',
        image: './img/joana-pereira.jpg',
        status: false,
    },
    {
        nome: 'José Chaves',
        id: '9081726354',
        email: 'josec@gmail.com',
        celular: '11912873465',
        cidade: 'Osasco',
        image: './img/jose-chaves.jpg',
        status: true,
    },
    {
        nome: 'Mariana Silva',
        id: '9302164578',
        email: 'marianas@gmail.com',
        celular: '11954678321',
        cidade: 'Jandira',
        image: './img/mariana-silva.jpg',
        status: true,
    },
];

const botaoExibir = document.getElementById('exibir');

function criarCard(user) {
    const container = document.getElementById('data-container');
    const card = document.createElement('div');

    let status = '';
    if (!(user.status)) {
        status = 'sombra';
    };

    card.className = `card ${status}`;
    card.innerHTML = `
    <img src="${user.image}" alt="Foto do(a) ${user.nome}" class="card__photo">
    <h3 class="card__name">${user.nome}</h3>
    <p class="card__user-id">${user.id}</p>
    `;

    container.appendChild(card);
};

function limparContainer() {
    const container = document.getElementById('data-container');
    container.textContent = '';
};

function exibir() {
    limparContainer();
    users.forEach(criarCard);
};

botaoExibir.addEventListener('click' , exibir);