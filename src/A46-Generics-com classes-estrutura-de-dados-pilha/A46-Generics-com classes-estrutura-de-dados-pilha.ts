export class Person<T, U> {
  constructor(public name: T, public lastname: U) {}
}
/*
Quando vamos instaciar uma classe e esse valores vão ser criados depois
não usando uma função que ja existem valores concretos, ele vão ser criados
depois, o Generics não nos ajudar a inferir o tipo.
*/
export class Stack<T> {
  private counter = 0;
  private element: { [key: number]: T } = {};

  push(element: T): void {
    this.element[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return;
    this.counter--;
    const result = this.element[this.counter];
    delete this.element[this.counter];
    return result;
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  length(): number {
    return this.counter;
  }

  showStack(): void {
    for (const key in this.element) {
      console.log(this.element[key]);
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.showStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
