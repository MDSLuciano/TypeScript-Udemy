type mapStringsCallback = (item: string) => string;

export function mapStrings(
  strings: string[],
  callbackfn: mapStringsCallback,
): string[] {
  const newArray: string[] = [];
  strings.map((string) => newArray.push(callbackfn(string)));

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapped);
