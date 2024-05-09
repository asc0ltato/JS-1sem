// Задание 5. Создать объект со свойствами. Удалите несколько свойств с помощью rest. Результат вывести на экран.
const person = {
    name: "Svetlana",
    surname: "Zhuk",
    birthday:"20.10.2004",
    region: "Minsk"
}

const {birthday, region, ...rest } = person;
console.log(rest);