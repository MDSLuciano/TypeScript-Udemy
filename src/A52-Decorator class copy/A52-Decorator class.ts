function reverseNameColor<T extends new (...args: any[]) => any>(target: T): T {
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

@reverseNameColor
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('gato', 'preto');
console.log(animal);
