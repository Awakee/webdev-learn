"use strict"
var searchNumber;
var i;
var massive = [];
var isFound = false;
var checkNumber = false;

for(i = 1; i <= 15; i++) {
  var rndNumber = Math.floor(Math.random()  * (16-1)) + 1;
  massive[i] = rndNumber;
}

alert("Вывод массива без использования цикла.");
var demoShowMassive = massive.slice(1,16);
alert(demoShowMassive);

do {
  var enterNumber = prompt("Введите число для поиска в массиве");
  if(isNaN (enterNumber)) {
    alert("Ошибка, повторите ввод");
  } else {
    checkNumber = true;
  }
}while(checkNumber != true);

alert("Введеное число: " + enterNumber);

for(i = 1; i <= 15; i++) {
  if(massive[i] == enterNumber) {
    isFound = true;
    break;
  }
}

if(isFound) {
  alert("Число найдено");
} else {
  alert("Число не найдено");
}