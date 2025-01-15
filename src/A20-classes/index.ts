export class Enterprise {
  public readonly name: string; // public é padrão
  private readonly collaborators: Collaborator[] = [];
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
