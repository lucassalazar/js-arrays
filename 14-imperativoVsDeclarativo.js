const alunos = [
  { nome: 'João', nota: 7.9 },
  { nome: 'Maria', nota: 9.2 }
];

// Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) { // Esse codigo explica de forma detalhada o que deve ser feito
  total1 += alunos[i].nota;
};

console.log(total1 / alunos.length);

// Declarativo
const getNota = aluno => aluno.nota; // Métodos que podem ser reutilizados
const soma = (total, atual) => total + atual; // Se preocupa com o que deve ser feito
const total2 = alunos.map(getNota).reduce(soma); // E não com os detalhes internos (for). A leitura do código se torna mais simples de se entender.
console.log(total2 / alunos.length);


// Analogia Imperativo x Declarativo
// Imperativo é uma forma que você vai ensinar pra alguém exatamente os passos que devem ser executados, sem deixar nada faltando. No imperativo o passo a passo é mais importante, os detalhes de como tudo sera executado são mais importantes que o resultado final.

// O Declarativo é o contrário, se preocupa com o que deve-ser feito realizando execuções de forma interna. Utilizando funções que podem ser reutilizadas.

// Exemplo: Linguagem SQL e HTML
// select codigo, nome, email from clientes where ativo = 1 // Não se importa tanto com os detalhes internos de execução, apenas com o resultado final.

// Javascript pode ser escrito tanto de maneira imperativa quando de maneira declarativa.

// O paradigma funcional utiliza o ideia de código declarativo.