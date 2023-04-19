// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const refs = {
  input: document.querySelector('[data-length="6"]'),
};

refs.input.addEventListener("blur", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length === +refs.input.dataset.length) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
}
