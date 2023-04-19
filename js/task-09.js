function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і
// виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const refs = {
  spanColor: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onChangeFont);

function onChangeFont() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  refs.spanColor.textContent = randomColor;
}
