const messageListEl = document.querySelector('.js-messages-wrapper');

const onCloseMessageBtnClick = (event) => {
  // console.log('event.target: ', event.target);
  // console.log('event.currentTarget: ', event.currentTarget);
  const { target } = event;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  const messageEl = target.closest('.message');

  messageEl.remove();
};

messageListEl.addEventListener('click', onCloseMessageBtnClick);
