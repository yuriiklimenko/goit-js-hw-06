const inputRef = document.querySelector('#validation-input');
const dataLength = Number.parseInt(inputRef.dataset.length);

inputRef.addEventListener('blur', validationHandler);

function validationHandler(e) {
  if (e.currentTarget.value.length === dataLength) {
    e.currentTarget.classList.remove('invalid');
    e.currentTarget.classList.add('valid');
  } else {
    e.currentTarget.classList.remove('valid');
    e.currentTarget.classList.add('invalid');
  }
}
