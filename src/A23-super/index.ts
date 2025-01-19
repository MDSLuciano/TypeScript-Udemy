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

export class Student extends Person {
  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    public room: string,
  ) {
    super(name, lastname, age, cpf);
  }
  getFullName(): string {
    console.log('FAZENDO ALGO ANTES');
    return 'Isso vem do aluno: ' + this.name + ' ' + this.lastname;
  }
}
export class Client extends Person {
  getFullName(): string {
    return 'Isso vem do cliente: ' + this.name + ' ' + this.lastname;
  }
}

const person = new Person('Luciano', 'Machado', 30, '000.000.000-00');
const student = new Student('Luciano', 'Machado', 30, '000.000.000-00', '001');
const client = new Client('Luciano', 'Machado', 30, '000.000.000-00');

console.log(person.getFullName());
console.log(student.getFullName());
console.log(client.getFullName());
console.log(student);
