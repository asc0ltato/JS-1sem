let moving = false;
kit.onclick = function() {
    moving = !moving;
    let start = Date.now(); //запомнить время начала
    let timer = setInterval(function() { 
      let timePassed = Date.now() - start; //сколько времени прошло с начала анимации
      if (moving) {
        kit.style.left = timePassed / 2 + 'px';
         if (timePassed > 2000) { // закончить анимацию через 2 секунды
          clearInterval(timer);
        }
      }
      if (!moving) {
        kit.style.left = 0 + 'px';
        clearInterval(timer);
        }
    }, 20);
  } 