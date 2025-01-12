export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}
//Aqui com o call temos a possibilidade de passar o valor de Date, e seu argumento
funcao.call(new Date(), 'Luciano', 24);
funcao.apply(new Date(), ['Luciano', 24]);
//Com o applu você passa o valor e depois os argumentos coloca em formato de array
