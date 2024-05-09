const host = 'localhost';
const port = 8000;
const http = require("http");

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body> <script src="1.js"></script> <h1>This is HTML  </h1> <script>myFunction(); 
    function myFunction() {
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
        tr.appendChild(document.createElement("td")).innerHTML = "length";//URL, которые были посещены в данном окне браузера
        tr.appendChild(document.createElement("td")).innerHTML = history.length;//history для хранения истории посещений веб-страниц в браузере
    
        tr = table.appendChild(document.createElement("tr"));//location содержит информацию о расположении текущей веб-страницы: URL, информацию о сервере, номер порта, протокол. 
        tr.appendChild(document.createElement("td")).innerHTML = "href";//URL текущего документа целиком
        tr.appendChild(document.createElement("td")).innerHTML = location.href;
    
        tr = table.appendChild(document.createElement("tr"));
        tr.appendChild(document.createElement("td")).innerHTML = "pathname";//путь к загруженному документу
        tr.appendChild(document.createElement("td")).innerHTML = location.pathname;
    
        tr = table.appendChild(document.createElement("tr"));
        tr.appendChild(document.createElement("td")).innerHTML = "host";//имя домена загруженного документа
        tr.appendChild(document.createElement("td")).innerHTML = location.hostname;
        console.log(location.hostname);
        
    
        document.body.appendChild(table);
    }
    
    </script></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
    
});

