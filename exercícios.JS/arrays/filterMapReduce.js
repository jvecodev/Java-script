// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //filter(valor, indice, array) → Esta é ordem dos parametros que o filter recebe 
// // filter → Sempre retornar um array com a mesma quantidade de elementos ou menos

// // Uma das maneiras de usar o metodo filter é passando uma função como argumento

// //                                  arrow function
// const numerosFiltrados = numeros.filter(valor => valor > 5);
// console.log(numeros);
// console.log(numerosFiltrados);

// //Outra maneira é usando uma funcao de callback 

// const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function callbackFilter(valor){
//     return valor > 5;
// }
// const numerosFiltrados2 = numeros2.filter(callbackFilter);
// console.log(numeros2);

// //funcao anonima - maneira muito comum tbm de se usar o filter

// const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //                                       funcao anonima
// const numerosFiltrados3 = numeros3.filter(function(valor){
//     return valor > 5;
// });

// //com arrow function anonima   - maneira mais comum de se usar o filter
// // Eliminando as chves e o return da funcao 

// const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numerosFiltrados4 = numeros4.filter(valor => valor > 5);
// console.log(numeros4);

//exercicio1

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasNome5Letras = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasNome5Letras);

const pesoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
console.log(pesoasComMaisDe50Anos);

const pessoasTerminacomA = pessoas.filter(obj => obj.nome.endsWith('a'));
console.log(pessoasTerminacomA); // Saída: [ { nome: 'Maria', idade: 23 }, { nome: 'Letícia', idade: 19 }, { nome: 'Rosana', idade: 32 } ]
  


 




//map(valor, indice, array) → Esta é ordem dos parametros que o map recebe
// map → sempre retornar um array com a mesma quantidade de elementos

