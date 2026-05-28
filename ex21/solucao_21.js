function sumarizarVendas(vendas) {
    const resultado = {};
    for (const venda of vendas) {
        const vendedor = venda.vendedor;
        const valor = venda.valor;
        if (resultado[vendedor]) {
            resultado[vendedor] += valor;
        }
        else {
            resultado[vendedor] = valor;
        }
    }
    return resultado;
}

const vendas = [
    { vendedor: 'Alice', valor: 100 },
    { vendedor: 'Bob', valor: 150 },
    { vendedor: 'Alice', valor: 200 },
    { vendedor: 'Bob', valor: 50 },
    { vendedor: 'Charlie', valor: 300 }
];  

const resumoVendas = sumarizarVendas(vendas);
console.log(resumoVendas);

