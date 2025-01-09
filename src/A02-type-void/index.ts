function noReturn(...args: string[]): void {
  // return 'oi';
  console.log('oi', args.join(' '));
}

const person = {
  name: 'Luiz',
  sobrenome: 'Miranda',

  showName(): void {
    console.log(this.name + ' ' + this.sobrenome);
  },
};

noReturn('Luiz', 'Otávio');
person.showName();

export { person };
