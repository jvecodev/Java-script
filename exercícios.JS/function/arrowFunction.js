// Retornar os numeros pares

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //                           Método utilizado para criacao de um novo ARRAY 
// const numerosPares = numeros.filter(valor => valor % 2 === 0); 
// console.log(numerosPares); //→ [2, 4, 6, 8, 10] 

// //Somar 
//                       Reduzir um Elemento a um unico valor(reduce)
//                       dois parametros, o acumulador e o valor
const somar = valor => valor.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(somar([1,2,3,4,5,6,7,8,9,]));

// //Retornar um array com o dobro dos valores
//               valores indefinidos        aplica uma funcao para cada elemento do array, e retorna um novo array  
 const multiplicar = (...valores) => valores.map(valor => valor * 2);
const valores = multiplicar(1,2,3,4,5,6,7,8,9,10);
console.log(`Dobro dos valores: ${valores}\n`);
