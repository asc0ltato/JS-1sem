//Задание 4. Создать массив символов. Вывести на экран значения массива так, чтобы в начале были единицы, а в конце ноль с отступом 4.
const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
console.log(symbols);

const random = Math.floor(Math.random() * 7);

for (let i = 0; i < random; i++) {
symbols.push(1);
}

console.log(symbols);

let zero = "0";
let zeroWithPad = zero.padStart(4);
symbols.push(zeroWithPad);

const result = symbols.filter((item) => item === 1).concat(symbols.filter((item) => item !== 1));
console.log(result);