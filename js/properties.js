//* Атрибути в якості властивостей об'єкту
const imgEl = document.querySelector('.js-img');
const swapBtnEl = document.querySelector('.js-swap-image-btn');

// https://picsum.photos/200/300

swapBtnEl.addEventListener('click', () => {
  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'random image';
});

/*
 * Доступ до атрибутів
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */

console.log(imgEl.attributes);
