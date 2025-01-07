const objectA:{
  readonly name: string,
  lastName: string,
  age: number,
  address: {
    city: string,
    state: string
  },
  cpf?: string,
  [key: string]: unknown// index signature, permite adicionar propriedades dinamicamente
} = {
  name: 'Luiz',
  lastName: 'Miranda',
  age: 30,
  address: {
    city: 'Rio do Sul',
    state: 'SC'
  }
}

objectA.key = "qualquer coisa";
objectA.cpf = "000.000.000-00";

console.log(objectA);

