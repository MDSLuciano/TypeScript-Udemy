type hasName = { name: string };
type hasLastName = { lastName: string };
type hasAge = { age: number };
type Person = hasName & hasLastName & hasAge;
// & = intersection serve para juntar os tipos, e não deixar opcional com |

const person1: Person = {
  name: 'Luiz',
  lastName: 'Miranda',
  age: 30,
};

console.log(person1);

export { person1 }

