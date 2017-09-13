"use strict"
var searchNumber;
var i;
var massive = [];
var isFound = false;

for(i = 1; i <= 15; i++){
  var rndNumber = Math.floor(Math.random()  * (16-1)) + 1;
  massive[i]=rndNumber;
}

var enterNumber = prompt("Введите число для поиска в массиве");
alert("Введеное число:" + enterNumber);

for(i = 1; i <= 15; i++){
  if(massive[i]==enterNumber){
    isFound = true;
    break;
  }
}

if(isFound){
  alert("Число найдено");
} else {
  alert("Число не найдено");
}