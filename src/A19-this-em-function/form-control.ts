import isEmail from 'validator/lib/isEmail';
const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.getElementById('form') as HTMLFormElement;
const userName = document.getElementById('username') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const password2 = document.getElementById('password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessage(target);
  checkForEmptyFields(userName, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);
  if (shouldSendForm(target)) console.log('FORMULÁRIO ENVIADO');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkEqualPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'As senhas são diferentes');
    showErrorMessage(password2, 'As senhas são diferentes');
  }
}
function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGE}`)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
  return send;
}
