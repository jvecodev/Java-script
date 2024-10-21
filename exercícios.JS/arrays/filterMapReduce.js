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

// const pessoas = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Letícia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47},
// ];

// const pessoasNome5Letras = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasNome5Letras);

// const pesoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
// console.log(pesoasComMaisDe50Anos);

// const pessoasTerminacomA = pessoas.filter(obj => obj.nome.endsWith('a'));
// console.log(pessoasTerminacomA); // Saída: [ { nome: 'Maria', idade: 23 }, { nome: 'Letícia', idade: 19 }, { nome: 'Rosana', idade: 32 } ]
  


 




//map(valor, indice, array) → Esta é ordem dos parametros que o map recebe
// map → sempre retornar um array com a mesma quantidade de elementos

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosDobrados = numeros.map(valor => valor * 2);
// console.log(numerosDobrados);
// console

//Mapear objetos 

const pessoas1 = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
// utilizada se quero obter a chave nome 
//                        Mapeando o objeto
const nomes = pessoas1.map(obj => obj.nome);
const idades = pessoas1.map(obj => obj.idade);
console.log(idades);
console.log(nomes);

//tbm posso deletar chaves pelo map

const nomesDelete = pessoas1.map(obj => {
    delete obj.nome;
    return obj;
});  

//acrecentar uma chave no objeto
//assim eu altero os dados do objeto original
const identificadores = pessoas1.map((obj, indice) => {
    obj.id = indice + 1;
    return obj
}); // acrescentar uma chave no objeto

//sem alterar

const identificadores2 = pessoas1.map((obj, indice) => {
    const novoObj = {...obj};
    novoObj.id = indice + 1;
    return novoObj;
});

