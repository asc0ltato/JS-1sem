//Задание 4. Организовать перестановку слов в строках. Например, изменить строку "firstName, lastName" на "lastName, firstName".
// (Использовать строковый метод replace()). Результат вывести на экран.

const str = "firstName, lastName";
console.log(str);

const newStr = str.replace(/(\w+), (\w+)/, "$2, $1"); //скобочные группы
console.log(newStr);