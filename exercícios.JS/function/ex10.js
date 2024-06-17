// Como em Python, cada função serve para uma funcionalidade apenas , não sendo boas praticas encher a função de if e else

function somar (a = 0, b = 0, c = 0) {
    const resultado = a + b + c
    return `Soma dos resultado igual a ${resultado}`
}

console.log(somar(1, 2, 3)) // 6

//Função dentro de uma variavel

const raiz = function (n) {
    return Math.sqrt(n)              //→ Isso é uma função anônima
}
console. log (raiz(9)) // 3

//Função simplificada, pode ser usada em uma linha

const raiz2 = n => Math.sqrt(n)      //→ Isso é uma função arrow
console. log (raiz2(9)) // 3         //→ Posso eliminar parentese, chaves e return
