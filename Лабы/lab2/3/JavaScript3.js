let table = document.createElement("table");
document.body.append(table);
let a= new Number(prompt("Введите число a"));
let b= new Number(prompt("Введите число b"));
let tr = table.appendChild(document.createElement('tr'));
tr.appendChild(document.createElement("td")).innerHTML = "Радиус";
tr.appendChild(document.createElement("td")).innerHTML = "Площадь круга";
tr.appendChild(document.createElement("td")).innerHTML = "Длина окружности";

do {
	tr = table.appendChild(document.createElement('tr'));
	tr.appendChild(document.createElement('td')).innerHTML = a.toFixed(1);//представляет число в форме с фиксированным количеством цифр после точки
	tr.appendChild(document.createElement('td')).innerHTML = Math.round(Math.PI * Math.pow(a, 2));//
	tr.appendChild(document.createElement('td')).innerHTML = Math.round( 2 * Math.PI * a)//округляет число до ближайшего целого;

	a += 0.3;
} 
while(a <= b)

