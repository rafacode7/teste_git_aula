const prompt = require("prompt-sync")();

console.log("Ola, vamos calcular o seu IMC?")

var peso = Number(prompt("Digite seu peso(kg): "));
var altura = Number(prompt("Digite sua altura(metros): "));

var imc = peso / (altura * altura);

console.log("Seu IMC esta em:",imc);
