// const elementos = [ 
//     {tag: 'p', texto: 'Frase '},
//     {tag: 'div', texto: 'Frase '},
//     {tag: 'footer', texto: 'Frase '},
//     {tag: 'section', texto: 'Frase '}

// ]

// const container = document.querySelector('.container');
// const main = document.createElement('main'); 

// for (let i =0 ; i < elementos.length; i++){
//     const {tag:t, texto:txt} = elementos[i];
//     const tagCriada = document.createElement(t);
//     tagCriada.innerText = txt + (i + 1);
//     main.appendChild(tagCriada);
// }

// container.appendChild(main); 

const container = document.querySelector('.container');
const div = document.createElement('div');
const saudação = 'Olá mundo!';

for (let i = 0; i < 10; i++){                                               // Muito melhor desta forma 
    const p = document.createElement('p');
    p.innerText = saudação + (i + 1);
    div.appendChild(p);
}

container.appendChild(div);





