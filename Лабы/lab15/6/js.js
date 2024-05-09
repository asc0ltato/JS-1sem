//Задание 6. Создать объект с помощью оператора spread. Удалить несколько свойств с помощью rest. 
// Добавить своё Имя и Фамилию с помощью spread. Результат вывести на экран.
const firstPerson = {
    name:"Lera",
    surname: "Rybakova",
    birthday:"15.04.2005",
}

const secondPerson = {
    fName:"Nastya",
    fSurname: "Babak",
    fBirthday:"30.12.2004",
}

const firstPersonAndsecondPerson = {...firstPerson,...secondPerson};
const {fBirthday, birthday, ...rest} = firstPersonAndsecondPerson;
const firstPersonAndsecondPersonWithName = {myName:"Sveta", mySurname:"Zhuk",...rest};
console.log(firstPersonAndsecondPersonWithName);