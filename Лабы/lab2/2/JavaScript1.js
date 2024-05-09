let table = document.createElement("table"); //создаю таблицу table
document.body.append(table);// вернуть таблицу
let a = prompt("Введите первое число"); //запрашиваю размеры таблицы умножения
let b = prompt("Введите второе число");

for (let i = 1; i <= a; i++) {    //создаю цикл i от 1 до a включительно
	let tr = document.createElement("tr"); //создаю строку tr
	table.appendChild(tr); //метод appendChild - перемещает существующий элемент в новый контейнер,если у тебя всего один элемент, он будет переставляться на каждом повторении
	
	    for (let j = 1; j <= b; j++) { //создаю цикл j от 1 до b включительно
	        let td = document.createElement("td");  //создаю столбец td
	        tr.appendChild(td);

	    td.innerHTML = i * j;
	}
}