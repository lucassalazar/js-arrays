// Programa que simula um array a partir de um objeto. Para mostrar como a estrutura de um array em javascript pode ser formado a partir de um objeto.

const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toArray', { // Cria o atributo toString dentro de quaseArray
  value: function() { return Object.values(this) }, // value é o valor do atributo toArray. Object.values() retorna um array com o valor dos atributos do objeto
  enumerable: false,
  writable: false
});

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Ana', 'Bia'];
console.log(quaseArray.toArray(), meuArray);