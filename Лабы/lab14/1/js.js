// Задание 1. Создать объект с несколькими свойствами. Вывести на экран значения этих свойств с помощью метода Object.values() и Object.keys.
const vegetables = { carrot: 50, onion: 35, pepper: 67};

const vals = Object.keys(vegetables).map(key => vegetables [key] );
console.log (vals);

const values = Object.values(vegetables);
 console.log(values);  // [ 50, 35, 67 ]