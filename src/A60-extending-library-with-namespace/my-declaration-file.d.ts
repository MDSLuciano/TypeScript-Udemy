/* Aqui declaramos a sintaxe da função, estamos tipando a função para assim criar funções que não
existem na biblioteca */

declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MYGLOBAL: string;
  }
}
