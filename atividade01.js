// 1)As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% 

//      Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.


                                       ///////////RESPOSTA////////////

// let salario = 350
// if (salario <= 279) {
//    console.log(`Salario antes do reajuste: ${salario} \nAumento de 20%\nValor do aumento: ${salario*0.20}\nSalário atualizou para: ${salario+salario*0.20}.`);
// } else if (salario >= 280 && salario <= 699 ) {
//   console.log(`Salario antes do reajuste: ${salario} \nAumento de 15%\nValor do aumento: ${salario*0.15}\nSalário atualizou para: ${salario+salario*0.15}.`);
//   } else if (salario >= 770 && salario <= 1499 ) {
//   console.log(`Salario antes do reajuste: ${salario} \nAumento de 10%\nValor do aumento: ${salario*0.10}\nSalário atualizou para: ${salario+salario*0.10}.`);
//   } else if (salario >= 1500 ) {
//     console.log(`Salario antes do reajuste: ${salario} \nAumento de 5%\nValor do aumento: ${salario*0.05}\nSalário atualizou para: ${salario+salario*0.05}.`);
// }


// 2)Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

//       Média de Aproveitamento  Conceito
//       Entre 9.0 e 10.0  A
//       Entre 7.5 e 9.0   B
//       Entre 6.0 e 7.5   C
//       Entre 4.0 e 6.0   D
//       Entre 4.0 e zero  E
//     O algoritmo deve mostrar numa janela de alertas notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

                                                   ///////////RESPOSTA////////////

// let nota = 1;

// if (nota >=9) {
//   console.log(`Aluno aprovado. Nota A.`);
//   }
// else if (nota >=7.5) {
//   console.log(`Aluno aprovado. Nota B.`);
//   }
// else if (nota >=6) {
//   console.log(`Aluno aprovado. Nota C.`);
//   }
// else if (nota >=4) {
//   console.log(`Aluno reprovado. Nota D.`);
//   }
// else if (nota >=0) {
//   console.log(`Aluno reprovado. Nota E.`);
//   }


// 3)
// . Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//     Álcool: até 20 litros, desconto de 3% por litro
//     acima de 20 litros, desconto de 5% por litro

//     Gasolina:
//     até 20 litros, desconto de 4% por litro
//     acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível, calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.


                                               ///////////RESPOSTA////////////
// let combustivel = 'alcool' ;
// let qtdLitro = 21 ;

// if (combustivel === "alcool" && qtdLitro <= 20) {
//   let precoAlcool = 1.9 ; 
//   console.log(`Combustivel: ${combustivel}. Valor = ${(qtdLitro*precoAlcool)-((qtdLitro*precoAlcool)*0.03)}`);

//   } else if (combustivel === "alcool" && qtdLitro > 20)  {
//   let precoAlcool = 1.9 ; 
//   console.log(`Combustivel: ${combustivel}. Valor = ${(qtdLitro*precoAlcool)-((qtdLitro*precoAlcool)*0.05)}`);

//   } else if (combustivel === 'gasolina' && qtdLitro <= 20) {
//   let precoGasolina = 2.5 ;
//   console.log(`Combustivel: ${combustivel}. Valor = ${(qtdLitro*precoGasolina)-((qtdLitro*precoGasolina)*0.04)}`);

//   } else if (combustivel === 'gasolina' && qtdLitro > 20) {
//   let precoGasolina = 2.5 ; 
//   console.log(`Combustivel: ${combustivel}. Valor  = ${(qtdLitro*precoGasolina)-((qtdLitro*precoGasolina)*0.06)}`);
//   }



// 4)O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                     Até 5 Kg                 Acima de 5 Kg
//     File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
//     Alcatra           R$ 5,90 por Kg          R$ 6,80 por Kg
//     Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
//     Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

                                            ///////////RESPOSTA////////////

// let proteina = 'Picanha' ; // File duplo ; Alcatra ; Picanha
// let quantidadeKg = 4.99 ; 
// let formaDePagamento = 'pix' ; // dinheiro ; cartao ; cartao tabajara ; pix 

// if (proteina === 'File duplo' && quantidadeKg <= 5 && formaDePagamento === 'cartao tabajara') {
//   let precoProteina = 4.9 ;
//   console.log(`Tipo de carne: ${proteina} \nQuantidade:${quantidadeKg} Kg\nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0.05)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0.05))} \nForma de pagamento: ${formaDePagamento} `);

// } else if (proteina === 'File duplo' && quantidadeKg <= 5) {
//    let precoProteina = 4.9 ;
//     console.log(`Tipo de carne: ${proteina} \nQuantidade: ${quantidadeKg} Kg \nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0))}  \nForma de pagamento: ${formaDePagamento}  `);
  
// } else if (proteina === 'File duplo' && quantidadeKg > 5 && formaDePagamento === 'cartao tabajara') {
//    let precoProteina = 5.8 ;
//     console.log(`Tipo de carne: ${proteina} \nQuantidade:${quantidadeKg} Kg \nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0.05)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0.05))}  \nForma de pagamento: ${formaDePagamento} `);

// } else if (proteina === 'File duplo' && quantidadeKg > 5) {
//    let precoProteina = 5.8 ;
//     console.log(`Tipo de carne: ${proteina} \nQuantidade:${quantidadeKg} Kg \nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0))}  \nForma de pagamento: ${formaDePagamento} `);
// }
// ///////////////////// Alcatra

// else if (proteina === 'Alcatra' && quantidadeKg <= 5 && formaDePagamento === 'cartao tabajara') {
//   let precoProteina = 5.9 ;
//   console.log(`Tipo de carne: ${proteina} \nQuantidade:${quantidadeKg} Kg\nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0.05)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0.05))}  \nForma de pagamento: ${formaDePagamento} `);

// } else if (proteina === 'Alcatra' && quantidadeKg <= 5) {
//    let precoProteina = 5.9 ;
//     console.log(`Tipo de carne: ${proteina} \nQuantidade: ${quantidadeKg} Kg\nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0))}  \nForma de pagamento: ${formaDePagamento} `);

// } else if (proteina === 'Alcatra' && quantidadeKg > 5 && formaDePagamento === 'cartao tabajara') {
//    let precoProteina = 6.8 ;
//     console.log(`Tipo de carne: ${proteina} \nQuantidade:${quantidadeKg} Kg \nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0.05)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0.05))}  \nForma de pagamento: ${formaDePagamento} `);
  
// } else if (proteina === 'Alcatra' && quantidadeKg > 5) {
//    let precoProteina = 6.8 ;
//     console.log(`Tipo de carne: ${proteina} \nQuantidade:${quantidadeKg} Kg\nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0))}  \nForma de pagamento: ${formaDePagamento}  `);
// }
// ///////////////////// Picanha

// else if (proteina === 'Picanha' && quantidadeKg <= 5 && formaDePagamento === 'cartao tabajara') {
//   let precoProteina = 6.9 ;
//   console.log(`Tipo de carne: ${proteina} \nQuantidade:${quantidadeKg} Kg\nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0.05)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0.05))}  \nForma de pagamento: ${formaDePagamento} `);

// } else if (proteina === 'Picanha' && quantidadeKg <= 5) {
//    let precoProteina = 6.9 ;
//     console.log(`Tipo de carne: ${proteina} \nQuantidade: ${quantidadeKg} Kg\nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0))}  \nForma de pagamento: ${formaDePagamento} `);

// } else if (proteina === 'Picanha' && quantidadeKg > 5 && formaDePagamento === 'cartao tabajara') {
//    let precoProteina = 7.8 ;
//     console.log(`Tipo de carne: ${proteina} \nQuantidade:${quantidadeKg} Kg \nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0.05)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0.05))}  \nForma de pagamento: ${formaDePagamento} `);
  
// } else if (proteina === 'Picanha' && quantidadeKg > 5) {
//    let precoProteina = 7.8 ;
//     console.log(`Tipo de carne: ${proteina} \nQuantidade:${quantidadeKg} Kg\nPreço total: ${(quantidadeKg*precoProteina)} \nValor total do desconto: ${((quantidadeKg*precoProteina)*0)} \nPreço a pagar: ${((quantidadeKg*precoProteina)-((quantidadeKg*precoProteina)*0))}  \nForma de pagamento: ${formaDePagamento}  `);
// }