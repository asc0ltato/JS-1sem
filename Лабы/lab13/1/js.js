// Задание 1. Создать массив со случайными числами. Проверить, имеется
// ли у массива n-й элемент, введённый пользователем. Результат вывести на экран
let arr = [];
for (let i = 0; i < 10; i++) {
arr.push(Math.round(Math.random() * 10));
}
console.log(arr);

let n = +prompt('Введите число'); // приведение к числу

if (arr.includes(n)) {
// Если чисел несколько, то выводим все эти числа
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === n) {
    console.log(`Индекс числа ${n}: ${i}`);
    }
}
} else {
  console.log("Такого числа нет в массиве");
}

// let flag = false;
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] === n) {
// flag = true;
// console.log(`Индекс элемента ${n} в массиве: ${i}`);
// }
// }
// if (!flag) {
// console.log(`В массиве нет элемента ${n}`);
// } 