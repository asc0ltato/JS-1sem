// Задание 3. Создайте объект с именем proto. Задайте свойства: имя, фамилия, отчество. Добавьте метод, выводящий содержимое этих свойств на
// экран. Используйте объект proto как прототип и создайте новый объект с именем proto2 (использовать Object.create()). Измените свойство имя и
// вызовите метод вывода содержимого свойств на экран.
let proto = { 
    surname: "Zhuk",     
    name: "Svetlana",  
    patronymic: "Sergeevna",
    displayType: function() {  //метод отображающий тип объекта proto  
        document.write(this.name);
    }        
};

console.log(proto); 

let proto2 = Object.create(proto);
    proto2.name = "Olya";
    proto2.displayType();