let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

// Aqui eu posso passar o tipo das propriedades do objeto,
// e passo também as propriedades do retorno da função
export function createPerson(
  name: string,
  age?: number,
): {
  name: string;
  age?: number;
} {
  return { name, age };
}

// Aqui fazemos a validação com o if
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber);
}
