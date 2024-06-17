function calcularConta (){
    alert('Olá, seja bem vindo(a) ao nosso site!');
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const numero = form.querySelector('.numero');
        const numero2 = form.querySelector('.numero2');

        pessoas.push({
            nome: nome.value,
            numero: numero.value,
            numero2: numero2.value
        });
        console.log(pessoas)

        resultado.innerHTML += `<p> Nome: ${nome.value}</p>`
        resultado.innerHTML += `<p> Número: ${numero.value}</p>`
        resultado.innerHTML += `<p> Número 2: ${numero2.value}</p>`
        resultado.innerHTML += `<p> Soma: ${Number(numero.value) + Number(numero2.value)}</p>`
    }
    form.addEventListener('submit', recebeEventoForm);
}
calcularConta();