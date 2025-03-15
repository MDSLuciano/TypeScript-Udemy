function reverseNameColor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target);
  return class extends target {
    color: string;
    name: string;
    constructor(...args: any[]) {
      super(...args);
      this.name = this.invert(args[0]);
      this.color = this.invert(args[1]);
    }

    invert(value: string) {
      return value.split('').reverse().join('');
    }
  };
}
//Ele é chamado aqui como se fosse uma função
@reverseNameColor
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('gato', 'preto');
console.log(animal);
