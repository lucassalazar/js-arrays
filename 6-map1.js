const nums = [1, 2, 3, 4, 5];

// Map é um for com propósito
let resultado = nums.map(function (e) {
  return e * 2;
}); 

console.log('Array original =', nums); // Map não modifica o array original 
console.log('map() =', resultado); // Map retorna um novo array modificado

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`; // parseFloat() transforma uma string em um valor ponto-flutuante. toFixed(2) configura o valor ponto-flutuante para ter duas casas decimais. replace() substitui o ponto pela virgula

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log('map(soma10).map(triplo).map(paraDinheiro) =', resultado);