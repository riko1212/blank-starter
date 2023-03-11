/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const sectionEl = document.querySelector('.js-section');
const divEl = document.querySelector('.js-div');
const textEl = document.querySelector('.js-text');

sectionEl.addEventListener('click', (event) => {
  console.group('addEventListener on section');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd('addEventListener on section');
});

divEl.addEventListener('click', (event) => {
  console.group('addEventListener on div');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd('addEventListener on div');
});

textEl.addEventListener('click', (event) => {
  console.group('addEventListener on p');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd('addEventListener on p');
});
