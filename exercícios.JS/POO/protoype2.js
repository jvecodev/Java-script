// newobj
// só de criar um obj com o new, ele já cria um prototype
// protorype se baseia em cadeias de prototipos


const objA = new Object();
objA.greet = function() {
    console.log("Hello from objA");
  };
// const objA = {
//     greet: function() {
//       console.log("Hello from objA");
//     }
//   };

const objB = new Object();
objB.sayGoodbye = function() {
    console.log("Goodbye from objB");
  };
  
  const objC = {};
  

  Object.setPrototypeOf(objB, objA);
  Object.setPrototypeOf(objC, objB);
  
// mesmo chamando o objeto C eu consigo acessar o greet e o sayGoodbye
  objC.greet(); 
  objC.sayGoodbye(); 


