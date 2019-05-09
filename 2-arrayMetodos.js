const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); // Adiciona um novo elemento no final do array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona um novo elemento no inicio do array
console.log(pilotos);

// Método splice: pode adicionar ou remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa'); // Antes do Raikkonen serão adicionados o Bottas e na sequência o Massa
console.log(pilotos); // ['Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen']

// Remover
pilotos.splice(3, 1); // Remove o Massa
console.log(pilotos); // ['Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen']

// Método slice: Retorna em um novo array alguns elementos de um array específico
const algunsPilotos1 = pilotos.slice(2); // Retorna em um novo array todos os elementos do array piloto a partir da índice 2
console.log(algunsPilotos1); // ['Bottas', 'Raikkonen', 'Verstappen']

const algunsPilotos2 = pilotos.slice(1, 4); // Retorna em um novo array os elementos do índice 1 até o índice 4, sem contar o elemento de índice 4
console.log(algunsPilotos2); // ['Alonso', 'Bottas', 'Raikkonen']