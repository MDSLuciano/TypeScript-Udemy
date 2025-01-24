export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}
  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  toWriter(): void {
    if (this.tool === null) {
      console.log(`${this._name} is writing without a tool`);
      return;
    }
    this.tool.toWriter();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract toWriter(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  toWriter(): void {
    console.log(`${this.name} to writer...`);
  }
}
export class Typewriter extends Tool {
  toWriter(): void {
    console.log(`${this.name} to typing...`);
  }
}

const writer = new Writer('Luciano');
const pen = new Pen('Pen');
const typewriter = new Typewriter('Typewriter');

// console.log(writer.name);
// console.log(pen.name);
// console.log(typewriter.name);

writer.tool = pen;
writer.toWriter();
writer.tool = typewriter;

writer.toWriter();
writer.tool = null;
writer.toWriter();
