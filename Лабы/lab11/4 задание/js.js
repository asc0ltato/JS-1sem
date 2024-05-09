// Получаем контекст
var ctx = $("#canvas")[0].getContext('2d');

// Нажали на кнопку y = x^2 - рисуем график в интервале [-10; 10]
$("#x2").click(function() {
    ctx.clearRect(0, 0, $("#canvas").width(), $("#canvas").height()); // Очищаем canvas
    ctx.strokeStyle = '#333'; // Задаем цвет линии осей
    // Рисуем оси с стрелками
    ctx.beginPath();
    // Ось X
    ctx.moveTo(0, $("#canvas").height() / 2);
    ctx.lineTo($("#canvas").width(), $("#canvas").height() / 2);
    // Ось Y
    ctx.moveTo($("#canvas").width() / 2, 0);
    ctx.lineTo($("#canvas").width() / 2, $("#canvas").height());
    // Стрелка оси X
    ctx.moveTo($("#canvas").width() - 10, $("#canvas").height() / 2 - 10);
    ctx.lineTo($("#canvas").width(), $("#canvas").height() / 2);
    ctx.lineTo($("#canvas").width() - 10, $("#canvas").height() / 2 + 10);
    // Стрелка оси Y
    ctx.moveTo($("#canvas").width() / 2 - 10, 10);
    ctx.lineTo($("#canvas").width() / 2, 0);
    ctx.lineTo($("#canvas").width() / 2 + 10, 10);
    ctx.stroke();

    let x = 0, y = 0; //Координаты точек функции
    let m = 30; //Масштаб
    let x0 = 200, y0 = 200; //Координаты начальной точки

    ctx.beginPath();
    // Задаем цвет линии самого графика, не осей
    ctx.strokeStyle = $("#color").val()
    for (let i = -10; i <= 10; i += 0.01) {
        x = i;
        y = x * x;
        ctx.lineTo(x0 + x * m, y0 - y * m);
    }
    ctx.stroke();
})

// Нажали на кнопку y = x^3 - рисуем график в интервале [-10; 10]
$("#x3").click(function() {
    ctx.clearRect(0, 0, $("#canvas").width(), $("#canvas").height()); // Очищаем canvas
    ctx.strokeStyle = '#333'; // Задаем цвет линии осей
    // Рисуем оси с стрелками
    ctx.beginPath();
    // Ось X
    ctx.moveTo(0, $("#canvas").height() / 2);
    ctx.lineTo($("#canvas").width(), $("#canvas").height() / 2);
    // Ось Y
    ctx.moveTo($("#canvas").width() / 2, 0);
    ctx.lineTo($("#canvas").width() / 2, $("#canvas").height());
    // Стрелка оси X
    ctx.moveTo($("#canvas").width() - 10, $("#canvas").height() / 2 - 10);
    ctx.lineTo($("#canvas").width(), $("#canvas").height() / 2);
    ctx.lineTo($("#canvas").width() - 10, $("#canvas").height() / 2 + 10);
    // Стрелка оси Y
    ctx.moveTo($("#canvas").width() / 2 - 10, 10);
    ctx.lineTo($("#canvas").width() / 2, 0);
    ctx.lineTo($("#canvas").width() / 2 + 10, 10);
    ctx.stroke();

    let x = 0, y = 0; //Координаты точек функции
    let m = 30; //Масштаб
    let x0 = 200, y0 = 200; //Координаты начальной точки

    ctx.beginPath();
    ctx.strokeStyle = $("#color").val()
    for (let i = -10; i <= 10; i += 0.01) {
        x = i;
        y = x * x * x;
        ctx.lineTo(x0 + x * m, y0 - y * m);
    }
    ctx.stroke();
})

// Нажали на кнопку y = sin(x) - рисуем график в интервале [-10; 10]
$("#sin").click (function() {
    ctx.clearRect(0, 0, $("#canvas").width(), $("#canvas").height()); // Очищаем canvas
    ctx.strokeStyle = '#333'; // Задаем цвет линии осей
    // Рисуем оси с стрелками
    ctx.beginPath();
    // Ось X
    ctx.moveTo(0, $("#canvas").height() / 2);
    ctx.lineTo($("#canvas").width(), $("#canvas").height() / 2);
    // Ось Y
    ctx.moveTo($("#canvas").width() / 2, 0);
    ctx.lineTo($("#canvas").width() / 2, $("#canvas").height());
    // Стрелка оси X
    ctx.moveTo($("#canvas").width() - 10, $("#canvas").height() / 2 - 10);
    ctx.lineTo($("#canvas").width(), $("#canvas").height() / 2);
    ctx.lineTo($("#canvas").width() - 10, $("#canvas").height() / 2 + 10);
    // Стрелка оси Y
    ctx.moveTo($("#canvas").width() / 2 - 10, 10);
    ctx.lineTo($("#canvas").width() / 2, 0);
    ctx.lineTo($("#canvas").width() / 2 + 10, 10);
    ctx.stroke();
    
    let x = 0, y = 0; //Координаты точек функции
    let m = 30; //Масштаб
    let x0 = 200, y0 = 200; //Координаты начальной точки

    ctx.beginPath();
    ctx.strokeStyle = $("#color").val()
    for (let i = -10; i <= 10; i += 0.01) {
        x = i;
        y = Math.sin(x);
        ctx.lineTo(x0 + x * m, y0 - y * m);
    }
    ctx.stroke();
})

// Нажали на кнопку y = cos(x) - рисуем график в интервале [-10; 10]
$("#cos").click (function() {
    ctx.clearRect(0, 0, $("#canvas").width(), $("#canvas").height()); // Очищаем canvas
    ctx.strokeStyle = '#333'; // Задаем цвет линии осей
    // Рисуем оси с стрелками
    ctx.beginPath();
    // Ось X
    ctx.moveTo(0, $("#canvas").height() / 2);
    ctx.lineTo($("#canvas").width(), $("#canvas").height() / 2);
    // Ось Y
    ctx.moveTo($("#canvas").width() / 2, 0);
    ctx.lineTo($("#canvas").width() / 2, $("#canvas").height());
    // Стрелка оси X
    ctx.moveTo($("#canvas").width() - 10, $("#canvas").height() / 2 - 10);
    ctx.lineTo($("#canvas").width(), $("#canvas").height() / 2);
    ctx.lineTo($("#canvas").width() - 10, $("#canvas").height() / 2 + 10);
    // Стрелка оси Y
    ctx.moveTo($("#canvas").width() / 2 - 10, 10);
    ctx.lineTo($("#canvas").width() / 2, 0);
    ctx.lineTo($("#canvas").width() / 2 + 10, 10);
    ctx.stroke();

    let x = 0, y = 0; //Координаты точек функции
    let m = 30; //Масштаб
    let x0 = 200, y0 = 200; //Координаты начальной точки

    ctx.beginPath();
    ctx.strokeStyle = $("#color").val()
    for (let i = -10; i <= 10; i += 0.01) {
        x = i;
        y = Math.cos(x);
        ctx.lineTo(x0 + x * m, y0 - y * m);
    }
    ctx.stroke();
})