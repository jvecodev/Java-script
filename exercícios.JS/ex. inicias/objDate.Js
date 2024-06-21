// const Data = new Date();           //→ Em casos da falta de parametro indicara o Horario e data atual do SO
// console.log ('Sem parametro  ', Data.toString());    //→  O próprio sistema indentificou que trata-se de uma quarte feira, mesmo ocorrendo a tres anos


// //dataString
// const Data2 = new Date('2021-09-01 12:00:00');
// console.log ( 'Com dataString ', Data2.toString());  //→  O próprio sistema indentificou que trata-se de uma quarte feira, mesmo ocorrendo a tres anos 

// const Data3 = new Date(0);
// console.log ('Três horas antes do Marco Zero ', Data3.toString());  //→  Neste caso ira imprimir o Marco Zero do sistema, que é 01/01/1970 ou UTC, Na realidade faltando 3 horas para o Marco Zero

// // Acrecentando Tres horas em milissegundos

// const tresHoras = 60 * 60 * 3 * 1000;
// const Data4 = new Date(0 + tresHoras); 
// console.log ('Marco Zero ', Data4.toString());  //→  Neste caso ira imprimir o Marco Zero do sistema, que é 01/01/1970 ou UTC

// console.log('='.repeat(100)) //→  Assim que multiplico string, o JS entende que é para repetir a string
// //Outra maneira
//                             //Abril, pois a contagem inicia-se no 0
// const Data5 = new Date(2021, 3, 20, 15, 14, 27, 999); //→  Ano, Mês, Dia, Hora, Minuto, Segundo, Milissegundo, se ultrapassar 999 ms passará para o proximo minuto 
// console.log ('Apenas valores numéricos ', Data5.toString());  
// console.log ('Assim obtenho o horario em Milissegundos ', Date.now());  

// console.log('Dia ', Data5.getDate());  //→ 20
// console.log('Mês ', Data5.getMonth());  //→ 3
// console.log('Ano ', Data5.getFullYear());  //→ 2021
// console.log('Hora ', Data5.getHours());  //→ 15                     → Utilizo para imprimir dados nixados em um horario
// console.log('Minuto ', Data5.getMinutes());  //→ 14
// console.log('Segundo ', Data5.getSeconds());  //→ 27
// console.log('Dia da semana ', Data5.getDay());  //→ 27

// console.log('Milissegundo ', Data5.getMilliseconds());  //→ 999

// const Data6 = new Date(1718736695738); //→ conectado com o Data5
// console.log ('Utilizando o parametro milissegundo', Data6.toString());  //→  Thu Dec 07 2024 15:58:15 GMT-0200 (Horário de Verão de Brasília)  →  Thu Dec 07 2024 15:58:15 GMT-0200 (Horário de Verão de Brasília)

const data = new Date()
console.log(data.getDate()) // Dia do mês em numero
console.log(data.getDay())  // Dia da semana em numero
console.log(data.getMonth())
console.log(data.getFullYear())








