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
