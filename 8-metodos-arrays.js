//arrays
const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node", "js"];

console.log(tecnologias[2]);

//Função construtora

const frutas = new Array("banana", "uva", "morango");

console.log(frutas);

console.log(frutas[frutas.length - 1]);

//iterar pela array(PASSEAR PELOS ITENS DO ARRAY)

for (let i = 0; i < tecnologias.length; i++) {
  console.log(tecnologias[i]);
}

//Métodos de arrays

//push() - Adicionar um item no final array.
frutas.push("manga");
frutas.push("abacaxi");

console.log(frutas);

//pop() - Remove o ultimo item do array.

tecnologias.pop("HTML");

//unshift() - Adiciona o item no início do array
tecnologias.unshift("TailwindCSS");
console.log(tecnologias);

//shift() - Remove o item no início do array
tecnologias.shift();
tecnologias.shift();

//splice - Adiciona, remove ou substitui elementos em uma posição específica.

let palavras = [
  ["sim", "nao"],
  ["positivo", "negativo"],
];
console.log(palavras[1][1]);

let letras = ["A", "B", "C", "D", "E"];

//letras.splice(2,1,"X","I","Z",[1,2,3]);
letras.splice(3, 0, "X");

console.log(letras);

//Explicação Plus!!!!
console.log(typeof "alguma coisa");
console.log(typeof "100");
console.log(typeof { nome: "Acioly", idade: 41 });
console.log(typeof [1, 2, 3]);

console.log(letras);

const professor = { nome: "Leandro", idade: 41 };

console.log(professor.idade);

//slice() - Retorna uma cópia da parte do array sem modificar o array original

const carros = ["hilux", "civic", "corolla", "Porshe", "HR-V"];

const doisCarros = carros.slice(2, 4);

console.log(doisCarros);

//Crie um array de objetos(um array de tenis - propriedades livre):
//1 - Adiciona um item no final
//2 - Remove o item no início
//3 - Pega qualquer item no meio desse array e deleta
//4 - Substitui um item no meio e adiciona 2 novos tenis

let tenis_ = [
  ["Nike", "Adidas"],
  ["Osklen", "Mizuno"],
];
console.log(tenis_);

let tenis = [
  ["Nike", "Adidas"],
  ["Osklen", "Mizuno"],
];
console.log(tenis[1][1]);

tenis.push("Reebok");

console.log("Reebok");

tenis.shift();

if (Array.isArray(tenis[1])) {
  tenis[1].splice(0, 1, "Fila", "New Balance", "Olympikus");
}
console.log(tenis);

//Métodos Avançados

//map() - Cria um novo array aplicando uma função em cada elemento.

const meusNumeros = [2, 3, 4, 5, 6, 7];

const numerosDobrados = meusNumeros.map((item) => {
  console.log(item);
  return item * 2;
});

console.log(numerosDobrados);

//Exercicio:
//1 - Triplique apenas os números pares usando map
//2 - Impar numero %2 ! == 0
//3 - Par número %2 === 0
//4 - Verifique é o mesmo que IF

const numerosTriplicados = meusNumeros.map((item) => {
  if (item % 2 === 0) {
    return item * 3;
  } else {
    return item;
  }
});
console.log(numerosTriplicados);
