// function maiorMenor(numero, numero2) {
//     if (numero > numero2) {
//         console.log(`O maior número é ${numero}`);
//         console.log(`O menor número é ${numero2}`);
//     } else {
//         console.log(`O maior número é ${numero2}`);
//         console.log(`O menor número é ${numero}`);
//     }
    
// }
// const numero1 = Math.floor(Math.random() * 100);
// const numero2 = Math.floor(Math.random() * 100);
// maiorMenor(numero1, numero2);


// Paisagem ou retrato / Operaçoes ternarias

// function paisagem(altura, largura) {
//     const tipo = altura > largura ? 'retrato' : 'paisagem';   
//     console.log( `H${altura} x L${largura}`);
//     console.log(tipo);
// }

// const altura = Math.floor(Math.random() * 100);
// const largura = Math.floor(Math.random() * 100);
// paisagem(altura, largura);

// FizzBuzz

function fizzBuzz() {
    for (let indice = 0; indice <= 100; indice++) {
        if (indice % 3 === 0 ){
            console.log(`${indice} Fizz`);
        }
        else if (indice % 5 === 0) {
            console.log(`${indice} Buzz`);
        }
        else if (indice % 3 === 0 && indice % 5 === 0) {
            console.log(`${indice} FizzBuzz`);
        }
        else {
            console.log(indice, indice);
        }
    }
}

fizzBuzz();


