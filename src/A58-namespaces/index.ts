/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module/module.ts" />

console.log(MyNamespace.nameOfNameSpace);

/*
Para fazer funcionar eu teria que fazer uma alteração no arquivo do tsconfig ou criar um código no terminar acessando essa pasta, assim depois fazendo a transpliação de typescript para javascript, atraves do comando
npx tsc index.ts --outfile arquivocompilado.js e utilizaria o runtime no arquivo js criado.

Isso so funciona porque ele faz um unico arquivo contendo todo o codigo, assim havendo apenas um arquivo contendo todo o codigo
*/
