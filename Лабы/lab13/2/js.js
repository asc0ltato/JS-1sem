// Задание 2. Создать массив со случайными числами и со значением NaN.Проверить, имеется ли у массива элемент NaN с помощью InsteadOf и
// Array.prototype.includes. Результат вывести на экран.
let arr = [];
arr.push(NaN);
for (let i = 0; i < 10; i++) {
arr.push(Math.floor(Math.random() * 10));
}
console.log(arr);

console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));