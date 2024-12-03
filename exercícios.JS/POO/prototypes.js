//O prototype é uma propriedade de funções construtoras
//Ele é usado para definir propriedades e métodos que serão herdados por todas as instâncias criadas com esse construtor.
//Quando você cria uma função, ela automaticamente ganha um objeto prototype.
//Esse objeto prototype é compartilhado entre todas as instâncias criadas a partir do construtor.

function Animal(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
  }
  
  //Adicionando um método ao prototype
  Animal.prototype.falar = function() {
    return `${this.nome} ${this.sobrenome} faz algum som.`;
  };
  
  const cachorro = new Animal("Rex", "Soares");
  console.log(cachorro.falar()); 
  
// para identificar melhor, utilizar o devtools 


