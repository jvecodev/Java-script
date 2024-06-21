function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;

}

function formataData(data) {
    var dia = zeroEsquerda(data.getDate());
    var mes = zeroEsquerda(data.getMonth() + 1);
    var ano = zeroEsquerda(data.getFullYear());
    return dia + '/' + mes + '/' + ano;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil); 