function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    let situacao;
    if (imc < 20) {
        situacao = "Abaixo do Peso";
    } else if (imc >= 20 && imc < 25) {
        situacao = "Normal";
    } else if (imc >= 25 && imc < 30) {
        situacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        situacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        situacao = "Obesidade grau II";
    } else {
        situacao = "Obesidade grau III";
    }

    return {
        imc: imc.toFixed(2),
        situacao: situacao
    };
}

let peso = 70;
let altura = 1.75;

let resultado = calcularIMC(peso, altura);
console.log("IMC:", resultado.imc);
console.log("Situação:", resultado.situacao);
