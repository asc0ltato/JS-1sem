//Задание 6. Создать объект. Добавить свойства объекту через defineProperty() с дескриптором доступа.

var obj = {}; // инициализируем переменную, содержащую объект

  value = "Баламошка^^";
Object.defineProperty(obj, 'objTwo', { //сам объект, добавляемое свойства(аксессор)
  get: function() { //получает значение свойства
    return value; 
  },
  set: function(newValue) { // присваивает значение определённому свойству объекта
    value = newValue; 
  }
});

console.log(obj.objTwo);