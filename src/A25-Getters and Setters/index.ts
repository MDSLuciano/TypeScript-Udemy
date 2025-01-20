/*
  Usamos getter e setter para ter um encapsulamento assim evitando
  erros no código por exemplo uma variavel for usada de forma que
  não era determinada
*/

export class Person {
  constructor(
    private name: string,
    private lastname: string,
    private age: number,
    private _cpf: string, // Precisamos adicionar o '_' na variavel para indicar que ela é privada e utilizar o getter e setter
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  //Aqui tiramos todos os pontos do cpf, por exemplo.
  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Luciano', 'Machado', 24, '123.456.789-00');
person.cpf = '123.456.789-99';
console.log(person.cpf);
