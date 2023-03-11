/*
 * Події клавіатури. keypress, keydown, keyup
 */

document.addEventListener('keyup', (event) => {
  console.log(`code: ${event.code}, key: ${event.key}`);
});
