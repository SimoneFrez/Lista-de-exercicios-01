
function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = { nome: 'Alice', idade: 25, cidade: 'São Paulo' };
const obj2 = { idade: 30, email: 'simone@example.com' };

const objetoCombinado = combinarObjetos(obj1, obj2);
console.log(objetoCombinado);

