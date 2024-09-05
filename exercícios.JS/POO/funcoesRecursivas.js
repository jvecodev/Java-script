// Uma função que chama ela mesmo

function recursiva(max=0){
    console.log(max);
    if(max >= 10) return; // if resumido;
    max++;
    recursiva(max);
    return; // opcional, pois a função já retorna undefined
}
const valor = recursiva(0);
console.log(valor);
