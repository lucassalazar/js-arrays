const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.1
  }, {
    nome: 'Ana',
    nota: 9.3
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebeca',
    nota: 8.9
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1); // [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])); // Retorna um flat array [ 8.1, 9.3, 8.9, 7.3 ]

// Criando um metodo flatMap!
Array.prototype.flatMap = function(callback) {
  console.log(this.map(callback));
  return Array.prototype.concat.apply([], this.map(callback)); // O contexto desse this refere-se à classe Array, ou seja, quando fazemos this. podemos listar todos os métodos da classe Array. O exemplo acima utiliza o map chamando a callback. Que retorna como resultado o array [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ].
  // Logo, Array.prototype.concat.apply([], [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]);
  // O mesmo que [].concat([8.1, 9.3], [8.9, 7.3]);
}

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);

// FlatMap utilizando reduce
// const agrupaNotas = (acumulador, atual) => acumulador.concat(atual);
// const notas3 = escola.map(getNotasDaTurma).reduce(agrupaNotas, []);

// console.log(notas3);

