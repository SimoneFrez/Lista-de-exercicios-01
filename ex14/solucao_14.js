const prompt = require('prompt-sync')();

let salarios = [];
let filhos = [];
let totalPessoas = 0;

while (true) {
    let salario = parseFloat(prompt(`Digite o salário da pessoa (ou -1 para encerrar): `));
    if (salario === -1) {
        break;
    }
    let numFilhos = parseInt(prompt(`Digite o número de filhos da pessoa: `));
    salarios.push(salario);
    filhos.push(numFilhos);
    totalPessoas++;
}

let somaSalarios = salarios.reduce((a, b) => a + b, 0);
let somaFilhos = filhos.reduce((a, b) => a + b, 0);
let mediaSalario = somaSalarios / totalPessoas;
let mediaFilhos = somaFilhos / totalPessoas;
let maiorSalario = Math.max(...salarios);
let percentualAte350 = (salarios.filter(s => s <= 350).length / totalPessoas) * 100;

console.log('-------------------------------------------------------------');
console.log(`Média de salário da população: R$ ${mediaSalario.toFixed(2)}`);
console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`);
console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
console.log(`Percentual de pessoas com salário até R$350,00: ${percentualAte350.toFixed(2)}%`);


