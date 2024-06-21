// const h3 = document.querySelector('.resultado h3');     → Menos performático
// const data = new Date();

// function AgendaDia(dias){
//     let diaSemana;

//     switch(dias){
//         case 0:
//             diaSemana = 'Domingo';
//             return diaSemana;
//         case 1:
//             diaSemana = 'Segunda-feira';
//             return diaSemana;
//         case 2:
//             diaSemana = 'Terça-feira';
//             return diaSemana;
//         case 3:
//             diaSemana = 'Quarta-feira';
//             return diaSemana;
//         case 4:
//             diaSemana = 'Quinta-feira';
//             return diaSemana;
//         case 5:
//             diaSemana = 'Sexta-feira';
//             return diaSemana;
//         case 6:
//             diaSemana = 'Sábado';
//             return diaSemana;

    
// }}

// function AgendaMes(meses){
//     let mesAno;

//     switch(meses){
//         case 0:
//             mesAno = 'Janeiro';
//             return mesAno;
//         case 1:
//             mesAno = 'Fevereiro';
//             return mesAno;
//         case 2:
//             mesAno = 'Março';
//             return mesAno;
//         case 3:
//             mesAno = 'Abril';
//             return mesAno;
//         case 4:
//             mesAno = 'Maio';
//             return mesAno;
//         case 5:
//             mesAno = 'Junho';
//             return mesAno;
//         case 6:
//             mesAno = 'Julho';
//             return mesAno;
//         case 7:
//             mesAno = 'Agosto';
//             return mesAno;
//         case 8:
//             mesAno = 'Setembro';
//             return mesAno;
//         case 9:
//             mesAno = 'Outubro';
//             return mesAno;
//         case 10:
//             mesAno = 'Novembro';
//             return mesAno;
//         case 11:
//             mesAno = 'Dezembro';
//             return mesAno;  
//     }
// }
// function criaData(data){
//     const dia = data.getDate();
//     const mes = data.getMonth();
//     const ano = data.getFullYear();
//     const semana = data.getDay();

//     return `${AgendaDia(semana)}, ${dia} de ${AgendaMes(mes)} de ${ano}`;
// }
// h3.innerHTML = criaData(data);

// Outra maneira   → Mais performático

// const h3 = document.querySelector('.container h3');
// const data = new Date();
// h3.innerHTML = data.toLocaleString('pt-BR' , {dateStyle: 'full' ,timeStyle:'short'});

// Outra maneira  → Mais performático

// const h3 = document.querySelector('.container h3');
// const data = new Date();
// const opcoes = {

//     dateStyle: 'full',
//     timeStyle: 'short'
// }

// h3.innerHTML = data.toLocaleString('pt-BR', opcoes);

// outra maneira, Com listas  → Melhor lógica de programação

const h3 = document.querySelector('.container h3');
const data = new Date();

function getNomeMes(numeroMes){
    const meses = [
        'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
    ];
    return meses[numeroMes];
}   

function getNomeDia(numeroDia){
    const dias = [
        'Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'
    ];
    return dias[numeroDia];
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroDia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());

    return `${getNomeDia(diaSemana)}, ${numeroDia} de ${getNomeMes(mes)} de ${ano} ${hora}:${minuto}`;
}

h3.innerHTML = criaData(data);