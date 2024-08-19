function Car(make, model, year) {
    return {
      make: make,
      model: model,
      year: year,
      getDetails: function() {
        return `${this.year} ${this.make} ${this.model}`;
      }
    };
  }
  
  const myCar = Car('Toyota', 'Corolla', 2020);
  console.log(myCar.getDetails()); 

  /*
  Neste exemplo, a função Car atua como uma fábrica de objetos Car. Cada vez que você chama Car(), um novo objeto com as propriedades e métodos especificados é retornado.

  É um conceito que se adeque a POO, mas sem utilizar a sintaxe new e sem a necessidade de definir um construtor.
  */



  