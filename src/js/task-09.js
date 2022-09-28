const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const body = document.querySelector('body');

btnEl.addEventListener('click', onButtonClick);

function onButtonClick() {
  const colorRandom = getRandomHexColor();
  body.style.backgroundColor = colorRandom;
  textEl.textContent = colorRandom;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
