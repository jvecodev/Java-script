let matriz2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Iterar sobre a matriz e exibir no console
for (let i = 0; i < matriz2D.length; i++) {
    let linha = '';
    for (let j = 0; j < matriz2D[i].length; j++) {
        linha += matriz2D[i][j] + ' ';
    }
    console.log(linha);
}