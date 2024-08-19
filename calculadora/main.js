// Calculadora 

const clear = document.querySelector('#btn-clear');
const equal = document.querySelector('#equal');
const screen = document.querySelector('.display');
const soma = document.querySelector('#adicao');
const subtracao = document.querySelector('#subtracao');
const multiplicacao = document.querySelector('#multiplicacao');
const divisao = document.querySelector('#divisao');
const numeros = document.querySelectorAll('.btn'); // Corrigido para querySelectorAll, retorna a NodeList de todos os botões
const deleteBtn = document.querySelector('#btn-del');
const historico = document.querySelector('.historicocalc');

clear.addEventListener('click', function(){
    screen.value = '';
    historico.innerHTML = '';
});

divisao.addEventListener('click', function(){
    screen.value += '÷';
});

multiplicacao.addEventListener('click', function(){
    screen.value += 'x';
});

soma.addEventListener('click', function(){
    screen.value += '+';
});

subtracao.addEventListener('click', function(){
    screen.value += '-';
});

function evaluateExpression() {
    try {
        // Substituir 'x' por '*' e '÷' por '/' para que as operações sejam avaliadas corretamente
        let expression = screen.value.replace(/x/g, '*').replace(/÷/g, '/');
        
        // Avaliar a expressão
        screen.value = eval(expression);
        screen.style.fontSize = '30px';
        
        // Adicionar ao histórico
        historicoCalculo();
    } 
    
    catch  {
        screen.style.color = 'red';
        screen.style.fontSize = '30px';
        screen.style.fontWeight = 'bold';
        screen.value = "Erro";
    }
}

equal.addEventListener('click', evaluateExpression);

// Adicionando event listeners para todos os botões numéricos
numeros.forEach(function(botao) {
    botao.addEventListener('click', function() {
        screen.value += botao.textContent;
    });
});

deleteBtn.addEventListener('click', function() {
    screen.value = screen.value.slice(0, -1);
});


function historicoCalculo() {
    historico.innerHTML += screen.value + '<br>';
    screen.style.color = 'black';
    screen.style.fontSize = '14px';
    screen.style.fontWeight = 'normal';
}
