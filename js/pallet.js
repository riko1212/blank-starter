const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('.js-pallet > li');

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

const paintElements = () => {
  palletItemEl.forEach((element) => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.elementColor = color;
  });
};

paintElements();

const onPalletItemClick = (event) => {
  // console.log('event.target: ', event.target);
  // console.log('event.currentTarget: ', event.currentTarget);
  const { target } = event;

  if (target.nodeName !== 'LI') {
    return;
  }

  console.dir(target);

  const palletItemColor = target.dataset.elementColor;
  const outputColorEl = target.querySelector('.js-pallet__item-color');

  outputColorEl.textContent = palletItemColor;
};

palletEl.addEventListener('click', onPalletItemClick);
