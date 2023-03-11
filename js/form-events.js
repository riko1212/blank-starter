/*
 * Події елементів форм. focus, blur, change, input, submit
 */

const inputEl = document.querySelector('.js-username-input');
const outputEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

inputEl.addEventListener('focus', (event) => {
  inputEl.style.outline = '2px solid teal';
});

inputEl.addEventListener('blur', (event) => {
  inputEl.style.outline = 'none';
});

inputEl.addEventListener('input', (event) => {
  if (event.target.value === '') {
    outputEl.textContent = 'користувач';

    return;
  }

  outputEl.textContent = event.target.value;
});

inputEl.addEventListener('change', (event) => {
  console.log('Hello');
});

checkboxEl.addEventListener('change', (event) => {
  if (event.target.checked && inputEl.value !== '') {
    submitBtnEl.disabled = false;

    return;
  }

  submitBtnEl.disabled = true;
});

contactFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log('Submit');

  event.target.reset();
});
