function primeiraFuncao(comeco){
    function resto ( rest){
        return comeco + ' ' + rest;
    };
    return resto;
};

//Neste caso, essa variavel recebe a função primeiraFuncao, que por sua vez recebe a string 'Olá' e retorna a função resto, que recebe a string 'Mundo!' e retorna a concatenação de 'Olá' e 'Mundo!'.
const olaMundo = primeiraFuncao('Olá');
console.log(olaMundo('Mundo!'));