// Yield é um parecido com retunr mas ele não finaliza a função, ele pausa a função e retorna um valor, se a função for chamada novamente, ela continua de onde parou, e chama o segundo yield, e assim por diante. Utilizando o next() para chamar a função.

// function* geradora1(){
//     // Código qualquer
//     yield 'Valor 1';
//     // Código qualquer
//     yield 'Valor 2';
//     // Código qualquer
//     yield 'Valor 3';
// }

// const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next()); // rotorna done : false pois nao acabou os yield 
// console.log(g1.next().value); // undefined pois não temos 4 yield 
// console.log(g1.next()); // done: true pois acabou os yield



//Perigoso de entrar em loop e acabar com a memória, stack overflow
function* gerador2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

const g2 = gerador2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);