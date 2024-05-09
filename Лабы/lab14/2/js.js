// Задание 2. Создать список чисел разной длины. Добавить в начало и в конец любое число с помощью padStart() и padEnd() так, чтобы
// выровнять границы списка. Суммарное количество цифр в каждой строчке – 15. Вывести на экран список до и после выравнивания.

const list = [1, 22, 333, 4444, 55555];
console.log(list);

const newList = list.map(item => item.toString().padStart(8, '0').padEnd(15, '0'));
console.log(newList);

const number = {
    'Первый вывод': '1',
    'Второй вывод': '22',
    'Третий вывод': '333',
    'Четвертый вывод': '4444',
    'Пятый вывод': '55555'
    }
    Object.entries(number).map(([choose, count])=>{
    console.log(`${choose.padEnd(25,'-')}${count.padStart(8,'0').padEnd(15,'0')}`);
    });
