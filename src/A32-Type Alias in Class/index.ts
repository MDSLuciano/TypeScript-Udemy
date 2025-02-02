type TypePerson = {
  name: string;
  lastname: number;
  fullname(): string;
};

export class Person implements TypePerson {
  constructor(public name: string, public lastname: number) {}

  fullname(): string {
    return `${this.name} ${this.lastname}`;
  }
}

const person = new Person('Luiz', 30);
console.log(person.fullname());
