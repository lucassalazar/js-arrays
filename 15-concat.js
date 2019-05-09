// Concatena dois ou mais arrays
const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];
const todos = filhas.concat(filhos);
console.log(todos, filhas, filhos);

const ab = ['a', 'b'];

const todos1 = ab.concat([1, 2], [3, 4], 5, [[6, 7]]); // O array original não é modificado
console.log(todos1);
console.log(ab);