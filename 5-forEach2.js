const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

Array.prototype.forEach2 = function(callback) { // Adicionando a função ao objeto Array.prototype
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this); // Chamando a callback a cada interação
  };
};

// console.log(typeof aprovados);
// Object.defineProperty(aprovados, 'forEach2', {
//   value: function(callback) {
//     for(let i = 0; i < this.length; i++) {
//       callback(this[i], i, this);
//     };
//   },
//   enumerable: false,
//   writable: false
// });

aprovados.forEach2(function(nome, indice) { // Callback da função forEach2
  console.log(`${indice+1}) ${nome}`);
});

console.log(aprovados.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);