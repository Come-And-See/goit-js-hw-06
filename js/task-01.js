// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
//  3

// Category: Technologies
// Elements: 5



const onNumberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${onNumberOfCategories.length}`);


onNumberOfCategories.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
}

)