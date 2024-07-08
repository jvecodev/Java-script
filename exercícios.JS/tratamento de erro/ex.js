// function Soma (x,y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         throw ('x e y precisam ser números');
//     }
//     return x + y;
// }
//                                                                                 //→ Neste caso o throw não será executado, pelo fato  de existir no catch um console.log que irá imprimir a mensagem de erro, e o programa não irá parar de executar.
                                                                                
// try{
//     console.log(Soma(1,2)); 
//     console.log(Soma('1',2));
// }
// catch(error){
//     console.log('Algum erro ocorreu');
// }


//Checagem de data 
const data = new Date();

function getNomeDia(numeroDia){
    const dias = [
        'Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'
    ];
    return dias[numeroDia];
}

function criarData(){
    const dia = data.getDay();
    console.log(getNomeDia(dia));
}

criarData();