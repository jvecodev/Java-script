// function Car(make, model, year) {
//     return {
//       make: make,
//       model: model,
//       year: year,
//       getDetails: function() {
//         return `${this.year} ${this.make} ${this.model}`;
//       }
//     };
//   }
  
//   const myCar = Car('Toyota', 'Corolla', 2020);
//   console.log(myCar.getDetails()); 


  // Neste exemplo, a função Car atua como uma fábrica de objetos Car. Cada vez que você chama Car(), um novo objeto com as propriedades e métodos especificados é retornado.

  // É um conceito que se adeque a POO, mas sem utilizar a sintaxe new e sem a necessidade de definir um construtor.


  // Exemplos melhores

  // factorysFunctions

  // primeiramente com uma varaivel pai, e dentro dele os metodos filhos exemplos:
  // Exemplo de metodos acoplados que poderemos usar com todos os proximos objetos criados 
// exemplo com Prototype
// function criarPessoaObjeto(nome,sobrenome){

//   const pessoaProtoype = {
//       falar () {
//         console.log(`${this.nome} esta falando`)
//       },

//       comer(){
//         console.log(`${this.nome} esta comendo`)
//       },

//       beber(){
//         console.log(`${this.nome} esta bebendo`)
//       },
//     }
//   return Object.create(pessoaProtoype, {
//     nome : { value:nome},
//     sobrenome : { value:sobrenome}
//   })

// }

// // aqui eu tenho um metodo que cria um objeto e que basicamente seu retorno tem pararmetros, que um "Construtor" 
// // com outro formato mas com o mesmo intuito
// // o Objetc é um método do _PROTO_, relacionado ao _Proto_

// const pessoa1 = criarPessoaObjeto("Joao", "Vitor")
// pessoa1.falar();
// pessoa1.comer();
// pessoa1.beber();


// formato descompactado, temos os metodos saparados

const falar  = {
  falar () {
    console.log(`${this.nome} esta falando`)
  }
}

const comer = {
  comer(){
    console.log(`${this.nome} esta comendo`)
  },
}

const beber = {
  beber(){
    console.log(`${this.nome} esta bebendo`)
  }
}

// a variavel em que nos acoplamos os metodos acima no exemplo anterior, apaneas ira referencia-los

const pessoaProtoype = {...beber, ...comer,...falar} // desta forma

// mas mesmo assim temos o metodo para criar o objero 

function criarPessoaObjeto(nome, sobrenome){
  return Object.create(pessoaProtoype,{
    nome : {value:nome},
    sobrenome : {value:sobrenome}
  })
}

const pessoa2 = criarPessoaObjeto("Julia","Poderoso")
pessoa2.beber()






  