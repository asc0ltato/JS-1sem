//первое задание
let s = 10;
let n = 20;
//инициализируем переменную arr и создаем массив
let arr = [6 - Math.pow(Math.PI, 2) + 3 * Math.exp(8), 2 * Math.cos(4) + Math.cos(12) + 8 - Math.exp(3), 3 * Math.sin(9) + Math.log(5) + s, 2 * Math.tan(5) + 6 - n + Math.sqrt(12)];

console.log("Максимальный элемент массива: " + Math.max(...arr) + "\nИндекс максимального элемента массива: " + arr.indexOf(Math.max(...arr)));
console.log("Минимальный элемент массива: " + Math.min(...arr) + "\nИндекс миинмального элемента массива: " + arr.indexOf(Math.min(...arr)));
//Метод indexOf возвращает индекс элемента, значение которого равно значению, переданному методу в качестве аргумента
//метод Math.max() возвращает наибольшее из нуля или более чисел

//третье задание
let arrayFrom = Array.from('mamamoya')
console.log("arrayFrom=", arrayFrom)
//Метод Array.from() создаёт массив. Первый аргумент – итерируемый объект или объект, подобный массиву (чтобы было length и индексированные элементы).
//Второй опциональный аргумент – функция преобразования (мэппинга) исходных элементов.

let arrayOf = Array.of('mamamoya')
console.log('arrayOf=', arrayOf)
//Метод Array.of() создаёт массив из произвольного числа аргументов, вне зависимости от их числа или типа.

//четвертое задание
let array= ['pow', 'pop', 'push', 'shift', 'round', 'floor', 'slice', 'sort'];
let arrOfMathMethods = [];
let arrOfArrayMethods = [];

for (let i = 0;i < array.length;i++){
	if (array[i] in Math) {
		arrOfMathMethods.unshift(array[i]) //-unshift() элементы в начало массива. 
	}
	else {
		arrOfArrayMethods.unshift(array[i])
	} 
}

arrOfArrayMethods.unshift('reverse');
arrOfMathMethods.push('PI'); //-push() добавляет элементов в конец массива. 

console.log("Исходный массив: " + array);
console.log("Массив с методами массива: " + arrOfArrayMethods);
console.log("Длина массива с методами массива: " + arrOfArrayMethods.length);
console.log("Массив с методами объекта Math: " + arrOfMathMethods);
console.log("Длина массива с методами объекта Math: " + arrOfMathMethods.length);

//пятое задание
let str = "Zhuk Svetlana Sergeevna";
console.log("Длина моего ФИО: " + str.length);
let strInUpperCase = str.toUpperCase();
let strInLowerCase = str.toLowerCase();
let unitedCases = strInUpperCase.concat(strInLowerCase)
let FIO = str.replace("Zhuk Svetlana Sergeevna", "ZSS") //replace() - заменить одно произвольное слово в строке на другое.  
document.write(str + '<br>' + strInUpperCase + '<br>' + strInLowerCase + '<br>' +  unitedCases + '<br>' + FIO);
//- concat() объединяет два и более массива в один.

//шестое задание
let date = new Date() //конструктор 
let table = document.createElement('table');

let tr = table.appendChild(document.createElement('tr'));// //добавляет дочерний узел в конец родительского элемента
tr.appendChild(document.createElement('td')).innerHTML = 'Год';
tr.appendChild(document.createElement('td')).innerHTML = date.getFullYear();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Месяц';
tr.appendChild(document.createElement('td')).innerHTML = date.getMonth()+1;
tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'День';
tr.appendChild(document.createElement('td')).innerHTML = date.getDate();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Час';
tr.appendChild(document.createElement('td')).innerHTML = date.getHours();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Минуты';
tr.appendChild(document.createElement('td')).innerHTML = date.getMinutes();

tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement('td')).innerHTML = 'Секунды';
tr.appendChild(document.createElement('td')).innerHTML = date.getSeconds();

document.body.appendChild(table);