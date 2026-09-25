//Atividade 3 – Dia da Semana
//Crie uma variável chamada dia e atribua um número de 1 a 7.
//O programa deverá exibir o nome do dia correspondente:
//1 → "Domingo"
//2 → "Segunda-feira"
//3 → "Terça-feira"
//4 → "Quarta-feira"
//5 → "Quinta-feira"
//6 → "Sexta-feira"
//7 → "Sábado"
//Caso seja informado um número diferente de 1 a 7, exiba:
//"Dia inválido"
//Teste o programa utilizando diferentes números.

let dia = 8
if (dia == 1) {
    console.log("Domingo");
} else if (dia == 2) {
    console.log("Segunda-Feira");
} else if (dia == 3) {
    console.log("Terça-Feira");
} else if (dia == 4) {
    console.log("Quarta-Feira");
}  else if (dia == 5) {
    console.log("Quinta-Feira");
} else if (dia == 6) {
    console.log("Sexta-Feira"); 
} else if (dia == 7) {
    console.log("Sábado");
} else {
    console.log("Dia inválido")
}