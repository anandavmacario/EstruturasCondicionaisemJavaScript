//Atividade 2 – Nota e Conceito
//Crie uma variável chamada nota e atribua uma nota entre 0 e 10. 
//O programa deverá verificar a nota e exibir o conceito correspondente:
//"Conceito A" se a nota for maior ou igual a 9.
//"Conceito B" se a nota for maior ou igual a 7.
//"Conceito C" se a nota for maior ou igual a 5.
//"Conceito D" se a nota for menor que 5.
//Teste o programa utilizando diferentes notas.

let nota = 4
if (nota < 5) {
    console.log("Conceito D");
} else if (nota >= 5 && nota <= 6) {
    console.log("Conceito C");
} else if (nota >= 7 && nota <= 8) {
    console.log("Conceito B");
} else  {
    console.log("Conceito A")
}