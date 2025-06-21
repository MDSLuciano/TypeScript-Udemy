/* eslint-disable @typescript-eslint/no-namespace */
// Namespace não é mais utilizado porque outras maneiras de ser exportados os módulos mas serve para entendimento hoje existe os módulos
namespace MyNamespace {
  // So posso usar fora do namespace se for exportada
  export const nameOfNameSpace = 'Luciano';

  // Posso exportar a classe do namespace assim, não é acessada fora se não for exportada
  export class PersonOfNameSpace {
    constructor(public name: string) {}
  }

  const personOfNameSpace = new PersonOfNameSpace('Luciano');
  console.log(personOfNameSpace);

  export namespace OtherNamespace {
    export const nameOfNameSpace = 'Nome no outro namespace';
  }
}

const personOfNameSpace = new MyNamespace.PersonOfNameSpace('Luciano');
console.log(personOfNameSpace);
console.log(MyNamespace.nameOfNameSpace);
console.log(MyNamespace.OtherNamespace.nameOfNameSpace);
