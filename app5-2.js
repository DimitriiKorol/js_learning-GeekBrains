'use strict';

//Получаем необходимые кнопки и тэги
let buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', clickHandler);
});

function clickHandler(event) {
    let image = event.target.parentNode.querySelector('img');
    let desc = event.target.parentNode.querySelector('.desc');
    if (event.target.textContent == 'Подробнее') {
        image.style.display = 'none';
        desc.style.display = 'block';
        event.target.textContent = "отмена";
    } else if (event.target.textContent == "отмена") {
        image.style.display = 'block';
        desc.style.display = 'none';
        event.target.textContent = 'Подробнее';
    }


    console.log(image);
    console.log(desc);
    //event.target.parentNode.removeChild(2);
    console.log(event.target.parentNode);
}
