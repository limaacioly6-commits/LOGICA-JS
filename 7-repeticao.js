// //for (let index = 0; index < array.length; index++) {
// // const element = array[index];

// //}

// //for (let i = 1; i <= 5; i = i + 1) {
// //console.log(`número:${i}´);
// //}

// function tabuada(numero) {
//   for (let n = 0; n <= 9; n++) {
//     console.log(`${numero} x ${n} = ${numero * n}`);
//   }
// }

// tabuada(7);

// //Iterando sobre arrays
// const cestaDeFruta = ["banana", "uva", "morango", "abacaxi"];

// // console.log(cestaDeFruta(0));
// // console.log(cestaDeFruta(1));
// // console.log(cestaDeFruta(2));
// // console.log(cestaDeFruta(3));

// // for (let n = 0; n <= cestaDeFruta.length - 1; n++) {
// //   console.log(cestaDeFruta[n]);
// // }

// //substitua uva por manga iterando sobre o array utilizando o for
// for (let n = 0; n <= cestaDeFruta.length; n++) {
//   if (cestaDeFruta[n] === "uva") {
//     cestaDeFruta[n] = "manga";
//   }
// }
// console.log(cestaDeFruta);

const estoque = [
  {
    marca: "Nike",
    preco: 300.0,
    quantidade: 30,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Adidas",
    preco: 450.0,
    quantidade: 20,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Puma",
    preco: 550.0,
    quantidade: 60,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Asics",
    preco: 299.0,
    quantidade: 70,
    tamanho: [37, 38, 39, 40],
  },
];

//1- Ocorreu um erro no estoque e a quantidade de todos os tenis diminuiu em 10 tênis(reduza 10 unidades de cada tênis)

//2- O tênis Nike teve reajuste de preço para 400.00

//3- O Asics recebeu uma nova numeração(42)

//utilie o for para ajustar esses dados
for (let i = 0; i < estoque.length; i++) {
  // Reduz 10 unidades de cada tênis
  estoque[i].quantidade -= 10;
  // Reajusta preço do Nike
  if (estoque[i].marca === "Nike") {
    estoque[i].preco = 400.0;
  }
  // Adiciona numeração 42 ao Asics
  if (estoque[i].marca === "Asics") {
    estoque[i].tamanho[estoque.length] = 42;
    // estoque[i].tamanho.push(42);
  }
}

console.log(estoque);
