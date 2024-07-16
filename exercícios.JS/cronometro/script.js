//cronometro
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.start');
const pausar = document.querySelector('.pause');
const zerar = document.querySelector('.reset');
const continuar = document.querySelector('.continue');

let segundos = 0;
let minutos = 0;
let horas = 0;
let timer;

relogio.innerHTML = '00:00:00';

function criarCronometro(){
    timer = setInterval(function(){
        segundos++;
        if(segundos == 60){
            segundos = 0;
            minutos++;
        }
        if(minutos == 60){
            minutos = 0;
            horas++;
        }
        
        const h2 = document.createElement('h2');
        h2.innerHTML = `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
        relogio.appendChild(h2);
        relogio.innerHTML = h2.innerHTML;

    }, 1000);
}

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    relogio.classList.remove('zerado');
    criarCronometro();
    
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);

    relogio.classList.add('pausado');
    
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.add('zerado');
    relogio.classList.remove('pausado');
    segundos = 0;
    minutos = 0;
    horas = 0;
    

   


});







   