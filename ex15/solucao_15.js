function criarMatrizIdentidade(n) {
    let matriz = [];    
    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                matriz[i][j] = 1; 
            } else {
                matriz[i][j] = 0; 
            }
        }
    }
    return matriz;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

const n = 7;
const matrizIdentidade = criarMatrizIdentidade(n);
imprimirMatriz(matrizIdentidade);

