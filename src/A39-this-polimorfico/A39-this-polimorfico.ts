export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }
}

export class subCalculator extends Calculator {
  power(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculator = new subCalculator(10);
calculator.add(5).mul(2).div(2).sub(5).power(2);
console.log(calculator);

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Sending a ${this.method} request to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('https://example.com').setMethod('post').send();
