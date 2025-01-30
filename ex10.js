const prompt = require('prompt-sync')();

var n1 = Number(prompt("Digite N1  "));
var n2 = Number(prompt("Digite N2  ")); 
var resultado = 0;


while (true){
    var menu = prompt("Digite a opção: 1 - Multiplicacao / 2 - Divisao / 3 - Soma / 4 - Subtração ");
    if (menu == "1"){
        resultado = n1 * n2;        
        break;
    }else if(menu =="2"){
        resultado = n1 / n2;
        break;            
    }else if(menu =="3"){
        resultado = n1 + n2;
        break;            
    }else if(menu =="4"){
        resultado = n1 - n2;
        break;
    }else{
        console.log("opção invalida");
    }
}
console.log("resultado "+resultado);