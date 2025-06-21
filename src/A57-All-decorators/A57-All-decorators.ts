import { property } from 'lodash';

// Tipo de construtor de classe
type Constructor = new (...args: any[]) => any;

// Classes
function decoratorClass(constructor: Constructor): any {
  // Chamado na criação da classe
  console.log('Classe');
  console.log(constructor);
  console.log('###');
}

// Método de instância (normal)
function decoratorMethod(
  classPrototype: any,
  nameMethod: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('MÉtodo NORMAL');
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(propertyDescriptor);
  console.log('###');
}

// Método estático
function decoratorStaticMethod(
  classConstructor: Constructor,
  nameMethod: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('Metodo Estatico');
  console.log(classConstructor);
  console.log(nameMethod);
  console.log(propertyDescriptor);
  console.log('######');
}

// Parâmetro de método
function decoratorMethodParameter(
  classPrototype: any,
  nameMethod: string,
  propertyIndex: number,
): any {
  // Chamado na criação do método
  console.log('PARÂMETRO DE MÉTODO');
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(propertyIndex);
  console.log('###');
}

// Parâmetro de método estático
function decoratorStaticMethodParameter(
  classPrototype: any,
  nameMethod: string,
  propertyIndex: number,
): any {
  // Chamado na criação do método (não precisa chamar o método)
  console.log('PARÂMETRO DE MÉTODO');
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(propertyIndex);
  console.log('###');
}

// Propriedade
function decoratorProperty(classPrototype: any, nameProperty: string): any {
  console.log('DECORADOR DE PROPRIEDADE');
  console.log(classPrototype);
  console.log(nameProperty);
  console.log('###');
}
// Propriedade estática
function decoratorStaticProperty(
  classPrototype: Constructor,
  nameProperty: string,
): any {
  console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
  console.log(classPrototype);
  console.log(nameProperty);
  console.log('###');
}

// Getter/Setter
function decoratorGetterAndSetterNormal(
  classPrototype: any,
  nameProperty: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  console.log('GETTER/SETTER normals');
  console.log(classPrototype);
  console.log(nameProperty);
  console.log(propertyDescriptor);
  console.log('###');
}

// Getter/Setter Estático
function decoratorGetterAndSetterStatic(
  classPrototype: Constructor,
  nameProperty: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  console.log('GETTER/SETTER estático');
  console.log(classPrototype);
  console.log(nameProperty);
  console.log(propertyDescriptor);
  console.log('###');
}
// A classe e o uso dos decorators

@decoratorClass
export class OnePerson {
  @decoratorProperty
  name: string;
  lastname: string;
  age: number;

  @decoratorStaticProperty
  static staticProperty = '';

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @decoratorMethod
  method(@decoratorMethodParameter msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  @decoratorStaticMethod
  static staticMethod(@decoratorStaticMethodParameter msg: string): string {
    return OnePerson.staticProperty + msg;
  }

  @decoratorGetterAndSetterNormal
  get fullName(): string {
    return this.name + ' ' + this.lastname;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }

  @decoratorGetterAndSetterStatic
  static get staticPropertyGetterSetter(): string {
    return OnePerson.staticProperty;
  }

  static set staticPropertyGetterSetter(value: string) {
    OnePerson.staticProperty = value;
  }
}

// Uso da Classe

const person = new OnePerson('Luciano', 'Machado', 25);
const method = person.method('Olá mundo!');
console.log(method);
