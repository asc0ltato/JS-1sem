// Получаем элемент canvas
var canvas = document.getElementById('canvas');
// Получаем контекст
var ctx = canvas.getContext('2d');

// Нажали на кнопку y = x^2 - рисуем график в интервале [-10; 10]
document.getElementById('x2').onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем canvas
    ctx.strokeStyle = 'black'; // Задаем цвет линии осей
    // Рисуем оси с стрелками
    ctx.beginPath(); // начинаем контур
    // Ось X
    ctx.moveTo(0, canvas.height / 2);//  передвигаем точку контура в заданные координаты не рисуя линию
    ctx.lineTo(canvas.width, canvas.height / 2);//добавляем новую точку контура и создает линию к этой точке от последней заданной точки
    // Ось Y
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    // Стрелка оси X
    ctx.moveTo(canvas.width - 10, canvas.height / 2 - 10);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.lineTo(canvas.width - 10, canvas.height / 2 + 10);
    // Стрелка оси Y
    ctx.moveTo(canvas.width / 2 - 10, 10);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2 + 10, 10);
    ctx.stroke(); //рисуем контур

    let x = 0, y = 0; //Координаты точек функции
    let m = 30; //Масштаб
    let x0 = 200, y0 = 200; //Координаты начальной точки

    ctx.beginPath();
    // Задаем цвет линии самого графика, не осей
    ctx.strokeStyle = document.getElementById('color').value;
    for (let i = -10; i <= 10; i += 0.01) {
        x = i;
        y = x * x;
        ctx.lineTo(x0 + x * m, y0 - y * m);
    }
    ctx.stroke();
}

// Нажали на кнопку y = x^3 - рисуем график в интервале [-10; 10]
document.getElementById('x3').onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем canvas
    ctx.strokeStyle = 'black'; // Задаем цвет линии осей
    // Рисуем оси с стрелками
    ctx.beginPath();
    // Ось X
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    // Ось Y
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    // Стрелка оси X
    ctx.moveTo(canvas.width - 10, canvas.height / 2 - 10);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.lineTo(canvas.width - 10, canvas.height / 2 + 10);
    // Стрелка оси Y
    ctx.moveTo(canvas.width / 2 - 10, 10);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2 + 10, 10);
    ctx.stroke();

    let x = 0, y = 0; //Координаты точек функции
    let m = 30; //Масштаб
    let x0 = 200, y0 = 200; //Координаты начальной точки

    ctx.beginPath();
    ctx.strokeStyle = document.getElementById('color').value;
    for (let i = -10; i <= 10; i += 0.01) {
        x = i;
        y = x * x * x;
        ctx.lineTo(x0 + x * m, y0 - y * m);
    }
    ctx.stroke();
}

// Нажали на кнопку y = sin(x) - рисуем график в интервале [-10; 10]
document.getElementById('sin').onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем canvas
    ctx.strokeStyle = 'black'; // Задаем цвет линии осей
    // Рисуем оси с стрелками
    ctx.beginPath();
    // Ось X
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    // Ось Y
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    // Стрелка оси X
    ctx.moveTo(canvas.width - 10, canvas.height / 2 - 10);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.lineTo(canvas.width - 10, canvas.height / 2 + 10);
    // Стрелка оси Y
    ctx.moveTo(canvas.width / 2 - 10, 10);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2 + 10, 10);
    ctx.stroke();

    let x = 0, y = 0; //Координаты точек функции
    let m = 30; //Масштаб
    let x0 = 200, y0 = 200; //Координаты начальной точки

    ctx.beginPath();
    ctx.strokeStyle = document.getElementById('color').value;
    for (let i = -10; i <= 10; i += 0.01) {
        x = i;
        y = Math.sin(x);
        ctx.lineTo(x0 + x * m, y0 - y * m);
    }
    ctx.stroke();
}

// Нажали на кнопку y = cos(x) - рисуем график в интервале [-10; 10]
document.getElementById('cos').onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем canvas
    ctx.strokeStyle = 'black'; // Задаем цвет линии осей
    // Рисуем оси с стрелками
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    // Ось X
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    // Ось Y
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    // Стрелка оси X
    ctx.moveTo(canvas.width - 10, canvas.height / 2 - 10);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.lineTo(canvas.width - 10, canvas.height / 2 + 10);
    // Стрелка оси Y
    ctx.moveTo(canvas.width / 2 - 10, 10);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2 + 10, 10);
    ctx.stroke();

    let x = 0, y = 0; //Координаты точек функции
    let m = 30; //Масштаб
    let x0 = 200, y0 = 200; //Координаты начальной точки

    ctx.beginPath();
    ctx.strokeStyle = document.getElementById('color').value;
    for (let i = -10; i <= 10; i += 0.01) {
        x = i;
        y = Math.cos(x);
        ctx.lineTo(x0 + x * m, y0 - y * m);
    }
    ctx.stroke();
}