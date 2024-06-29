for (let i = 1; i <=10; i++) {
    console.log('Linha ' + i)
}

console.log('='.repeat(20))
//Outra maneira de fazer o mesmo código acima\

for (let i = 1; i <=10; i++) {
    // Não posso esquecer da crases
    console.log(`Linha ${i}`)
}

console.log('='.repeat(20))

//Sem estrutura Ternária

for (let i = 0; i <=10; i++) {

    if(i % 2 === 0){
        console.log(i, 'par')	
}   else{
        console.log(i, 'impar')
    }
}

console.log('='.repeat(20))

// Par ou impar 
for (let i = 0; i <=10; i++) {

// Estrutura Ternária       if      else
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

console.log('='.repeat(20))
// for com intervalos

console.log('Com intervalos de 3')
//                  administra o intervalo
for (let i = 0; i<=10; i+=3){
    console.log(`Linha ${i}`)

}

console.log('='.repeat(20))

//Retrocedendo

console.log('Retrocedendo')
for (let i = 10; i>=0; i--){
    console.log(`Linha ${i}`)
}

console.log('='.repeat(20))

const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melancia'];

for (let i = 0; i < frutas.length; i++){
    if (frutas [i] === 'Pêra'){
        console.log(`Pêra é horrível ${i}`)
    } else {
        console.log(`Posição ${i}: ${frutas[i]}`)
    }
}
console.log('='.repeat(20))

for (let i in frutas){
    console.log(frutas[i])
}

console.log('='.repeat(20))

console.log('Tamanho das palavras  do Array')

for (let i in frutas){
    console.log(frutas[i].length)
}

console.log('='.repeat(20))

console.log('Tamanho do Array')

for (let i in frutas){
    //Mostrou 5 vezes pois tem 5 palavras no Array
    console.log(frutas.length)
}