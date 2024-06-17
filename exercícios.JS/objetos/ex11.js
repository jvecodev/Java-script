function meuEscopo() {
    alert('Olá, seja bem vindo(a) ao nosso site!');
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     alert(1);                        → Uma maneira
        
    // }
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const idade = form.querySelector('.idade');
        const sexo = form.querySelector('.sexo');
        const endereço = form.querySelector('.endereço');

        pessoas.push({
            nome: nome.value,
            idade: idade.value,
            sexo: sexo.value,
            endereço: endereço.value
        });
        console.log(pessoas)

        resultado.innerHTML += `<p> Nome: ${nome.value}</p>`
        resultado.innerHTML += `<p> Idade: ${idade.value}</p>`
        resultado.innerHTML += `<p> Sexo: ${sexo.value}</p>`
        resultado.innerHTML += `<p> Endereço: ${endereço.value}</p>`
    }

    form.addEventListener('submit' , recebeEventoForm);
        

}
meuEscopo();