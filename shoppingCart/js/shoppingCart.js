'use strict';

//Получаем данные
let cartBtn = document.querySelector('.cartBtn');
let shopCart = document.querySelector('.shopCart');
let cartProds = document.querySelector('.cartProds');
let sumShow = document.querySelector('.sumShow');

//получаем входящие массивы данных
let product = document.querySelectorAll('.product');
let buyBtns = document.querySelectorAll('.prodButton');

//Перебираем массив на клики
buyBtns.forEach(function(button) {
    button.addEventListener('click', buyClick);
});

//обработчик клика "В корзину"
function buyClick(event) {
    let id = event.target.getAttribute('data-id');
    let prodTitle = event.target.parentNode.querySelector('.prodTitle').textContent;
    let prodPrice = +event.target.parentNode.querySelector('.prodPrice').textContent;
    cartProds.childNodes[1] = ;
}
