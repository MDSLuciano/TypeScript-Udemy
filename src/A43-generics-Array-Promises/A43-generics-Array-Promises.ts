type MyType = number;
export const arrayNumbers: Array<number> = [1, 2, 3];
console.log(arrayNumbers);

async function promiseAsync() {
  return 1;
}

/* Quando temos uma api ou algo que ira demorar para ser resolvido
o TypeScript nos ajuda com o uso do Generics porque podemos inserir
a saída da promise na funcao.
Por que se não estaria com a saída unknown e daria erro na saída
*/
function myPromise(): Promise<MyType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
