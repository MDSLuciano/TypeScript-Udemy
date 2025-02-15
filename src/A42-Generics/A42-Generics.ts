// Criando o meu proprio Filtro, utilizando Generics
// O Generics permite que o tipo seja variavel, e permitir que o tipo seja passado como parametro
// alem da flexibilidade que oferece para identificar o tipo da saída.
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (callbackfn(array[index])) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFilteredOriginal = array.filter((value) => value > 5);
console.log(arrayFilteredOriginal);

const arrayFiltered = myFilter(array, (value) => value > 5);
console.log(arrayFiltered);
