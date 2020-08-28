'use strict';

let game = {
    /**
    *Запускает игру
    */
    run() {
        while (true) {
            //Получаем направление от игрока
            const direction = mover.getDirection();
            if (direction === null) {
                console.log('Игра окончена');
                return;
            }
            // Получаем следующую точку пользователя в зависимости от направления.
            const nextPoint = mover.getNextPosition(direction);
            // Если пользователь может пройти на новую точку, то двигаем игрока.
            if (mover.canPlayerMakeStep(nextPoint)) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },

    //Этот метод выполняется при открытии страницы
    init() {
        console.log('Ваше положение на поле в виде О.');
        renderer.render();
        console.log('Чтобы начать игру наберите game.run() и нажмите Enter');
    },
};

game.init();
