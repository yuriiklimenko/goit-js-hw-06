const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', decrementValue);
incrementBtn.addEventListener('click', incrementValue);

function decrementValue() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function incrementValue() {
  counterValue += 1;
  value.textContent = counterValue;
}
