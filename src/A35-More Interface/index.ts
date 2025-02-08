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

export const person: Person = {
  name: 'Luciano',
  lastname: 'Machado',
  address: ['Rua A', 'Rua B'],
};

console.log(person);
