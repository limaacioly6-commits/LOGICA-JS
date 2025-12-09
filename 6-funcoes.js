const frase1 = "Olá meu nome é Acioly Lima";
const frase2 = "Olá meu nome é Leandro Mota";
const frase3 = "Olá meu nome é Leao Acioly";
//Função em JavaScript — definição curta

// Uma função é um bloco reutilizável de código que recebe zero ou mais entradas (parâmetros), executa operações e opcionalmente devolve um valor.
// Funções encapsulam lógica, permitem reutilização e separação de responsabilidades.

// function saudacao(nome, sobrenome) {
//   console.log("Olá! meu nome é " + nome + " " + sobrenome);
// }

// //executando a função saudacao()

// saudacao();
// saudacao();
// saudacao();
// saudacao();
// saudacao();

//Criar 1 função que multiplica 3 números//
function multiplicacao(numero1, numero2, numero3) {
  console.log(numero1 * numero2 * numero3);
}
multiplicacao(125, 155, 9);

//Voce foi contratdo para criar um programa para uma escola que calcula a média das notas dos alunos. Crie uma função que recebe 2 notas, a função calcula a média do aluno. Mostre no console.

function calculaMedia(nota1, nota2) {
  console.log((nota1 + nota2) / 2);
}
calculaMedia(8, 7);

//"Nota do aluno Fulano: 7,5"
function exibeNotaAluno(nomeAluno, nota1, nota2) {
  console.log("Nota do aluno " + nomeAluno + ": " + (nota1 + nota2) / 2);
}
exibeNotaAluno("Fulano", 8, 7);
exibeNotaAluno("Ciclando", 6, 5);

// Crie a função que recebe 2 medidas de um terreno . A função deve mostrar no console o perímetro do terreno em metros e a área do terreno em m2.
function calculaTerreno(lado1, lado2) {
  const perimetro = 2 * (lado1 + lado2);
  const area = lado1 * lado2;
  console.log("Perímetro do terreno: " + perimetro + " metros");
  console.log("Área do terreno: " + area + " m2");
}
calculaTerreno(10, 20);
