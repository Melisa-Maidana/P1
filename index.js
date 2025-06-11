const prompt = requier('prompt-sync')();

const numero = Number(prompt('Ingresa tu numero favorito:'));
const doble = numero * 2;
console.log('El doble de tu numero favorito es:', doble);