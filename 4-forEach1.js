const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// Dentro do forEach tem um laço for que percorre o array aprovados
aprovados.forEach(function(nome, indice, array) { // function é uma callback, que recebe o elemento e o índice deste, por parametro.
  console.log(`${indice+1}) ${nome}`);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

