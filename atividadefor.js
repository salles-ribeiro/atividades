// Buscar nome dos alunos somente reprovados

const alunos = [
  { nome: "Lucas", nota: 7 },
  { nome: "Carla", nota: 9 },
  { nome: "Pedro", nota: 5 },
  { nome: "Ana", nota: 8 },
  { nome: "Marcos", nota: 6 },
  { nome: "Beatriz", nota: 10 },
  { nome: "Rafael", nota: 4 },
  { nome: "Fernanda", nota: 7 },
  { nome: "Gustavo", nota: 6 },
  { nome: "Julia", nota: 9 }
];

 let Aprovados = 0 ;
  let Reprovados = 0 ;

for (let index = 0; index < alunos.length; index++) {
  if (alunos[index].nota < 7)
  console.log(alunos[index].nome);
 
  if (alunos[index].nota >=7) {
    Aprovados++;
   } else Reprovados++;

  }
 console.log(`Quantidade de aprovados: ${Aprovados}`);
 console.log(`Quantidade de Reprovados: ${Reprovados}`);
 
