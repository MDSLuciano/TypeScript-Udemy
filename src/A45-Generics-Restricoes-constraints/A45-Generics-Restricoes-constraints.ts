// Restrições dessa maneira conseguimos limitar o uso de generics e utilizar ele para limitar o uso do generics
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'preto',
  vacinas: ['vacina1', 'vacina2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
console.log(vacinas);

const cor = obterChave(animal, 'cor');
console.log(vacinas, cor, obterChave(animal, 'idade'));
