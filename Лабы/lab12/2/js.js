// Задание 2. Создайте объект Set. Добавьте в него элементы 1, 3, 5 с помощью метода add(). Вычислите его размер с помощью метода size().
// Используйте метод has() для проверки элементов 1, 3, 5 в объекте Set. Какой тип данных возвращает метод has()?
let set = new Set();

set.add(1);
set.add(3);
set.add(5);

console.log(set.size);

console.log(set.has(1));
console.log(set.has(3));
console.log(set.has(5));