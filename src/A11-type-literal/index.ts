let x = 10;
x = 0b1010;
const y = 10;
const a = 100;

const person = {
  name: 'Luiz' as const, //Forço o valor da propriedade a ser constante
  age: 27,
};

function changeColor(color: 'red' | 'blue' | 'green') {
  return color;
}

console.log(changeColor('blue'));

export default 1;
