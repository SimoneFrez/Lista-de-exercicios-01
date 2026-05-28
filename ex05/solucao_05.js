const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Qual o seu peso?"));
let altura = parseFloat(prompt("Qual a sua altura?"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Você está abaixo do peso.");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Você está com o peso normal.");
} else if (imc >= 25 && imc < 30) {
    console.log("Você está com sobrepeso.");
} else {
    console.log("Você está obeso.");
}