let userName = ''
let userSurname = ''
let userColor = ''
let result = ''

const nome = document.getElementById('nome');

nome.addEventListener('click', function () {
    userName = prompt('Inserisci il tuo nome:');
});

const cognome = document.getElementById('cognome');

cognome.addEventListener('click', function () {
    userSurname = prompt('Inserisci il tuo cognome:');
});

const colore = document.getElementById('colore');

colore.addEventListener('click', function () {
    userColor = prompt('Inserisci il tuo colore preferito:');
});

const risultato = document.getElementById('risultato');

risultato.addEventListener('click', function () {
    alert(`${userName}${userSurname}${userColor}#${Math.floor(Math.random() * 99)}`)
});

