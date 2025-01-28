const prompt = require("prompt-sync")();

console.log("Ola, vamos converter o seu saldo de Dolares para Real?")

var cotaDolar = Number(prompt("Digite a cotacao atual do Dolar: "));
var dolar = Number(prompt("Agora informe o valor que voce possui em Dolares(US$): "));

var real = dolar * cotaDolar;

console.log("Convertendo os",dolar,"US$ para real brasileiro, voce tem: R$",real);