const prompt = require('prompt-sync')();

let opcao = prompt("Digite de 1 a 3 para escolher uma opção: ");

switch (opcao) {
    case "1":
        console.log("Opção 1 selecionada.");
        break;
    case "2":
        console.log("Opção 2 selecionada.");
        break;  
    case "3":
        console.log("Opção 3 selecionada.");
        break;
    default:
        console.log("Opção inválida.");
}