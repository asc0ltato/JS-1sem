//Первое задание
function Gruppa(num, speciality, amount) { //создаем пользовательский объект Gruppa
	//Свойства(номер, специальность, количество)
	this.num = num; //Значение this – это объект «перед точкой», который используется для вызова метода
	this.speciality = speciality; //в данном случае устанавливаются три свойства num, speciality и amount
	this.amount = amount;

	//Добавяем в группу k студентов
	this.add_stud = function add_stud(k) { //добавляем метод add_stud
		this.amount += k;
		document.write('В группу №' + this.num + ' добавили ' + k + ' студента. <br>');
	}
	//Убраем из группы k студентов
	this.sub_stud = function sub_stud(k){ //добавляем метод sub_stud
		this.amount -= k;
		document.write('Из группы №' + this.num + ' отчислили ' + k + ' студента.<br>')
	}
 }

let isit2 = new Gruppa(2, 'ИСиТ', 30); //Создаем несколько экземпляров объекта Gruppa(isit2, poit5)
isit2.add_stud(3); //применяем методы add_stud и sub_stud к каждому экземпляру
isit2.sub_stud(4);
let poit5 = new Gruppa(5, 'ПОИТ', 30);
poit5.add_stud(1);
poit5.sub_stud(3);
console.log(isit2);
console.log(poit5);
document.write('<br><br>');

//Второе задание
function Student(name, second_name, physics, math, informatics, biology){ //создаем пользовательский объект Student
	this.name = name; //в данном случае устанавливаются пять свойств name, second_name, physics, math и informatic
	this.second_name = second_name;
	this.physics = physics;
	this.math = math;
	this.informatics = informatics;
	this.biology = biology; //Добавляем свойство biology объекту Student
	
	
	this.avg_rating = function avg_rating(){
		document.write('Средний балл студента по имени ' + this.name + ' равен ' + ((this.physics + this.math + this.informatics + this.biology) / 4).toFixed(2) + '<br>');
	}

	this.introduce = function introduce(){ //выведем свое имя и фамилию в окно с помощью метода introduce
		alert('Фамилия и имя студента ' + this.name + ' ' + this.second_name);
	}

	this.info = function info(){
		document.write('Иформация о студенте:<br>' + 'Фамилия: ' + this.second_name + '<br>Имя: ' + this.name + '<br>Оценка по физике: ' + this.physics + '<br>Оценка по математике: ' + this.math + '<br>Оценка по информатике: ' + this.informatics + '<br>Оценка по биологии: ' + this.biology + '<br>');		
	}
}

let stud1 = new Student('Светлана', 'Жук', 8, 9, 10, 8); //Создаем 3 экземпляра объекта Student
let stud2 = new Student('Стас', 'Бекер', 10, 10, 10, 9);
let stud3 = new Student('Алексей', 'Бабицкий', 9, 10, 10, 9);

stud1.info(); //выведем информацию о всех студентах
stud1.avg_rating();
document.write('<br>');
stud2.info();
stud2.avg_rating();
document.write('<br>');
stud3.info();
stud3.avg_rating();
document.write('<br>');

//Третье задание
console.log('Третье задание');
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);//выводим массив исходный массив 
delete arr[2];// удаляем элемент из массива под номером 3 и на месте его выводится empty
console.log(arr);

console.log(1 in arr); //проверяем имеется ли у массива 2-й элемент
console.log('add_stud' in Gruppa); //проверим наличие свойств add_stud и chemistry у созданных ранее пользовательских объектов Gruppa и Student
console.log('chemistry' in Student);

console.log(arr instanceof Array);//проверяем являются ли созданные объекты объектами Array, String, Object.
console.log(stud1 instanceof Object);
console.log(isit2 instanceof String);

function return5(){ // cоздаем функцию, которая просто возвращает значение 5
	return 5;
}
console.log('Gruppa'); //тип объектов, включая функцию
console.log(typeof Gruppa);
console.log(typeof Gruppa.prototype.name); //тип всех свойств пользовательских объектов Gruppa и Student
console.log(typeof Gruppa.prototype.add_stud);
console.log(typeof Gruppa.prototype.sub_stud);			
console.log(typeof isit2.add_stud);
console.log(typeof isit2.sub_stud);
console.log(typeof isit2);
console.log('Student');
console.log(typeof Student);
console.log(typeof Student.prototype.avg_rating);
console.log(typeof Student.prototype.introduce);
console.log(typeof Student.prototype.info);
console.log(typeof stud1);
console.log(typeof stud1.name);
console.log(typeof stud1.second_name);
console.log(typeof stud1.physics);
console.log(typeof stud1.math);
console.log(typeof stud1.informatics);
console.log(typeof stud1.biology);
console.log('arr');
console.log(typeof arr);
console.log(typeof return5);