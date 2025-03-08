export class Votacao {
  private python = 0;
  private typescript = 0;
  private javascript = 0;

  private vermelho = 0;
  private verde = 0;
  private azul = 0;

  addVoto(voto: string): void {
    switch (voto) {
      case 'python':
        this.python++;
        break;
      case 'typescript':
        this.typescript++;
        break;
      case 'javascript':
        this.javascript++;
        break;
      case 'vermelho':
        this.vermelho++;
        break;
      case 'verde':
        this.verde++;
        break;
      case 'azul':
        this.azul++;
        break;
      default:
        break;
    }
  }

  showResult(): void {
    console.log('Qual sua linguagem de programação favorita');
    console.log(`Python: ${this.python}`);
    console.log(`Javascript: ${this.javascript}`);
    console.log(`Typescript: ${this.typescript}`);
    console.log('#######################');
    console.log('Qual sua cor preferida?');
    console.log(`Vermelho: ${this.vermelho}`);
    console.log(`Verde: ${this.verde}`);
    console.log(`Azul: ${this.azul}`);
    console.log('#######################');
  }
}

const votacao = new Votacao();
votacao.addVoto('python');
votacao.addVoto('typescript');
votacao.addVoto('javascript');
votacao.addVoto('vermelho');
votacao.addVoto('verde');
votacao.addVoto('azul');

votacao.showResult();
