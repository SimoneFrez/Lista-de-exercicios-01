const prompt = require('prompt-sync')();

let nomes = []; 
let idades = [];
for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    let idade = parseInt(prompt(`Digite a idade de ${nome}: `));
    nomes.push(nome);
    idades.push(idade);
}

console.log("Pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
}