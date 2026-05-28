const prompt = require('prompt-sync')();

let matriculas = [];
let nomes = [];
let salariosBrutos = [];

for (let i = 0; i < 80; i++) {
    let matricula = prompt(`Digite a matrícula do funcionário ${i + 1}: `);
    let nome = prompt(`Digite o nome do funcionário ${i + 1}: `);
    let salarioBruto = parseFloat(prompt(`Digite o salário bruto do funcionário ${i + 1}: `));
    matriculas.push(matricula);
    nomes.push(nome);
    salariosBrutos.push(salarioBruto);
}

console.log("Contracheque dos funcionários:");
for (let i = 0; i < 80; i++) {
    let deducaoINSS = salariosBrutos[i] * 0.12;
    let salarioLiquido = salariosBrutos[i] - deducaoINSS;
    console.log(`Matrícula: ${matriculas[i]}`);
    console.log(`Nome: ${nomes[i]}`);
    console.log(`Salário bruto: R$ ${salariosBrutos[i].toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
    console.log('-----------------------------');
}   


