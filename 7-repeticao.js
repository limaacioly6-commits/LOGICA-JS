//for (let index = 0; index < array.length; index++) {
// const element = array[index];

//}

//for (let i = 1; i <= 5; i = i + 1) {
//console.log(`número:${i}´);
//}

function tabuada(numero) {
  for (let n = 0; n <= 9; n++) {
    console.log(`${numero} x ${n} = ${numero * n}`);
  }
}

tabuada(7);

//Iterando sobre arrays
const cestaDeFruta = ["banana", "uva", "morango", "abacaxi"];

console.log(cestaDeFruta(0));
console.log(cestaDeFruta(1));
console.log(cestaDeFruta(2));
console.log(cestaDeFruta(3));

for (let n = 0; n <= cestaDeFruta.length - 1; n++) {
  console.log(cestaDeFruta[n]);
}
