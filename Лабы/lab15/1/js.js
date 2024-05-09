//Задание 1. Сделать так, чтобы точка в регулярных выражениях соответствовала абсолютно всем символам, включая \n. (пересмотреть?)

let str = /first.second/.test('first\nsecond');
console.log(str);

let point =  /first.second/s.test('first\nsecond'); //.test проверяет, есть ли хоть одно совпадение
console.log(point);

let res = 'Я люблю\n пиццу';
console.log(res.match(/люблю./s));