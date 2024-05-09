// Задание 3. Создать несколько массивов со случайными символами. Проверить, имеется ли у массивов введённый пользователем символ.
// Результат вывести на экран.
let arr1 = [];
let arr2 = [];
let arr3 = [];

for (let i = 0; i < 10; i++) {
arr1.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
arr2.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
arr3.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
}

console.log(arr1);
console.log(arr2);
console.log(arr3);

let userSymbol = prompt('Введите символ');

if (userSymbol.length > 1) {
alert('Вы ввели больше одного символа');
userSymbol = prompt('Введите символ');
} else if (userSymbol.length === 0) {
alert('Вы не ввели символ');
userSymbol = prompt('Введите символ');
}

if (arr1.includes(userSymbol)) {
console.log('Символ есть в массиве arr1');
} else {
console.log('Символа нет в массиве arr1');
}

if (arr2.includes(userSymbol)) {
console.log('Символ есть в массиве arr2');
} else {
console.log('Символа нет в массиве arr2');
}

if (arr3.includes(userSymbol)) {
console.log('Символ есть в массиве arr3');
} else {
console.log('Символа нет в массиве arr3');
}