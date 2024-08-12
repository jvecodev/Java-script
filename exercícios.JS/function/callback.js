function calcular (a, b, cb){
    return cb(a,b);

}; 

function somar(a,b){
    return a + b;
}

//funcao de callback é uma funcao que recebe como parametro outra funcao e retorna ela em algum momento

console.log(calcular(10,20, somar))