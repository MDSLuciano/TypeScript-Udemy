// Encadeamento Opicional e Operador de coalescencia nula
type Documento = {
  title: string;
  description: string;
  date?: Date;
};

const documento: Documento = {
  title: 'Doc 1',
  description: 'Description 1',
  // date: new Date(),
};

// o ?? funciona como se fosse um if, se o lado esquerdo for falso
// , ele retorna o lado direito contendo os operadores??
console.log(documento.date?.toDateString() ?? '1-Sem data');
// console.log(undefined ?? '2-Sem data');
// console.log(null ?? '3-Sem data');
// console.log(false ?? '4-Sem data');
