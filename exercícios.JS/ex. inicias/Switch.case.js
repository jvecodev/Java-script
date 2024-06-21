function Agenda(dias){
    switch(dias){
        case 'segunda':
            return 'Hoje é dia de estudar Js e Python';
        case 'terça':
            return 'Hoje é dia de estudar HTML e CSS';
        case 'quarta':
            return 'Hoje é dia de estudar Java e PHP';
        case 'quinta':
            return 'Hoje é dia de estudar C# e Ruby';
        case 'sexta':
            return 'Hoje é dia de estudar React e Angular';
        case 'sábado':
            return 'Hoje é dia de descansar';
        case 'domingo':
            return 'Hoje é dia de descansar, porque o homem não é de ferro';
        default:
            return 'Dia inválido';
    
}}

let data = 'segunda';
let dia = Agenda(data);
console.log(dia);

