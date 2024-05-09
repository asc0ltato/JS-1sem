// Задание 5. Даны кнопки. Привяжите к каждой кнопке событие по клику, которое будет считать количество нажатий по кнопке и выводить его в текст
// кнопки. Количество нажатий для каждой кнопки должно хранится в замыкании.

const buttons = document.querySelectorAll('button'); 

function makeCounter() { // функция счетчика
  let count = 1;
  return function () {
    this.innerHTML = count; 
    return count++;
  };
}

for (let i=0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', makeCounter());
} 