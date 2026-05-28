
function criarMatrizAleatoria(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 21) - 10; 
        }
    }
    return matriz;
}

function contarNegativosPorLinha(matriz) {
    let vetorC = [];
    for (let i = 0; i < matriz.length; i++) {
        let contadorNegativos = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                contadorNegativos++;
            }
        }
        vetorC[i] = contadorNegativos;
    }
    return vetorC;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

const linhas = 6;
const colunas = 8;
const matrizM = criarMatrizAleatoria(linhas, colunas);
console.log("Matriz M:");
imprimirMatriz(matrizM);

const vetorC = contarNegativosPorLinha(matrizM);
console.log("Vetor C (quantidade de elementos negativos por linha):");
console.log(vetorC.join(' '));

