const accordionBtnsEl = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnElClick = (event) => {
  const { target } = event;

  target.nextElementSibling.classList.toggle('active');
};

accordionBtnsEl.forEach((el) => {
  el.addEventListener('click', onAccordionBtnElClick);
});
