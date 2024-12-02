//IIFE -> Immediately Invoked Function Expression
//Imagine que você tem um código que você quer que seja executado imediatamente, sem precisar chamar a função.
//Você pode usar uma IIFE para fazer isso.
// Sem tocar o escopo global
//Desta forma eu protejo meu codigo de ser acessado por outros scripts
//Aqui está um exemplo de uma IIFE:
//Faço isso para substituir a declaração de uma função no final de um codigo por exemplo

(function(){
    console.log('Será executado na hora!')
    console.log('-------------------')
    console.log('Foge do escopo mais abrangente!')
    console.log('-------------------')

    //Não tenho conflito com o escopo blobal 
    //ex:
    const nome = 'Lucas'
    console.log(`Variaveis dentro do escopo da função IIFE: ${nome}`)	

}())

const nome = 'Qualquer coisa'
console.log('-------------------')
console.log(`Variaveis fora do escopo da função IIFE: ${nome}`)
