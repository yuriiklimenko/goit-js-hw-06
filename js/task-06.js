const inputRef = document.querySelector('#validation-input');
const dataLength = Number.parseInt(inputRef.dataset.length);

inputRef.addEventListener('blur', validationHandler);

function validationHandler({ target: { value } }) {
  value.length === dataLength
    ? toggleValidation('valid', 'invalid')
    : toggleValidation('invalid', 'valid');
}

function toggleValidation(valid, invalid) {
  inputRef.classList.add(valid);
  inputRef.classList.remove(invalid);
}
