//Первое задание
function span1() {  //изменяюем цвет слова в тексте при наведении курсора мыши
	let span1 = document.getElementById("span1");
		span1.style.color = "red";
}

//Второе задание
function span2() {  //изменяюем размер шрифта слова щелчком мыши
	let span2 = document.getElementById("span2");
		span2.style.fontSize = "20px";
}

//Третье задание
function clicker() { //замена картинки на другую при щелчке мышью с помощью метода getElementById и свойства src
    document.getElementById("image").src="1.jpg";
};

//Четвертое задание
function span4() { //заменяем текст изображением, с использованием метода getElementById и свойства innerHTML.
	document.getElementById("span4").innerHTML="<img src='3.jpg'>";
}

// Пятое задание 
function img() { //эффекты увеличения размера рисунка при наведении курсора мыши и возврата к первоначальному размеру при уходе курсора с рисунка
	document.getElementById("img").parentNode.innerHTML = '<img src="5.jpg" onmouseover="bigImg(this)" onmouseout="littImg(this)"">';
}

function bigImg(x) {
	x.style.height = '720px';
	x.style.width = '1480px';
	}

function littImg(x) {
	x.style.height = '500px';
    x.style.width = '500px';
}

//Шестое задание
    function six() {//нарисуем цветную рамку произвольного стиля вокруг любого абзаца при двойном щелчке на абзац
	let p = document.querySelector("#six");
	p.style.border = "3px outset LightPink";
	p.style.borderLeft = "3px outset MediumPurple";
	p.style.borderRight = "3px outset MediumPurple";
}