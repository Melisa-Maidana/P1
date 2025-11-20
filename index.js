const prompt = require("prompt-sync")();

let numero = prompt("Ingresá tu número favorito: ");
numero = Number(numero);

let doble = numero * 2;

console.log("El doble de tu número favorito es: " + doble);