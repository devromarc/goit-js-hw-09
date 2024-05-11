function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

stopBtn.disabled = 'true';

function onColorSwitcherStart() {
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  stopBtn.removeAttribute('disabled');
  startBtn.disabled = 'true';
}

function onColorSwitcherStop() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.disabled = 'true';
}
startBtn.addEventListener('click', onColorSwitcherStart);

stopBtn.addEventListener('click', onColorSwitcherStop);
