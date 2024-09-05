const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

console.log(nomes);

const nomesRemovidos = nomes.splice(2, 1, "Roberto");

console.log(nomes);
console.log(nomesRemovidos);

//simulando o pop

const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
//                                   removo ultimo elemento
const nomesRemovidos2 = nomes2.splice(-1, 1);

console.log(nomes2);

//simulando o shift

const nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
//                                   removo primeiro elemento
const nomesRemovidos3 = nomes3.splice(0, 1);

console.log(nomes3);

// usando o push

const nomes4 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
//                                   adiciono no final
nomes4.push('Otávio');








