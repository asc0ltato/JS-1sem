var first = () =>{

	alert("Вас приветствует компания Oriflame");

	let userName = prompt("Введите имя");

	alert ('Добро пожаловать к нам, ' + userName)
	if (confirm("Вы хотите стать нашим сотрудником?")){
	        alert( "Вы приняты ^^," + userName)
	    } else {
	        alert("Ну и не надо :P")
	}
}

function second() {
	document.getElementById('output').innerHTML = 4 + 5 + "<br>";//возвращает ссылку на элемент, с указанным идентификатором(output)
	document.getElementById('output').innerHTML += "4" + "5" + "<br>";
	document.getElementById('output').innerHTML += "4" + 5 + "<br>";//свойство innerHTML позволяет получить HTML-содержимое элемента в виде строки
	document.getElementById('output').innerHTML += 5 + "4" + "<br>";
	alert("Результатом сложения строки и числа всегда будет строка");
}


function third () {
	let a = 200, b = 500;
	let num1 = (35*b-25*a)/5+232;
	let num2 = (8*b/a+5*a/b-43)*6;
	let num3 = (num2 % num1);
	document.getElementById('output').innerHTML = "Первое выражение равно: " + num1 + "<br>" + "Второе выражение равно: " + num2 + "<br>";
	document.getElementById('output').append ("Остаток от деления: " + num3) ;//метод append позволяет вставить в конец какого-либо элемента другой элемент
	alert(num1); 
	alert(num2);
}

function fourth(){
	let mam
    mam = prompt('Введите число');
if ((mam < 20 || mam > 40) && mam != 15 && mam % 5 == 0){
	alert("Правильное значение");
    } else {
	    alert("Неправильное значение");
    }

   if (mam > 1 && mam % 2 == 0){
	    alert ("Число четное")
   }	
}

function fifth(){
	let num1= prompt("Введите первое число");
	let num2= prompt("Введите второе число");

	if (num1 > num2)
		alert("Первое чило больше второго");
	else if (num2 > num1)
		alert("Второе число больше первого");
	else
		alert("Числа равны");

	let years = prompt("Сколько тебе лет?");
    years >= 18? alert("Привет") : alert("Пока");
	//let result = условие ? значение1 : значение2;
}

function sixth(){
let now = new Date();//создание объекта с текущей датой и временем(конструктор)
let day = now.getDay();//  возращает день недели
switch (day){
		case 1: 
			alert("Понедельник");
			break;
		case 2: 
			alert("Вторник");
			break;
		case 3: 
			alert("Среда");
			break;
		case 4: 
			alert("Четверг");
			break;
		case 5: 
			alert("Пятница");
			break;
		case 6: 
			alert("Суббота");
			break;
		case 0: 
			alert("Воскресенье");
			break;	
	}
}

function seventh(){
    let num;

    num = 0x000fff; // 16-ая: + -; 0x или 0X; a..F A..F; 0..9 
    alert (num + ' - 16-ая');

    num = 0o111; // 8-ая: + -; 0o или 0O; 0..7 
    alert (num + ' - 8-ая');

    num = 0b000; // 2-ая: + -; 0b или 0B; 0 и 1 
    alert (num + ' - 2-ая');
    
}

function eighth(){
	try {
		let x = 10, b = 5;
		let sum = x + b;
		console.log ('20' + sum); 
		
        console.lag (0+2);; // код

	} catch (err) {
		alert ('Error\n') // обработка ошибки
	}
	    alert('код продолжает выполнение');
}