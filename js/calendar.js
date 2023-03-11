const calendarEl = document.querySelector('.js-calendar');
let prevCalendarItem = null;

const onCalendarItemClick = (event) => {
  // console.log('event.target: ', event.target);
  // console.log('event.currentTarget: ', event.currentTarget);
  const { target } = event;

  // Якщо наш цільовий елемент це не TD або порожній TD, нічого робити не потрібно
  if (target.nodeName !== 'TD' || target.textContent === '') {
    return;
  }

  // Якщо це той самий елемент, перемикаємо клас active і виходимо
  if (prevCalendarItem === target) {
    target.classList.toggle('active');

    return;
  }

  // Якщо це не перший клік, прибираємо з попереднього клас active
  if (prevCalendarItem !== null) {
    prevCalendarItem.classList.remove('active');
  }

  target.classList.add('active');
  prevCalendarItem = target;
};

calendarEl.addEventListener('click', onCalendarItemClick);
