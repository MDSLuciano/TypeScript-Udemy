// Tipos básicos(aqui ocorre o inferencia de tipos)
const nome = 'João';
const age = 27;
const adult = true;
const simbol = Symbol('qualquer-symbol');

// Array
const arrayNumbers: Array<number> = [1, 2, 3];
const arrayNumbers2: number[] = [1, 2, 3];
const arrayStrings: Array<string> = ['a', 'b', 'c'];
const arrayStrings2: string[] = ['a', 'b', 'c'];

// Object
const people: { name: string; age: number; adult?: boolean } = {
  name: 'João',
  age: 27,
  adult: true,
};

// Function
function sum(a: number, b: number): number {
  return a + b;
}
const sum2: (a: number, b: number) => number = (a: number, b: number): number =>
  a + b;
