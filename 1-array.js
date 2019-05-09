console.log(typeof Array, typeof new Array, typeof []); // O array em javascript é um objeto, no entando o typeof da função array é function
// Array em javascript é uma estrutura heterogenea devido a linguagem ser fracamente tipada
// No entanto é recomendado que se trabalhe com dados homogeneos
let aprovados = new Array('Bia', 'Carlos', 'Ana'); // Forma não muito recomendada de criar array
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']; // Forma literal e recomendada de criar um array
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paulo'; // Forma utilizada para adicionar novos elementos e tambem para substituir valores
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael'; // Os valores de índice 5 a 8 ficarão setados como undefined
console.log(aprovados.length); 
console.log(aprovados[8] === null);
console.log(aprovados[8] === undefined);
console.log(aprovados);

aprovados.sort(); // Organiza os elementos do array de forma ordenada. Altera o array original
console.log(aprovados); // Array original alterado

delete aprovados[1]; // Deleta um elemento do array, no entando a posição do elemento deletado se mantém com o valor undefined
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
// O metodo splice() é utilizado para remover elementos de um array, e se necessário inserir novos elementos em suas posições. Retorna os elementos excluídos
aprovados.splice(1, 1); // A partir do índice 1, remove 1 elemento ('Carlos')
console.log(aprovados);

aprovados.splice(1, 1, 'Elemento'); // A partir do índice 1, remove o elemento de índice 1 ('Ana') e insere um novo elemento ('Elemento')
console.log(aprovados);

aprovados.splice(1, 0, 'Carlos', 'Ana'); // A partir do índice 1, não remove nenhum elemento, e insere dois elementos novos na posição ('Carlos', 'Ana')
console.log(aprovados);