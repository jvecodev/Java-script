const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numero.filter(valor => valor % 2 === 0);
console.log(numerosPares);

const double = numerosPares .map(valor => valor * 2);
console.log(double);

const soma = double.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(`${soma} é a soma dos valores pares multiplicados por 2 do array numero `);



  