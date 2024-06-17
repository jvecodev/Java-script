/* 
Operadores de Comparação em JS
> maior
< menor
>= maior ou igual
<= menor ou igual
== igual
=== igual e do mesmo tipo  → recomendado
!= diferente
!== diferente, inclusive do tipo  → recomendado

*/
/*
const num1 = 10;
const num2 = '10';
const comp = num1 === num2;    // false  Pois isso analisa o tipos primitivo e o valor
console.log(comp);
*/

const num1 = 10; // number
const num2 = '10'; // string
const comp = num1 == num2;    // true  Pois isso analisa o valor Não é o recomendado

/* Operadorres lógicos
&& and (e)
|| or (ou)
! not (não)
*/