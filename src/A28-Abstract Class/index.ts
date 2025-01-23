export abstract class Character {
  protected abstract emoji: string;
  constructor(
    protected name: string,
    protected atack: number,
    protected life: number,
  ) {}

  atackCharacter(character: Character): void {
    this.speakCharacter();
    character.loseLife(this.atack);
  }

  loseLife(attackForce: number): void {
    this.life -= attackForce;
    console.log(
      `${this.emoji} - ${this.name} agora tem ${this.life} de vida...`,
    );
  }

  abstract speakCharacter(): void;
}

export class Warrior extends Character {
  protected emoji = '🗡️';
  speakCharacter(): void {
    console.log(`Sinta a furia do ${this.name} ${this.emoji}`);
  }
}
export class Dragon extends Character {
  protected emoji = '🐉';
  speakCharacter(): void {
    console.log(`Sinta a furia do ${this.name} ${this.emoji}`);
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const dragon = new Dragon('Dragon', 87, 1000);

warrior.atackCharacter(dragon);
warrior.atackCharacter(dragon);
dragon.atackCharacter(warrior);
dragon.atackCharacter(warrior);
