const pessoas = [
    { nome: 'João', idade: 31 },
    { nome: 'Maria', idade: 22 },
    { nome: 'José', idade: 55 },
    { nome: 'Ana', idade: 60 },
    { nome: 'Eduardo', idade: 26 },
    { nome: 'Gabriela', idade: 19 },
]
// Mostra apenas o nome das pessoas
for (let i in pessoas) {
    console.log(pessoas[i].nome)
}
//mostra apenas a idade das pessoas 
for (let i in pessoas) {
    console.log(pessoas[i].idade)
}
// Mostra ambos os dados das pessoas
for (let i in pessoas){
        console.log(pessoas[i])
}
const pessoas2 = {  
    nome: 'João', 
    idade: 31, 
    sobrenome: 'Oliveira'
                 }
//Mostra apenas a chave 
for (let  chave in pessoas2){
    console.log(chave)
}