function funcao(){
    console.log(arguments); //→ objeto 
}

funcao(1,2,3,4,5,6,7,8,9,10); //→ Arguments(10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ele mostra jutamente com a devida posição

//exemplo

function Somar(){
    let total = 0;
    for(let indice of arguments){
        total += indice;
    }
    console.log(total);
}

Somar(1,2,3,4,5,6,7,8,9,10); //→ 55


//tratando funcao como dados

const souUmDado = function(){
    console.log('='.repeat(70));
    console.log('Sou um dado');
    console.log('Apareço no terminal sem ser chamado por meio de console.log()');
};
souUmDado(); //→ Sou um dado

arrowFunction = () => {
    console.log('='.repeat(70));
    console.log('Sou uma arrow function');
    console.log('Apareço no terminal sem ser chamado por meio de console.log()');
}