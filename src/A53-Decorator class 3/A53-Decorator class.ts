// Isso é uma fábrica construtora, utilizado para passar parametros atraves de um decorator
function reverseNameColor(params1: string, params2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
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
        return (
          value.split('').reverse().join('') + ' ' + params1 + ' ' + params2
        );
      }
    };
  };
}

//Ele é chamado aqui como se fosse uma função
@reverseNameColor('Value1', 'Value2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('gato', 'preto');
console.log(animal);
