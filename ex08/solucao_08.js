const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));

if (numero < 0) {   
    console.log("O fatorial não é definido para números negativos.");
} else if (numero === 0 || numero === 1) {
    console.log(`O fatorial de ${numero} é 1.`);
} else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {

        let anterior = fatorial;
        fatorial = fatorial * i;
        console.log(`anterior: ${anterior} * ${i} = ${fatorial}`);
    }  
    console.log('-----------------------------');
    console.log(`O fatorial de ${numero} é ${fatorial}.`);
}
