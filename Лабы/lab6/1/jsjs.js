var newWin;

function first() {
    newWin =  window.open("");
}

function second() {
    newWin.document.body.innerHTML+="Привет, я первое окошко"+ newWin.name;
}

function third() {
    newWin.close();
}

let table = document.createElement("table");
let tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "Свойство";
tr.appendChild(document.createElement("td")).innerHTML = "Значение";
 
tr = table.appendChild(document.createElement("tr"));//navigator содержит информацию о браузере и операционной системе, в которой браузер запущен   
tr.appendChild(document.createElement("td")).innerHTML = "userAgent";//информация о браузере
tr.appendChild(document.createElement("td")).innerHTML = navigator.userAgent;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "appVersion";//версия браузера 
tr.appendChild(document.createElement("td")).innerHTML = navigator.appVersion;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "appName";//название браузера 
tr.appendChild(document.createElement("td")).innerHTML = navigator.appName;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "appCodeName";//кодовое название браузера
tr.appendChild(document.createElement("td")).innerHTML = navigator.appCodeName;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "platform";//ОС
tr.appendChild(document.createElement("td")).innerHTML = navigator.platform;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "javaEnabled()";//включена ли поддержка Java в браузере пользователя  
tr.appendChild(document.createElement("td")).innerHTML = navigator.javaEnabled();

tr = table.appendChild(document.createElement("tr"));//Объект Screen содержит информацию об экране пользователя
tr.appendChild(document.createElement("td")).innerHTML = "height";//высота экрана
tr.appendChild(document.createElement("td")).innerHTML = screen.height;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "width";//ширина экрана
tr.appendChild(document.createElement("td")).innerHTML = screen.width;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "colorDepth";//глубина цвета(бит на пиксель)
tr.appendChild(document.createElement("td")).innerHTML = screen.colorDepth;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "length";//history для хранения истории посещений веб-страниц в браузере
tr.appendChild(document.createElement("td")).innerHTML = history.length;//URL, которые были посещены в данном окне браузера

tr = table.appendChild(document.createElement("tr"));//location содержит информацию о расположении текущей веб-страницы: URL, информацию о сервере, номер порта, протокол. 
tr.appendChild(document.createElement("td")).innerHTML = "href";//URL текущего документа целиком
tr.appendChild(document.createElement("td")).innerHTML = location.href;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "pathname";//путь к ресурсу
tr.appendChild(document.createElement("td")).innerHTML = location.pathname;

tr = table.appendChild(document.createElement("tr"));
tr.appendChild(document.createElement("td")).innerHTML = "hostname";//имя хоста
tr.appendChild(document.createElement("td")).innerHTML = location.hostname;

document.body.appendChild(table);
