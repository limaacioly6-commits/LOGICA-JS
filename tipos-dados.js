//tipo texto - string
// "Isso é um texto";
// "Acioly";
// " O tenis nike é composto...";
// "132";
// 'Isso também é um "texto" mesmo com aspas simples'

// `Usar a crase o JS entende como string`


//tipo number 
100 // inteiros - int
25.35 // decimais - float


// tipo booleano - boolean - true / false
true
false

// tipo indefinido - undefined
undefined

// tipo nulo - null
null

var meuSobrenome = "Silva";  // não usamos mais
let caraDaCamisaVinho = "Rodrigo"; //usamos
const altura = 1.9;

// padrão de escrita chamado CamelCase

console.log(caraDaCamisaVinho);

caraDaCamisaVinho = "Anderson";


console.log(caraDaCamisaVinho);



let temCarro = true;

let isOpen = false;

let profissao = undefined;

console.log(profissao);
//console.log(meuNulo);


// crie 3 variáveis da sua escolha com "let" e 3 variáveis com "const".

// depois tente alterar as variaveis com let... e apresente todos os valores no console




let dirigeCarro = true;

let cantaMusica = "sim"

let falaAlto = "nao"


const muito = "alto"

const excelente = "afinado"

const demais = "incomoda"


dirigeCarro = false;

cantaMusica = "nao";

falaAlto = "sim";

console.log(dirigeCarro);
console.log(cantaMusica);
console.log(falaAlto);

// operações matemáticas

let numero1 = 20;
let numero2 = 10;

let soma = numero1 + numero2;

console.log(soma);

soma = 50

numero2 = 5;

console.log(soma);

let resultSubtracao = soma - numero2 

console.log(resultSubtracao);

let result3 = 30 * 3;

console.log(result3);


let result4 = 50 / 10;

console.log(result4);

// mod - resto da divisao

let result5 = 10 % 3

console.log(result5);

// verificando no console os tipos de dados - typeof

console.log(typeof caraDaCamisaVinho);
console.log(typeof altura);
console.log(typeof undefined);


// faça as quatro operações matemáticas com dois números de sua escolha e apresente os resultados no console. 
// Depois verifique os tipos de dados e cada resultado utilizando o typeof:



let numero5 = 40;
let numero6 = 20;

let somaa = numero5 + numero6;

somaa = 60;

console.log(soma);

let resultSubtracaoo = soma - numero5;

console.log(resultSubtracaoo);

let result2 = 60 * 5;

console.log(result2);

let result6 = 60 / 2;
console.log(result6);

let result7 = 15 & 8
console.log(result7);


// template string e concatenação

const nome1 = "Rodrigo"
const nome2 = "Anderson"
const nome3 = "Medeiros"
const nome4 = "Bezerra"

const nomeComplleto = nome1 + nome2 + nome3 + nome4;
const nomeCompleto2 = nome1 + "" + nome2 + "" + nome3 + "" + nome4;

const nomeCompleto3 = Olá eu sou `${nome1} ${nome2} ${nome3} ${nome4}`;
console.log(nomeCompleto3);

//crie uma varável, coloque dentro de uma variável usando template string
//e mostre o resultado no console

let MyCar = "rover"

let frase = `Eu tenho um ${MyCar}`;

console.log(frase);

