//For each é usado para percorrer array e objetos iteráveis, ele é mais indicado para arrays, pois ele percorre os valores e não os índices, para objetos iteravel como strings, e não para dicionários.

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

nomes.forEach(obj => {
    console.log(obj)
})

//outra maneira de fazer
console.log('-',repeat(10))


nomes.forEach((valor, indice) => {
    console.log(valor, indice)
})