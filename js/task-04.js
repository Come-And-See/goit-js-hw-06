// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
  increment: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

refs.decrement.addEventListener("click", onDecrement);
refs.increment.addEventListener("click", onIncrement);

function onDecrement() {
  counterValue -= 1;
  updateValueUi();
}

function onIncrement() {
  counterValue += 1;
  updateValueUi();
}

function updateValueUi() {
  refs.value.textContent = counterValue;
}
