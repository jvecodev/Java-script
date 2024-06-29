//Seleciono a div container/ Div principal
const container = document.querySelector('.container');
//Crio a tag p
const criarP = document.createElement('p');
//Crio a tag div
const criarDiv = document.createElement('div');
//Seleciono todos os parágrafos
const paragrafo = document.querySelectorAll('p');

//Obtendo a configuração do background/DOM>BODY
const obterBackground = getComputedStyle(document.body)

//Obtenho a cor do background
const corBackground = obterBackground.backgroundColor;

//Adiciono p criado dentro da div criada
criarDiv.appendChild(criarP);

//Programa principal 
for (let i in criarDiv){
    criarP.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed alias velit commodi quasi, est maxime accusamus possimus aut rem recusandae libero laborum at incidunt voluptatum veniam quaerat perferendis fugiat sapiente.`;

    // criarDiv.style.backgroundColor = corBackground;
    criarP.style.backgroundColor = corBackground;  
    criarP.style.color = 'white';
    criarP.style.padding = '10px';
    criarP.style.borderRadius = '10px';
    //Adiciono a div criada dentro da div container
    container.appendChild(criarDiv);
}

