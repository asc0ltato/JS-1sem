let userName, a, b, c

first();
second();
third();
fourth();
fifth();
sixth();
seventh();
eighth();

function first() {
    alert ('Вас приветствует компания Oriflame')
    userName = prompt ('Введите имя')
    alert ('Добро пожаловать к нам, ' + userName)

    if (confirm('Вы хотите стать нашим сотрудником?')){
            alert ('Вы приняты ^^')
        } else {
            alert ('Ну и не надо :P')
        }
}    

function second(){
    console.log (32 + 6)
    console.log ('04' + '43')
    alert(123 + '9');
    alert('23' + 4);
    prompt ("Результатом сложения строки и числа всегда будет...");
}


function third (){
    a = 50
    b = 300

    alert ((35*b - 25*a)/5 + 232)
    alert (( 8*b/a + 5*a/b - 43) *6)
    alert(b%a)
}

function fourth(){
    let mam = 12

    if ((mam < 20 || mam > 40) && mam != 15 && mam % 5 == 0){
        alert ('Правильное значение')
        } else {
        alert ('Неправильное значение')
        }

    if (mam > 1 && mam % 2 == 0){
        alert ('Число четное')
    }
}


function fifth(){
    let mam1, mam2;
    mam1 = 3;
    mam2 = 2;

    comparison (mam1, mam2);

    mam1 = 1;
    mam2 = 2;

    comparison(mam1, mam2)

}   

function comparison(fnum, snum){
    if (fnum> snum){
        console.log ('Первое число больше второго');
    } else if (fnum == snum){
        console.log ('Числа равны');
    } else {
        console.log ('Второе число больше первого');
    }
}


function sixth(){
    let date = new Date();
    let day = date.getDay();
    weekDay (day);
}

function weekDay (day){
    switch (day){
        case 0:
            console.log ('Воскресенье')
            break;
        case 1: 
            console.log ('Понедельник')
            break;
        case 2: 
            console.log ('Вторник')
            break;
        case 3: 
            console.log ('Среда')
            break;
        case 4:
            console.log ('Четверг')
            break;
        case 5:
            console.log ('Пятница')
            break;
        case 6: 
            console.log ('Суббота')
            break; //если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.

    }
}

function seventh(){
    let num;

    num = 0x000fff; // 16-ая: + -; 0x или 0X; a..F A..F; 0..9 
    console.log (num + ' - 16-ая');

    num = 0o111; // 8-ая: + -; 0o или 0O; 0..7 
    console.log (num + ' - 8-ая');

    num = 0b000; // 2-ая: + -; 0b или 0B; 0 и 1 
    console.log (num + ' - 2-ая');
    
}

function eighth(){
    try {
        let x = 10, b = 5;
        let sum = x + b;
        console.log ('20' + sum); 
        console.lag (0+2); // код
    } catch (err) {
        console.log ('Error\n') // обработка ошибки
    }
    console.log('код продолжает выполнение');
}   





