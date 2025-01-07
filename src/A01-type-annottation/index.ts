// Tipos básicos(aqui ocorre o inferencia de tipos)
let nome: string = "João";
let age: number = 27;
let adult: boolean = true;
let simbol: symbol = Symbol('qualquer-symbol');

// Array
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b', 'c'];
let arrayStrings2: string[] = ['a', 'b', 'c'];

// Object
let people: {name: string, age: number, adult?: boolean} = {
  name: 'João',
  age: 27,
  adult: true
}

// Function
function sum(a: number, b: number): number {
  return a + b;
}
const sum2: (a: number, b: number) => number = (a: number, b: number): number => a + b;
