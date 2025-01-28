const prompt = require('prompt-sync')();
var n1 = Number(prompt("Digite o valor do cateto oposto:"));
var n2 = Number(prompt("Digite o valor do cateto adjacente:"));

var hip = (n1**2 + n2**2) ** (1/2) 

console.log("A hipotenusa é "+hip);