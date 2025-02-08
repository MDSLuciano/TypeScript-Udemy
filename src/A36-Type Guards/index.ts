export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 2));
console.log(add('a', 'b'));

type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; color: string };
type PersonOrAnimal = Person | Animal;

class Student implements Person {
  constructor(public name: string) {}
  type: 'person' = 'person';
}

function showName(obj: PersonOrAnimal) {
  // if ('name' in obj) {
  //   console.log(obj.name);
  // }
  // if (obj instanceof Student) {
  //   console.log(obj.name);
  // }
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      break;
    case 'animal':
      console.log(`Isso é um animal, a cor de pele é: ${obj.color}`);
      break;
  }
}

showName(new Student('Luciano'));
showName({ type: 'animal', color: 'black' });
