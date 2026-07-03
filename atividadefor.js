// // Buscar nome dos alunos somente reprovados

// const alunos = [
//   { nome: "Lucas", nota: 7 },
//   { nome: "Carla", nota: 9 },
//   { nome: "Pedro", nota: 5 },
//   { nome: "Ana", nota: 8 },
//   { nome: "Marcos", nota: 6 },
//   { nome: "Beatriz", nota: 10 },
//   { nome: "Rafael", nota: 4 },
//   { nome: "Fernanda", nota: 7 },
//   { nome: "Gustavo", nota: 6 },
//   { nome: "Julia", nota: 9 }
// ];

//  let Aprovados = 0 ;
//   let Reprovados = 0 ;

// for (let index = 0; index < alunos.length; index++) {
//   if (alunos[index].nota < 7)
//   console.log(alunos[index].nome);
 
//   if (alunos[index].nota >=7) {
//     Aprovados++;
//    } else Reprovados++;

//   }
//  console.log(`Quantidade de aprovados: ${Aprovados}`);
//  console.log(`Quantidade de Reprovados: ${Reprovados}`);
 
// Exercício 1

// Crie um for que mostre os números de 1 até 10.

// for (let index = 1; index <=10; index++) {
//   console.log(index);
// }

// Exercício 2

// Mostre apenas os números pares de 1 até 20.

// for (let index = 0; index <=20; index += 2) {
//    console.log(index);
// }

// Exercício 3

// Mostre apenas os números ímpares de 1 até 15.

// for (let index = 1; index <=15; index+=2) {
//    console.log(index);
// }

// Exercício 4

// Dado o array:

// const numeros = [3, 8, 15, 22, 9, 10, 5];

// // Mostre apenas os números maiores que 10.

// for (let index = 0; index < numeros.length; index++) {
//    if (numeros[index] > 10) {
//       console.log(numeros[index]);
//      }
// }

// Exercício 5

// Dado o array:

// const numeros = [12, 7, 18, 5, 20, 3];
// let contagemNumeros = 0 ;
// // Conte quantos números são pares.

// for (let index = 0; index < numeros.length; index++) {
//    if (numeros[index] % 2 === 0) {contagemNumeros++;
// }
// }
// console.log(contagemNumeros);

// Exercício 6

// Some todos os números deste array:

// const numeros = [5, 8, 12, 3, 7];
// let somaNumeros = 0 ; 

// for (let index = 0; index < numeros.length; index++) {
//  somaNumeros += numeros[index];
// }
// console.log(somaNumeros);

// Exercício 7

// Dado:

// const alunos = [
//   { nome: "Lucas", nota: 7 },
//   { nome: "Carla", nota: 9 },
//   { nome: "Pedro", nota: 5 },
//   { nome: "Ana", nota: 8 }
// ];
// let aprovados = 0;
// let reprovados = 0;

// Mostre apenas os nomes dos alunos aprovados (nota maior ou igual a 7).

// for (let index = 0; index < alunos.length; index++) {
//  if(alunos[index].nota >= 7) {console.log(alunos[index].nome);
//  }
// }

// Exercício 8

// Usando o mesmo array, conte quantos alunos foram aprovados e quantos foram reprovados.

// for (let index = 0; index < alunos.length; index++) {
//    if (alunos[index].nota >= 7) {
//       aprovados++
//    } else { 
//       reprovados++
//    }
// }
// console.log(aprovados);
// console.log(reprovados);

// Saída esperada:

// Aprovados: 3
// Reprovados: 1

// Exercício 9

// const alunos = [
//   { nome: "Lucas", nota: 7 },
//   { nome: "Carla", nota: 9 },
//   { nome: "Pedro", nota: 5 },
//   { nome: "Ana", nota: 8 }
// ];

// Mostre o nome e a situação de cada aluno.

// Saída esperada:

// Lucas - Aprovado
// Carla - Aprovada
// Pedro - Reprovado
// Ana - Aprovada

// for (let index = 0; index < alunos.length; index++) {
//   if (alunos[index].nota >=7) {
//    console.log(`${alunos[index].nome} - Aprovado`)
//    } else  {console.log(`${alunos[index].nome} - Reprovado`)}
// }


// Nível 4 – Desafio

// // Exercício 10

// const produtos = [
//   { nome: "Mouse", preco: 80 },
//   { nome: "Teclado", preco: 150 },
//   { nome: "Monitor", preco: 900 },
//   { nome: "Notebook", preco: 3500 },
//   { nome: "Fone", preco: 120 }
// ];
// let quantidadeDeProdutosAcimaDe100 = 0 ;
// let valorTotal = 0 ;
// // Faça um programa que:

// // Mostre apenas os produtos que custam mais de R$ 100.
// // Conte quantos produtos custam mais de R$ 100.
// // Mostre o valor total da soma dos preços de todos os produtos.

// console.log('Produtos que custam mais de R$ 100.00:');
// for (let index = 0; index < produtos.length; index++) {
//    if (produtos[index].preco > 100) {
//       console.log(`${produtos[index].nome}`);
//          }
//   }
// console.log('\nQuantidade de produtos que custam mais de R$ 100:');
// for (let index = 0; index < produtos.length; index++) {
//    if (produtos[index].preco > 100) {
//       quantidadeDeProdutosAcimaDe100++
//    }
// }
// console.log(quantidadeDeProdutosAcimaDe100);

// console.log('\nValor total de todos os produtos:');

// for (let index = 0; index < produtos.length; index++) {
// valorTotal += produtos[index].preco
// }
// console.log(valorTotal);
