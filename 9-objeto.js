// const ppessoa = {
//   nome: "João",
//   idade: 30,
//   trabalha: true,
//   altura: 1.7,

// //   apresentando() {
// //     console.log(`Olá meu nome é ${ppessoa.nome} e tenho ${ppessoa.idade}`);
// //   },
// // };

// // //acessar o valor da propriedade em um objeto

// // console.log(ppessoa.altura);
// // console.log(ppessoa.nome);

// // //criando nova oportunidade
// // ppessoa.cargo = "Empresário";

// // //editando propriedade
// // ppessoa.idade = 31;

// // //excluindo propriedade
// // delete ppessoa.trabalha;

// // pessoa.apresentacao();

// const pessoa2 = {
//   nome: "Maria",
//   idade: 28,
//   trabalha: true,
//   altura: 1.5,

//   apresentacaoo() {
//     console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade}`);
//   },
//   fazendoAniversario() {
//     this.idade++;
//   },
// };

// //exercicio caixa eletronico

// const caixaEletronico = {
//   saldo: 1000,

//   depositar(valor) {
//     this.saldo = this.saldo + valor;
//     // return this.saldo
//     return `Valor depositado:R$${valor},00 | Novo saldo: R$${this.saldo},00 `;
//   },
//   sacar(valor) {
//     // this.saldo = this.saldo - valor;
//     // return this.saldo;
//     if (valor > this.saldo){
//       return "Saldo insuficiente";
//      } else {
//       this.saldo = this.saldo - valor;
//     return `Valor sacado:R$${valor},00 | Novo saldo: R$${this.saldo},00`;
//   }
// };

//   mostrarSaldo() {
//     // return this.saldo;
//     return `Seu saldo é : R$${this.saldo},00 `;
//   },
// };

// console.log(caixaEletronico.depositar(500));
// console.log(caixaEletronico.sacar(200);
// console.log(caixaEletronico.mostrarSaldo());
// console.log(caixaEletronico.depositar(1500));

// class ContaBancaria {
//   constructor(cliente, cpf, saldo, tipo, agencia, conta) {
//     this.cliente = cliente;
//     this.cpf = cpf;
//     this.saldo = saldo;
//     this.tipo = tipo;
//     this.agencia = agencia;
//     this.conta = conta;
//   }

//   sacar(valor) {
//     if (valor > this.saldo) {
//       return "Saldo insuficiente";
//     }
//     this.saldo -= valor;
//     return `Valor sacado: R$${valor},00 | Novo saldo: R$${this.saldo},00`;
//   }

//   depositar(valor) {
//     this.saldo += valor;
//     return `Valor depositado: R$${valor},00 | Novo saldo: R$${this.saldo},00`;
//   }
// }

// const conta1 = new ContaBancaria(
//   "Carlos",
//   "4691381961.33",
//   1000,
//   "Conta Corrente",
//   "8929",
//   "3421"
// );

// console.log(conta1);

//crie uma class Carro
// class Carro {
//   constructor(modelo, marca, estaLigado, km) {
//     this.modelo = modelo;
//     this.marca = marca;
//     this.estaLigado = estaLigado;
//     this.km = km;
//   }

//   ligar() {
//     // Em JS, o padrão para métodos é camelCase (letra minúscula no início)
//     if (this.estaLigado) {
//       return "O carro já está ligado";
//     } else {
//       this.estaLigado = true;
//       return "O carro ligou!";
//     }
//   }

//   dirigir(kmRodado) {
//     if (!this.estaLigado) {
//       return "Não é possível dirigir: o carro está desligado.";
//     }
//     this.km += kmRodado;
//     return `Você dirigiu ${kmRodado}km. Odômetro atual: ${this.km}km`;
//   }
// }

// const Corola = new Carro("Corola", "Toyota", false, 45000);

// console.log(Corola);

//Caixa tem o saldo... venda(produto, quant)
