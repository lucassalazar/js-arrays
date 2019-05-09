// Filta o array original de acordo com alguma condição e retorna um novo array
const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
];

console.log(produtos.filter(function(p) {
  return false; // Nenhum valor passará pelo filtro
  // return true; // Todos os valores serão filtrados
}));

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil; // produto.fragil já é um booleano, logo retorna um true ou false

console.log(produtos.filter(caro).filter(fragil));
