const dados = {
    nome: 'Simone',
    idade: 37,
    hobbies: ['Viagens', 'Música', 'Animes', 'Séries'],
    notas: [8, 9, 7, 10],
    cidade: 'Rio de Janeiro',
    contatos: {
        email: 'simone@example.com'
    }
};  

function filtrarArrays(obj) {
    const resultado = {};
    for (const chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

const arraysFiltrados = filtrarArrays(dados);
console.log(arraysFiltrados);

