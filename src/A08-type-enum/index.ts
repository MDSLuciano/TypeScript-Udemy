enum Cors{
  Vermelho,
  Verde,
  Azul,
}

function changeColor(color: Cors): void{
  console.log(Cors[color]);
}

changeColor(Cors.Vermelho);
