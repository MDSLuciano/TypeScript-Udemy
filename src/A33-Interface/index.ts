interface TypeName {
  name: string;
}

interface TypeLastname {
  lastname: string;
}

interface TypeFullname {
  fullname(): string;
}

export type TypePerson = TypeName & TypeLastname & TypeFullname;
interface TypePerson2 extends TypeName, TypeLastname, TypeFullname {
  fullname(): string;
}

export class Person implements TypePerson2 {
  constructor(public name: string, public lastname: string) {}

  fullname(): string {
    return `${this.name} ${this.lastname}`;
  }
}

const personObj: TypePerson = {
  name: 'Luciano',
  lastname: 'Agora ta ok obj',
  fullname() {
    return `${this.name} ${this.lastname}`;
  },
};
const person = new Person('Luciano', 'Machado');
console.log(person.fullname());
console.log(personObj.fullname());
