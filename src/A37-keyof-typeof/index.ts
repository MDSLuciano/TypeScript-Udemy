type ColorsObj = typeof colorsObj;
type Colors = keyof ColorsObj;

const colorsObj = {
  verde: 'green',
  vermelho: 'red',
  azul: 'blue',
  branco: 'white',
  preto: 'black',
};

function transalateColor(color: Colors, colors: ColorsObj) {
  return colors[color];
}

console.log(transalateColor('verde', colorsObj));
console.log(transalateColor('preto', colorsObj));
