const nome = 'João Vitor Corrêa Oliveira'

//Contará o número de caracteres da string
for (let i in nome){
    console.log(`Usando o in: ${i}`)
}

console.log	('-------------------')	

// Mostrará cada caractere da string
for (let valor of nome){
    console.log(`Usando o of: ${valor}`)
}

// O for of é mais indicado para arrays e strings, pois ele percorre os valores e não os índices, para objetos iteravel como strings, e não para dicionários.

//Para percorrer os valores com o in é necessário acessar o índice do array ou da string. ↓

for (let i in nome){
    console.log(`Usando o in: ${nome[i]}`)
}

console.log('-------------------')


