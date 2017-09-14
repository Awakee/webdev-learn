"use strict"
var searchNumber;
var i;
var arrNumbers = [];
var isFound = false;

for(i = 1; i <= 15; i++) {
  var rndNumber = Math.floor(Math.random()  * (16-1)) + 1;
  arrNumbers[i] = rndNumber;
}

alert("Вывод массива без использования цикла.");
var demoShowarrNumbers = arrNumbers.slice(1,16);
alert(demoShowarrNumbers);

var enterNumber = prompt("Введите число для поиска в массиве");

if(isNaN(enterNumber)) {
  alert("Ошибка, повторите ввод");
  windows.stop()
}

if((enterNumber == "")) {
  alert("Ошибка, заполните поле.");
  windows.stop()
}

alert("Введеное число: " + enterNumber);

var searchElement = arrNumbers.filter(function(number) {
  return number == enterNumber;
});

if (searchElement == false) {
  alert("Элемент не найден");
} else {
  alert("Элемент найден. " + searchElement);
}
