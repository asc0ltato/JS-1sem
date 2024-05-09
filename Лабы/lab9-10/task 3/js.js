kit.onclick = function() {
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        kit.style.left = (timePassed/5) + 'px';
        kit.style.top = (timePassed/5) + 'px';
  
        if (timePassed > 1000) {
         clearInterval(timer);
        }
      }, 20);
    }