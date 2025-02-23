// Usamos o sinal de & para unir os objetos
export function unionObjects<O1, O2>(object1: O1, object2: O2): O1 & O2 {
  // return { ...object1, ...object2 };
  return Object.assign({}, object1, object2);
}

const object1 = { a: 1, b: 2 };
const object2 = { c: 'valor1', d: 'valor2' };

console.log(unionObjects(object1, object2));
