const accordionBtnsEl = document.querySelectorAll('.js-accordion-btn');

const openModalBtnEl = document.querySelector('.js-modal-open');
const backdropEl = document.querySelector('.js-backdrop');
const closeModalBtnEl = document.querySelector('.js-modal-close');

const toggleModal = () => {
  backdropEl.classList.toggle('is-open');

  if (!backdropEl.classList.contains('is-open')) {
    document.removeEventListener('keydown', onEscBtnPress);
  }
};

const onEscBtnPress = (event) => {
  if (event.code === 'Escape') {
    toggleModal();
  }
};

const onOpenModalBtnElClick = (event) => {
  toggleModal();

  document.addEventListener('keydown', onEscBtnPress);
};

openModalBtnEl.addEventListener('click', onOpenModalBtnElClick);
closeModalBtnEl.addEventListener('click', toggleModal);

backdropEl.addEventListener('click', (event) => {
  // console.log('event.target: ', event.target);
  // console.log('event.currentTarget: ', event.currentTarget);

  const { target, currentTarget } = event;

  if (target === currentTarget) {
    toggleModal();
  }
});
