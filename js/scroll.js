const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const paintingSectionsInRandomColor = () => {
  document.querySelectorAll('.section').forEach((section) => {
    section.style.backgroundColor = randomColor();
  });
};

paintingSectionsInRandomColor();

const onWindowScroll = (event) => {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 800) {
    const animatedSectionEl = document.querySelector('.js-animated-section');

    animatedSectionEl.classList.add('active');

    window.removeEventListener('scroll', throttledWindowScroll);
  }
};

const throttledWindowScroll = _.throttle(onWindowScroll, 300);

window.addEventListener('scroll', throttledWindowScroll);
