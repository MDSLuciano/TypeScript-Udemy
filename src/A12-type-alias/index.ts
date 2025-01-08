type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};
type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Luiz',
  age: 30,
  salary: 1000,
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return {
    ...person,
    favoriteColor: color,
  };
}

console.log(setFavoriteColor(person, 'Red'));
console.log((person));

