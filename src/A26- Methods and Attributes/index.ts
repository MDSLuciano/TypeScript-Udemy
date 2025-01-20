export class Person {
  static ageDefault = 0;
  static cpfDefault = '000.000.000-00';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}
  //factory method
  static createPerson(name: string, lastname: string): Person {
    return new Person(name, lastname, Person.ageDefault, Person.cpfDefault);
  }
}

const person1 = new Person('Luciano', 'Machado', 24, '123.456.789-00');
const person2 = Person.createPerson('Luciano', 'Machado');
console.log(person1);
console.log(person2);
