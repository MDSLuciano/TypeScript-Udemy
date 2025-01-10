/* Recomendado */

//Condicional
const body1 = document.querySelector('body');
if (body1) {
  body1.style.backgroundColor = 'red';
}

//Type assertion
const body3 = document.querySelector('body') as HTMLElement;
body3.style.backgroundColor = 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendado */

//Type assertion
const body4 = document.querySelector('body') as unknown as string;
console.log(body4);

//Non-null assertion (!)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const body2 = document.querySelector('body')!;
body2.style.backgroundColor = 'red';
