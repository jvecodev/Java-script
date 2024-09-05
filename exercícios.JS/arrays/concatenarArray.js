const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const lista3 = lista1.concat(lista2);
console.log(lista3);

// Outra meneira 

const lista4 = [1, 2, 3];
const lista5 = [4, 5, 6];

// Rest operato é o ... que pega todos os elementos de um array e transforma em um array separado

const lista6 = [...lista4, ...lista5];
console.log(lista6);



// spread operator é o ... que pega todos os elementos de um array e transforma em um array separado

const lista7 = [1, 2, 3, 4, 5, 6];
const lista8 = ['Luis', 'Otávio', 'Eduardo', ...lista7, ...[7, 8, 9]];

console.log(lista8.join(' '));




