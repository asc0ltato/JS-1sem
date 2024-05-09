//Создать программу на JS, изменяющую цвет слова в тексте при наведении курсора мыши
$(document).ready(function(){
    $(".task1").mouseover(function(){$(".task1").css("color","pink")});
    $(".task1").mouseout(function(){$(".task1").css("color","black")});
});

//Создать программу на JS, изменяющую размер шрифта слова щелчком мыши  
$(document).ready(function(){
    $(".task2").click(function(){$(".task2").css("font-size","30px")});
});

//Создать программу на JS замены картинки на другую при щелчке мышью
$(document).ready(function(){
    $("#task3").click(function(){$("#task3").attr("src","2.jpg")});
});

//Создать программу на JS, заменяющую текст изображением
$(document).ready(function(){
    $("#task4").click(function(){$('<img src="3.jpg">').replaceAll('#task4')});
});

//Создать эффекты увеличения размера рисунка
$(document).ready(function(){
    $("#task5").mouseover(function(){$("#task5").css("width","400px")});
    $("#task5").mouseout(function(){$("#task5").css("width","150px")});
});
    
//Нарисовать цветную рамку произвольного стиля вокруг абзаца при двойном щелчке на абзац
$(document).ready(function(){
    $("#task6").dblclick(function(){$("#task6").css("border","2px solid pink")});
});