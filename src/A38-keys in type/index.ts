type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  color: string;
};

const car: Car = {
  brand: 'Ferrari',
  year: 2022,
  color: 'red',
};

console.log(car);
