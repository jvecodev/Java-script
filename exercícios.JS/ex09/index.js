const numero = Number(prompt('Digite um número:'));
const numeroDigitado = document.getElementById('numerojs');
const texto = document.getElementById('textojs');

//Quando eu quero unir um texto com o HTMl preciso utilizar o += para concatenar
numeroDigitado.innerHTML = numero;

texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>O texto não é número? ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTMl += `<p>Com três casas decimais: ${numero.toFixed(3)}.</p>`;