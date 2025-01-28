const prompt = require("prompt-sync")();

var nota1 = prompt("Digite sua primeira nota: ");
var nota2 = prompt("Digite sua segunda nota: ");
var nota3 = prompt("Digite sua terceira nota: ");

var peso1 = 1;
var peso2 = 2;
var peso3 = 3;

var media1 = nota1 * peso1;
var media2 = nota2 * peso2;
var media3 = nota3 * peso3;

var mediaPeso = (media1 + media2 + media3) / (peso1 + peso2 + peso3);

console.log("A media ponderada de suas notas e de:",mediaPeso);

