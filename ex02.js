const prompt = require("prompt-sync")();

var diasDoAno = 365;
var idade = prompt("Digite quantos anos você tem: ");
var diasDeVida = diasDoAno * idade;

console.log("VOCÊ JÁ VIVEU",diasDeVida,"DIAS!!!!");
