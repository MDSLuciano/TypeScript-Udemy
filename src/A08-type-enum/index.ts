enum Cors {
  Vermelho,
  Verde,
  Azul,
}

export function changeColor(color: Cors): void {
  console.log(Cors[color]);
}

changeColor(Cors.Vermelho);
