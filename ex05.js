const prompt = require("prompt-sync")();

var horasTrab = Number(prompt("Digite quantas horas trabalhou neste mes: "));
var horasExtra = Number(prompt("Digite quantas horas extras trabalhou neste mes: "));
//o number precisa ser maiusculo a primeira letra, demorei para descobrir kkkk = Number

const valorNormal = 10.00;
const valorExtra = 15.00;

var salarioBruto = (horasTrab * valorNormal) + (horasExtra * valorExtra);
var salarioLiq = salarioBruto - (salarioBruto * 0.10);

console.log("De acordo com as horas trabalhadas o seu salario liquido e de:",salarioLiq);
console.log("De acordo com as horas trabalhadas o seu salario bruto e de:",salarioBruto);
