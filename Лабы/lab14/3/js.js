// Задание 3. Написать свои имя и фамилию так, чтобы в начале имени были произвольные символы, а в конце фамилии свой возраст.
function rest() {
    let name = prompt('Введите имя');
    let surname = prompt('Введите фамилию');
    let age = prompt('Введите возраст');
    let randSymb = Math.random().toString(36).substring(2, 15);
    
    let nameWithRandomSymbols = randSymb + name;
    
    let surnameWithAge = surname + age;
    
    console.log(nameWithRandomSymbols + ' ' + surnameWithAge);
} 
rest();