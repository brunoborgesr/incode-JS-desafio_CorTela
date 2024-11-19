let claro = document.querySelector('#claro')
let escuro = document.querySelector('#escuro')
let body = document.body;
let input = document.querySelector('input');
let titulo = document.querySelector('#titulo');
let opcaoclaro = document.querySelector('#modo_claro')
let opcaoescuro = document.querySelector('#modo_escuro')

claro.addEventListener('change', () => {
    body.style.backgroundColor = '#ffffff';
    opcaoclaro.style.color = '#000000';
    opcaoescuro.style.color = '#000000';
    titulo.style.color = '#000000';
    input.value = null;
    input.focus();
    escuro.checked = false;
})

escuro.addEventListener('change', () => {
    body.style.backgroundColor = '#121212';
    opcaoescuro.style.color = '#E0E0E0';
    opcaoclaro.style.color = '#E0E0E0';
    titulo.style.color = '#E0E0E0';
    input.value = null;
    input.focus();
    claro.checked = false;
})