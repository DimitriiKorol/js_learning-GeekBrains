'use strict';

//Получаем необходимые кнопки и тэги
let popupW = document.querySelector('.modalW')
let popupButton = document.querySelector('.popup');
let closeButton = document.querySelector('.closeW');

//Просто проверка
console.log(popupW);
console.log(popupButton);
console.log(closeButton);

//Событие на клик
popupButton.addEventListener('click', function(event) {
    popupW.style.display = "block";
});

//Событие закрытия окна
closeButton.addEventListener('click', function(event) {
    popupW.style.display = "none";
});
