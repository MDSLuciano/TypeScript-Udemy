// Declaration merging
interface Person {
  readonly name: string;
}

interface Person {
  readonly lastname: string;
}

interface Person {
  readonly address: readonly string[];
}

interface Person {
  readonly age?: number;
}

const person: Person = {
  name: 'Luciano',
  lastname: 'Machado',
  address: ['Rua A', 'Rua B'],
  age: 30,
};

console.log(person);
