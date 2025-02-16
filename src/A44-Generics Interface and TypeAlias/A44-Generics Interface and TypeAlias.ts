interface PersonProtocol<T, U> {
  name: T;
  lastname: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastname: T;
  age: U;
};

const aluno1: PersonProtocol<string, number> = {
  name: 'Luciano',
  lastname: 'Machado',
  age: 24,
};
const aluno2: PersonProtocol<number, number> = {
  name: 123,
  lastname: 456,
  age: 24,
};
// Como eu não passo o tipo, ele vai dar erro, somente se eu passar o tipo na variavel ou na interface ou type.
// Teste colocando o PersonProtocol para ver o erro na tela.
const aluno3: PersonProtocol2 = {
  name: 'Luciano',
  lastname: 'Machado',
  age: 24,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
