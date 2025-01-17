export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastname;
  }
}

export class Student extends Person {}
export class Client extends Person {}

const person = new Person('Luciano', 'Machado', 30, '000.000.000-00');
const student = new Student('Luciano', 'Machado', 30, '000.000.000-00');
const client = new Client('Luciano', 'Machado', 30, '000.000.000-00');

console.log(person);
console.log(student);
console.log(client);
