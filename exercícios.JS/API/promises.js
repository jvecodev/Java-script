
function esperaAi(msg, tempo){
    
    //Estamos chamando o construtor da promise
    // Precisamos resolver ou rejeitar esta promessa 
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string'){
            reject(' Valor não identificado')
        }
        setTimeout(() => {
        // recebe um parâmetro unico
        resolve(msg);
    },tempo);
});
    
}

function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

esperaAi('Conexao com o BD',aleatorio(1, 3000))
    .then(resposta => {
        console.log(resposta)
        // aqui eu retornei uma promise 
        return esperaAi('Buscando BD', aleatorio(1,3000))
    }).then(resposta => {
        console.log(resposta)
        return esperaAi(333333, aleatorio(1,3000))
    }).then(resposta =>{
        console.log(resposta)
        
    }).then(() => {
        console.log('Exibe dados na tela')
    }) 
    .catch(e => {
        console.log('ERRO' + e)
    });

console.log('Isso será exibido antes de qualquer outro codigo, pois o JS não espera para executar nada, ele executa antes das promessas')