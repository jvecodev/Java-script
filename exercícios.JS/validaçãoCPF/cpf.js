

function validaCPF(cpf) {
    // Remove os caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        alert("CPF inválido");

        return;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        alert("CPF inválido");

        return;
    }

    // Calcula o primeiro dígito verificador
    let somaPrimeiro = 0;
    for (let i = 0; i < 9; i++) {
        somaPrimeiro += parseInt(cpf[i]) * (10 - i);
    }
    let resto = somaPrimeiro % 11;
    let primeiroDigito = (resto < 2) ? 0 : 11 - resto;

    // Calcula o segundo dígito verificador
    let somaSegundo = 0;
    for (let i = 0; i < 10; i++) {
        somaSegundo += parseInt(cpf[i]) * (11 - i);
    }
    let resto2 = somaSegundo % 11;
    let segundoDigito = (resto2 < 2) ? 0 : 11 - resto2;

    // Verifica se os dígitos calculados conferem com os dígitos do CPF
    if (parseInt(cpf[9]) === primeiroDigito && parseInt(cpf[10]) === segundoDigito) {
        alert("CPF válido");
    } else {
        alert("CPF inválido");
    }
}

let cpf = prompt("Digite o CPF: ");
validaCPF(cpf);
