export class Enterprise {
  readonly name: string; // public é padrão
  private readonly collaborators: Collaborator[] = [];
  // metodo private protege que não consigam fazer alteração fora da classe
  // por exemplo adicionando novos valores ou removendo valores existentes.
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborator(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Collaborator {
  // Obrigatório colocar o tipo do método, para saber o tipo.
  constructor(public readonly name: string, public readonly lastname: string) {}
}
const enterprise1 = new Enterprise('MDS', '11.111.111/0001-11');
const collaborator1 = new Collaborator('Luciano', 'Machado');
const collaborator2 = new Collaborator('Gabriel', 'Machado');
const collaborator3 = new Collaborator('Rodrigo', 'Machado');

enterprise1.addCollaborator(collaborator1);
enterprise1.addCollaborator(collaborator2);
enterprise1.addCollaborator(collaborator3);

enterprise1.showCollaborator();
