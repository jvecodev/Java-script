// const nome = 'João Vitor Corrêa Oliveira'

// // Terá uma sintaxe diferente, utiliza com funções de callback
//     //Função de Callback       //Parâmetros...........
// nome.split('').forEach(function(valor){
//     console.log(`Usando o forEach: ${valor}`)
    
// })

// //Para iterar objeto 

// console .log('-------------------')

const container = document.querySelector('.container');
const div = document.createElement('div');

const saudação = {
    nome: 'João Vitor Corrêa Oliveira',
    idade: 22,
    cidade: 'São Paulo',
}; //Aqui é um objeto, não uma string}';

for (let i in saudação){                                               // Muito melhor desta forma 
    const p = document.createElement('p');
    p.innerText = `${i} : ${saudação[i]}`;

    div.appendChild(p);
}

container.appendChild(div);



