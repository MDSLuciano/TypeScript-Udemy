// Ainda não existe valor a ser passado no decorador de parametro
// qualquer valor passado será omitido
function decorator(
  classPrototype: any,
  nameMethod: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
}

export class OnePerson {
  name: string;
  lastname: string;
  age: number;
  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  method(@decorator msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  get fullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }
}

const person = new OnePerson('Luciano', 'Machado', 24);
const method = person.method('Olá, Mundo!');
console.log(method);
