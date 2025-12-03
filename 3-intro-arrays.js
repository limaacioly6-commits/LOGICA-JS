//Assuntos que já aprendemos:
// tipos de dados primitivo - string, number, booleano, undefined, null
// variações da string - aspas duplas, aspas simples, crase (template string)
// criacao de variaveis - var, jet, const
// diferença do let e const
// reatribuição de valores na variavel
//operacores de comparacao
//operadores lógico (e, ou, inverso)
//propriedade typeof

//assunto: introdução a arrays (listas)

const frutas = ("laranja", "morango", "manga", "uva");

console.log(frutas);

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[0]);
console.log(frutas[4-2]);

console.log(frutas[0] === "banana")

const objeto = "dindin" || "geladinho";

const resultado = objeto === "chupchup";

console.log(resultado);

//substituir o valor no array
frutas [2] = "banana";

console.log(frutas);

frutas[4] = "manga";
console.log(frutas);

frutas[6] ="fruta do conde";
console.log(frutas);

console.log(frutas[5]);

//quantidade de itens de um array

console.log(frutas.length);
console.log(frutas[frutas.length-1]);

//


