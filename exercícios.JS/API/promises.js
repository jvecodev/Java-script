//sintaxe Basica
//Resolve: Usado para retornar algo quando a operacao for bem-sucedida
//Reject: Usado para retornar algo quando a operacao for mal-sucedida
//ambos entram como parametro

const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true; 
    
    if (sucesso) {
      resolve("Operação concluída com sucesso!");
    } else {
      reject("Algo deu errado.");
    }
  });



// acompanhado entao, com o metodo que checam erros 
// "resultado" servira como parametro do metodo then

minhaPromise
    .then((resultado) => {
        console.log ("Sucesso", resultado);
    })
    .catch((e) => {
        console.log ("Erro",e )
    })
    .finnally(() =>  {
        console.log("Fim da execução")
    });


// exemplos com API
fetch('https://api.exemplo.com/dados') //`fetch` retorna uma Promise
.then((response) => response.json()) //converte a resposta em JSON
.then((dados) => {
  console.log("Dados recebidos:", dados);
})
.catch((erro) => {
  console.error("Erro ao buscar dados:", erro);
})
.finally(()=>{
    console.log("Fim da execução")
})
