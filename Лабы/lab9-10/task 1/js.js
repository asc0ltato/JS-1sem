//Создать программу на JS, позволяющую перетащить мышью область текста и картинку
var elem = document.getElementById('ball');
elem.onmousedown = function(event) { // (1) отследить нажатие

  let shiftX = event.clientX - elem.getBoundingClientRect().left;
  let shiftY = event.clientY - elem.getBoundingClientRect().top;

  // (2) подготовить к перемещению:
  //разместить поверх остального содержимого и в абсолютных координатах
  elem.style.position = 'absolute'; 
  elem.style.zIndex = 1000;   
  // переместим в body, чтобы картинка была точно не внутри position:relative
  document.body.appendChild(elem); 
  // и установим абсолютно спозиционированную картинку под курсор

  moveAt(event.pageX, event.pageY);
    
  // передвинуть элемент под координаты курсора и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(pageX, pageY) {
    elem.style.left = pageX - shiftX + 'px';
    elem.style.top = pageY - shiftY + 'px';
  }

  function onmousemove(event){
    moveAt(event.pageX, event.pageY);
  }
   // (3) перемещать по экрану
   document.addEventListener('mousemove', onmousemove);

   // (4) положить картинку, удалить более ненужные обработчики событий
   elem.onmouseup = function() {
     document.removeEventListener('mousemove', onmousemove);
     elem.onmouseup = null;
   };
   //отключаем  Drag’n’Drop браузера
   elem.ondragstart = function() {
    return false;
  };
}

document.querySelector("textarea").addEventListener('click', function (event) {
  let div = event.target;
  let rect = div.getBoundingClientRect() // информация о размере и положении textarea
  let dx = event.pageX - rect.left;
  let dy = event.pageY - rect.top;
  div.style.background = 'silver'
  document.addEventListener('click', function handler(event) {
    div.style.left = event.pageX - dx + 'px'
    div.style.top = event.pageY - dy + 'px'
    div.style.background = ''
    document.removeEventListener('click', handler, true)
    event.stopPropagation() //прекращаем дальнейшую передачу события
  }, true)
})