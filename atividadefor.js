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


// let numeros = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10,  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//   31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
//   111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
//   131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
//   151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
//   171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
//   191, 192, 193, 194, 195, 196, 197, 198, 199, 200
// ];

// somaPares = 0 ;

// - Iterando sobre um array e verificando se os números são pares ou ímpares:

// for (let index = 0; index < numeros.length; index++) {
//    if (numeros[index] % 2 === 0) {
//     console.log(numeros[index]);
//     }
// }

// - Encontrando a soma dos números pares em um intervalo:

// for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index] % 2 === 0) { 
//     somaPares = somaPares + numeros[index]
//  }
// }
// console.log(somaPares);

// =========================

// const produtos = [
//     { nome: "Camiseta", preco: 25.00 },
//     { nome: "Calça", preco: 35.00 },
//     { nome: "Boné", preco: 15.00 },
//     { nome: "Jaqueta", preco: 50.00 }
// ];

// contadorLetra = 0 ;
// - Percorrer um array de objetos e mostrar somente os que tem preço maior que 30: 

// for (let index = 0; index < produtos.length; index++) {
//     if (produtos[index].preco > 30) {
//         console.log(produtos[index].nome);
//     }
// }

// - Contar quantas letras 'a' há em uma string:

// for (let index = 0; index < produtos.length; index++) {
//     let nome = produtos[index].nome;

//     for (let i = 0; i < nome.length; i++) {  
//    if (nome[i].toLocaleLowerCase() === 'a') {
//     contadorLetra++;
//    }    
//  }
// }
// console.log(contadorLetra);


// const numeros = [12, 45, 7, 89, 31, 56, 18, 94, 63, 27,-30];
// let maiorNumero=numeros[0];
// let menorNumero=numeros[0];
// let contador=0;
// let contemPalavra = 0;

// - Maior numero de uma lista

// for (let index = 0; index < numeros.length; index++) {
//         if (numeros[index] > maiorNumero) {
//             maiorNumero=numeros[index]
//         }
// }
// console.log(maiorNumero);


// - Encontrar o menor número em uma lista de números

// for (let index = 0; index < numeros.length; index++) {
//         if (numeros[index] < menorNumero) {
//             menorNumero=numeros[index]
//         }
// }
// console.log(menorNumero);

// - Filtrar números negativos em uma lista de números

// for (let index = 0; index < numeros.length; index++) {
//         if (numeros[index] < 0) {
//         contador++
//         }
// }
// console.log(contador);

// let palavra = "djffkgjbfgkbfgladbsghdsbgbfgdbfhb"

// - Verificar se uma string contém uma determinada letra 

// for (let index = 0; index < palavra.length; index++) {
//  if (palavra[index] === 'a') {
//         contemPalavra = 'contém'
// } 
// }
// if (contemPalavra==='contem') {
//     console.log(contemPalavra);

// } else {
//     console.log('nao contém'
//     );
// }

// const numeros = [12, 45, 7, 89, 31, 56, 18, 94, 63, 27,-30];


// - Encontrar múltiplos de 5 em uma lista de números

// for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index] % 5 ===0 ) {
//         console.log(numeros[index]);
               
//     }
// }

// - Calcular e imprimir a média de números em uma lista

// const numeros = [12, 45, 7, 89, 31, 56, 18, 94, 63, 27,-30];
// let somaDeNumeros = 0;

//  for (let index = 0; index < numeros.length; index++) {
//               somaDeNumeros = somaDeNumeros + numeros[index]
//        }
// console.log(somaDeNumeros/numeros.length);

// - Verificar e imprimir números divisíveis por 3 em um intervalo

// const numeros = [12, 45, 7, 89, 31, 56, 18, 94, 63, 27,-30];

// for (let index = 0; index < numeros.length; index++) {
//   if (numeros[index] % 3 === 0) {
//        console.log(numeros[index]);
// }
// }

// - Encontrar e imprimir números pares e ímpares separadamente em uma lista

// const numeros = [12, 45, 7, 89, 31, 56, 18, 94, 63, 27,-30];

// for (let index = 0; index < numeros.length; index++) {
//  if (numeros[index] % 2 === 0 ) {
//   console.log(`Numero ${numeros[index]} é par.`); 
//    }
//   }
//   console.log('\n');
// for (let index = 0; index < numeros.length; index++) {
//  if ((numeros[index]+1)% 2 === 0 ) {
//     console.log(`Numero ${numeros[index]} é impar.`); 
//    }
//   } 
  

//else { console.log(`Numero ${numeros[index]} é impar.`)}
// - Verificar se na frase "PHP morreu" tem alguma letra e.

// Array simples:
// Dado o array const numeros = [5, 12, 8, 20, 7], use um for e if para imprimir apenas os números maiores que 10.

// Array de strings:
// Dado o array const frutas = ["maçã", "banana", "morango", "abacaxi"], use for e if para imprimir apenas as frutas cujo nome tenha mais de 5 letras.

// Array de números:
// Dado const numeros = [1, 2, 3, 4, 5, 6], use for e if para criar um novo array contendo apenas os números pares.

// Objeto simples:
// Dado o objeto const pessoa = { nome: "Ana", idade: 17, cidade: "São Paulo" }, use if para verificar se a idade é maior ou igual a 18 e imprimir "Maior de idade" ou "Menor de idade".

// Array de objetos:
// Dado:

// const pessoas = [
//   { nome: "João", idade: 16 },
//   { nome: "Maria", idade: 22 },
//   { nome: "Pedro", idade: 19 }
// ];


// Use for e if para imprimir o nome apenas das pessoas maiores de 18 anos.

// Soma de valores em array de objetos:
// Dado:

// const produtos = [
//   { nome: "Camisa", preco: 50 },
//   { nome: "Calça", preco: 80 },
//   { nome: "Tênis", preco: 120 }
// ];


// Use for para calcular a soma de todos os preços e imprimir o total.

// Filtrar array de objetos:
// Dado:

// const carros = [
//   { marca: "Ford", ano: 2010 },
//   { marca: "Chevrolet", ano: 2020 },
//   { marca: "Fiat", ano: 2005 },
//   { marca: "Volkswagen", ano: 2018 },
//   { marca: "Toyota", ano: 2015 },
//   { marca: "Honda", ano: 2012 },
//   { marca: "Nissan", ano: 2019 },
//   { marca: "Hyundai", ano: 2016 },
//   { marca: "Kia", ano: 2021 },
//   { marca: "Jeep", ano: 2008 }
// ];


// Use for e if para imprimir apenas os carros fabricados a partir de 2010.

// Alterar valor em array de objetos:
// Dado:

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


// Use for e if para adicionar 1 ponto à nota de cada aluno que tenha nota menor que 6.

// Contar elementos:
// Dado const letras = ["a", "b", "c", "a", "d", "a"], use for e if para contar quantas vezes a letra "a" aparece no array.

// Verificar existência em array de objetos:
// Dado:

//  const funcionarios = [
//   { nome: "Ana", cargo: "Gerente" },
//   { nome: "Carlos", cargo: "Analista" },
//   { nome: "Mariana", cargo: "Assistente" }
// ];


// Use for e if para verificar se existe algum funcionário com cargo "Analista" e imprimir "Existe Analista" ou "Não existe Analista".

// Dado const nomes = ["Ana", "Carlos", "Beatriz", "Daniel"], use for e if para imprimir apenas os nomes que começam com a letra "B".

// Array de strings com letras específicas:


// Array de objetos com status:

// const tarefas = [
//   { titulo: "Comprar leite", concluida: true },
//   { titulo: "Estudar JS", concluida: false },
//   { titulo: "Limpar quarto", concluida: true }
// ];


// Use for e if para imprimir apenas o título das tarefas que não foram concluídas.

// Filtrar números múltiplos de 3:
// Dado const numeros = [3, 7, 9, 12, 14, 18], use for e if para imprimir apenas os números múltiplos de 3.

// Array de objetos com preços e descontos:

// const produtos = [
//   { nome: "Camiseta", preco: 50, desconto: true },
//   { nome: "Calça", preco: 100, desconto: false },
//   { nome: "Tênis", preco: 200, desconto: true }
// ];


// Use for e if para imprimir o nome e preço apenas dos produtos com desconto.


// Contar objetos com determinada propriedade:

// const usuarios = [

//   { nome: "João", ativo: true },
//   { nome: "Maria", ativo: false },
//   { nome: "Pedro", ativo: true }
// ];


// Use for e if para contar quantos usuários estão ativos.

// Array de objetos com notas e média:

// const alunos = [
//   { nome: "Lucas", notas: [7, 8, 9] },
//   { nome: "Carla", notas: [5, 6, 4] }
// ];


// Use for e if para imprimir o nome dos alunos cuja média das notas seja maior ou igual a 7.

// Array de strings com tamanho específico:
// Dado const palavras = ["sol", "lua", "estrela", "mar"], use for e if para criar um novo array apenas com palavras que tenham exatamente 3 letras.

// Verificar existência de objeto com condição:

// const filmes = [
//   { titulo: "Matrix", ano: 1999 },
//   { titulo: "Avatar", ano: 2009 },
//   { titulo: "Inception", ano: 2010 }
// ];


// Use for e if para verificar se existe algum filme lançado antes do ano 2000. Se existir, imprima "Existe filme antigo".

