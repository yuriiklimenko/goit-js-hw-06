const form = document.querySelector('.login-form');
const button = document.querySelector('.button');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const formData = {
      email,
      password,
    };
    console.dir(formData);
    e.currentTarget.reset();
  }
}
