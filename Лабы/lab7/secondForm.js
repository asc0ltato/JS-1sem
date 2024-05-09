//Четвертое задание
let form = document.querySelector("form");
let button = document.querySelector("#pechat");
button.onclick = function pechat(event){
	event.preventDefault()
    let secondForm = document.createElement("form");
	let select =  secondForm.appendChild(document.createElement("select"));
	for (let i = 0; i < form.languages.length; i++) {
		if (form.languages[i].checked) {
		select.appendChild(document.createElement("option")).innerHTML = form.languages[i].value;
        }
	}	
	document.body.appendChild(secondForm);
}
