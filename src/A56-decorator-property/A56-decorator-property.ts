function decorador(classPrototype: any, name: string | symbol): any {
  let valueProperty: any;
  return {
    get: () => valueProperty,
    set: (value: any) => {
      if (typeof value === 'string') {
        valueProperty = value.split('').reverse().join('');
        return;
      }
      return (valueProperty = value);
    },
  };
}

// Podemos utilizar esse decorador para alterar os valores passado dentro da classe
// assim colocando mais possibilidades na class
export class OnePerson {
  @decorador
  name: string;
  @decorador
  lastname: string;
  age: number;
  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  method(msg: string): string {
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
