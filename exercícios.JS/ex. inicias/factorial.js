
//process.stdout.write faz com que o texto seja impresso na mesma linha;

function calcularFatorial(numero) {
    numero = parseInt(numero);
    let fatorial = 1;

    for (let indice = numero; indice > 0; indice--) {
        process.stdout.write(`${indice}`);

        if (indice > 1) {
            process.stdout.write(' x ');
        } else {
            process.stdout.write(' = ');
        }

        fatorial *= indice;
    }
    return fatorial;
}

const valor = 5;
console.log(`O fatorial de ${valor} é ${calcularFatorial(valor)}`);
