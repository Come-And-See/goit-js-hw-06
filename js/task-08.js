// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//  а значення поля - значенням властивості.Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

const formData = {};

function onFormSubmit(e) {
  e.preventDefault();
  onAlert(e);
  onFormData(e);
  refs.form.reset();
}

function onAlert(e) {
  if (!e.currentTarget.email.value || !e.currentTarget.password.value) {
    alert(`Всі поля повинні бути заповнені`);
  }
}

function onFormData(e) {
  formData[e.currentTarget.elements.email.name] =
    e.currentTarget.elements.email.value;
  formData[e.currentTarget.elements.password.name] =
    e.currentTarget.elements.password.value;
  console.log(formData);
}
