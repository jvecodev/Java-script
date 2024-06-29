// //Igualzinho ao python

// //determinar o contador para que funcione a loop
// let contador = 0;

// // while(contador < 10){
// //     console.log(contador);      //Loop infinito
// // }

// while(contador <= 10){
//     console.log(contador);     // Loop de 0 a 9
//     contador ++;
// }

// //Exemplo de roleta Russa

// function roletaRussa(min, max){
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }

// const min = 1;
// const max = 6;
// let count = roletaRussa(min, max);



// while(count !== 3){
//     count = roletaRussa(min, max);
//     console.log(count);
// }

function random(min, max){
    let r = Math.random() * (max - min) + min;
    return parseInt(r.toFixed());
    //return Math.floor(r);  // Não use esse comando
}

const min = 1;
const max = 6;
let rand = random(min, max);

while(rand !== 10){
    rand = random(min , max);
    console.log(rand);
}


//DO WHILE checa a condição depois de executar o bloco de código




