const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
  console.log('Acumulador:', acumulador, '+ Atual:', atual);
  return acumulador + atual;
}); // O segundo parâmetro do método reduce é o valor inicial do acumulador (Por padrão  = 0)
console.log(resultado);
