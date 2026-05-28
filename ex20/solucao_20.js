function contarStrings(array) {
    const resultado = {};
    for (const item of array) {
        if (resultado[item]) {
            resultado[item]++;
        } else {
            resultado[item] = 1;
        }
    }
    return resultado;
}
const arrayDeStrings = ['Lua', 'Sol', 'Lua', 'Terra', 'Sol', 'Lua'];
const contagem = contarStrings(arrayDeStrings);
console.log(contagem);


