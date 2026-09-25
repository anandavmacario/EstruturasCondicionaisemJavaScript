//Desafio – Calculadora de IMC
//Crie um programa que calcule o Índice de Massa Corporal (IMC).
//O programa deverá:Criar uma variável para armazenar o peso.Criar uma variável para armazenar a altura.Calcular o IMC utilizando a fórmula:
//IMC = peso / (altura * altura)Verificar o resultado do IMC.Exibir uma das seguintes mensagens:
//"Abaixo do peso"
//"Peso normal"
//"Sobrepeso"
//"Obeso"

let peso = 67;
let altura = 1.55;
let IMC = peso / (altura * altura);

if (IMC < 18.5) {
    console.log("Abaixo do peso");
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log("Peso normal");
} else if (IMC >= 25.0 && IMC <= 29.9) {
    console.log("Sobrepeso");
} else  {
    console.log("Obeso")
}

