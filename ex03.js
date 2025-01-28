const prompt = require("prompt-sync")();

var nota2 = prompt("Digite quantas notas de 2 reais você tem: ");
var nota5 = prompt("Digite quantas notas de 5 reais você tem: ");
var nota10 = prompt("Digite quantas notas de 10 reais você tem: ");
var nota20 = prompt("Digite quantas notas de 20 reais você tem: ");
var nota50 = prompt("Digite quantas notas de 50 reais você tem: ");
var nota100 = prompt("Digite quantas notas de 100 reais você tem: ");
var nota200 = prompt("Digite quantas notas de 200 reais você tem: ");

var valor2 = nota2 * 2;
var valor5 = nota5 * 5;
var valor10 = nota10 * 10;
var valor20 = nota20 * 20;
var valor50 = nota50 * 50;
var valor100 = nota100 * 100;
var valor200 = nota200 * 200;

var soma = valor2 + valor5 + valor10 + valor20 + valor50 + valor100 + valor200;

console.log("Você tem",soma,"reais ao todo!");

