// Array<T> - T[]
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}
export function addStrings(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3, 4, 5);
const concatenations = addStrings('Luciano', ' ', 'Silva');
const upper = toUpperCase('Noia');
console.log(result, concatenations, upper);
