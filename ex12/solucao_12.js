const prompt = require('prompt-sync')();

let altura = [];
let sexo = [];

function calcularPesoIdeal(altura, sexo) {
    if (sexo === 'M') {
        return (72.7 * altura) - 58;
    } else if (sexo === 'F') {
        return (62.1 * altura) - 44.7;
    } else {
        return null; 
    }   
}

for (let i = 0; i < 1; i++) {
    let alt = parseFloat(prompt(`Digite a altura da pessoa (em metros): `));
    let sex = prompt(`Digite o sexo da pessoa (M/F): `).toUpperCase();
    altura.push(alt);
    sexo.push(sex);
}

console.log("Peso ideal para a pessoa:");
for (let i = 0; i < 1; i++) {
    let pesoIdeal = calcularPesoIdeal(altura[i], sexo[i]);
    if (pesoIdeal !== null) {
        console.log(`Altura: ${altura[i]} m, Sexo: ${sexo[i]}, Peso Ideal: ${pesoIdeal.toFixed(2)} kg`);
    } else {
        console.log(`Altura: ${altura[i]} m, Sexo: ${sexo[i]}, Sexo inválido.`);
    }
}


