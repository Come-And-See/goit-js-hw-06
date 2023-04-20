function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів.
//Користувач вводить кількість елементів в input і натискає кнопку Створити,  після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  input: document.querySelector("input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let amount = 0;

refs.input.addEventListener("input", onAmount);
refs.create.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  refs.boxes.innerHTML = "";

  amount = onAmount();

  let widthSize = 30;
  let heightSize = 30;

  for (let i = 0; i < amount; i += 1) {
    refs.boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="background: ${getRandomHexColor()}; width: ${widthSize}px; height: ${heightSize}px;"></div>`
    );
    widthSize += 10;
    heightSize += 10;
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

function onAmount() {
  return refs.input.value;
}
