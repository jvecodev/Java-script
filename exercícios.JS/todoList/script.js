const input = document.querySelector('.input');
const button = document.querySelector('.btnAdicionar');
const resultado = document.querySelector('.resultado');
const erro = document.querySelector('.erro');

button.addEventListener('click', function(e) {
    e.preventDefault();
    adicionarElemento();
});


function adicionarElemento(tarefa = null) {
    if (!tarefa && input.value === '') {
        const error = document.createElement('p');
        error.innerText = 'Por favor, insira um valor!!!';
        error.classList.add('error');
        erro.appendChild(error);
    } else {
        const list = document.createElement('li');
        list.classList.add('list');

        const itemText = document.createElement('span');
        itemText.innerText = tarefa ? tarefa : input.value; // Adiciona tarefa passada como argumento

        // Cria o botão de apagar e adiciona ao item da lista
        const btnApagar = criarBotaoApagar(list);

        list.appendChild(itemText);
        list.appendChild(btnApagar);
        resultado.appendChild(list);
        erro.innerHTML = '';

        if (!tarefa) {
            input.value = ''; // Limpa o campo de entrada após adicionar o item
            salvarTarefas(); // Salva a tarefa somente quando não está carregando as tarefas salvas
        }
    }
}

function criarBotaoApagar(list) {
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.classList.add('btnApagar');

    // Adiciona o evento de click ao botão de apagar
    btnApagar.addEventListener('click', function() {
        apagarElemento(list);
    });

    return btnApagar;
}

function apagarElemento(element) {
    element.remove();
    salvarTarefas(); // Atualiza o localStorage após remover o elemento
}

function salvarTarefas() {
    const liTarefas = resultado.querySelectorAll('li'); // Corrigido para selecionar 'li' em vez de 'list'
    const listaDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function tarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');

    if (tarefas) {
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            adicionarElemento(tarefa);
        }
    }
}

tarefasSalvas();
