// Predicado, essa função retorna um boolean que diz se o argumento
// e um number mas como ele retorna um boolean, o typescript não entende
// que ele retorna um number para isso usamos o predicado value is number
// para assim ele enteder a função
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return result;
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(soma(...[1, 2, 3]));
console.log(soma('a', 'b', 'c'));
