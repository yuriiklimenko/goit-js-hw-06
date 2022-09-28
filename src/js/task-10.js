const boxEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input[type=number]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
let lastSize = 30;
let flag = 0;

btnCreate.addEventListener('click', () => {
  if (inputEl.value === '') {
    alert('Please, enter a number!!!');
  }
  const amount = Number.parseInt(inputEl.value);
  const tags = createBoxes(amount);
  boxEl.append(...tags);
  inputEl.value = '';
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let tagsArr = [];

  if (lastSize > 30 || flag === 1) {
    lastSize += 10;
  }

  for (let i = 0; i < amount; i++) {
    let tag = document.createElement('div');
    let sizeDiv = lastSize + i * 10 + 'px';
    tag.style.width = sizeDiv;
    tag.style.height = sizeDiv;
    tag.style.backgroundColor = getRandomHexColor();
    tagsArr.push(tag);
    if (amount === 1) {
      flag = 1;
    }
  }
  lastSize = Number.parseInt(tagsArr[tagsArr.length - 1].style.width);
  return tagsArr;
}

function destroyBoxes() {
  boxEl.innerHTML = '';
  lastSize = 30;
  flag = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
