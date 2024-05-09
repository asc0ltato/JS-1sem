//Третье задание
let form = document.querySelector("form");
let button = document.querySelector("#print");
button.onclick = function print(){	
	document.write('<center>'+document.forms[0].textarea.value+'</center>' +'<br/>Студент ' + document.forms[0].lastName.value  + ' специальность ' + document.forms[0].elements[4].value +' курс ' + document.forms[0].elements[5].value + ' должен сдавать следующие предметы:' + '<ul>'+'<li>'+ document.forms[0].elements[9].value+'</li>'+'<li>'+ document.forms[0].elements[11].value+'</li>'+'<li>'+ document.forms[0].elements[13].value+'</li>'+'</ul>')
}
