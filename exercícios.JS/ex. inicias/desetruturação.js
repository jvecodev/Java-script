//Atribuição via desestruturação

// let a = 'a';
// let b = 'b';
// let c = 'c';

// const letras = [b, c, a]; // → Obrigatorio o uso do ;

// [a, b, c] = letras // desestruturação

// console.log(a, b, c);

// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

// const [primeiroNumero, segundoNumero, terceiroNumero,...resto] = numeros;
// // ... → rest operator , spread operator (espalha os valores restantes)
// console.log(primeiroNumero, segundoNumero, terceiroNumero);
// console.log(resto);
console.log('='. repeat(50))
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
            //deternina o valor default
const { nome = 'Não há nenhum nome ', sobrenome, idade, endereco  } = pessoa;
console.log(nome, sobrenome, idade, endereco);

// Neste caso estou modificando o nome das variaveis para n, s, i
console.log('='. repeat(50))

const {nome: n, sobrenome: s, idade: i} = pessoa;
console.log(n, s, i);

console.log('='. repeat(50))

// Para acessar o valor de rua e numero, pelo fato de ser um objeto dentro de outro objeto
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

console.log('='. repeat(50))

// 
const {nome:nome2, ...resto} = pessoa;
console.log(nome2, resto);

console.log('='. repeat(50))













