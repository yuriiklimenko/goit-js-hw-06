const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', e => {
  const newFontSize = Number.parseInt(e.currentTarget.value) / coefficient;
  textEl.style.fontSize = `${newFontSize}px`;
});

const averageRange =
  (Number.parseInt(inputEl.getAttribute('max')) +
    Number.parseInt(inputEl.getAttribute('min'))) /
  2;

const currentFontSize = Number.parseInt(window.getComputedStyle(text).fontSize);
const coefficient = averageRange / currentFontSize;
