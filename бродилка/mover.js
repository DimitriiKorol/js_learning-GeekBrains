let mover = {
     /**
     * Проверяет может ли пользователь перейти на точку.
     * @param {{x: int, y: int}} nextPoint Точка, которую проверяем.
     * @returns {boolean} true если пользователь может перейти в направлении, false если нет.
     */
    canPlayerMakeStep(nextPoint) {
        if (nextPoint.x >= 0 && nextPoint.x < config.colsCount && nextPoint.y >= 0 && nextPoint.y < config.rowsCount) {
            return true;
        }
    },

    /**
    *Получаеыт и передает направление от пользователя.
    *returns {int} возвращаем направление, введенное пользователем
    */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];

        while (true) {
            let direction = parseInt(prompt('Введите число 1, 2, 3, 4, 6, 7, 8, 9 куда хотите переместиться. Для выхода наберите любую букву или слово.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8, 9.');
                continue;
            }
            return direction;
        }
    },

    /**
    *Отдает следующую точку, в которой будет находиться пользователь после движения
    *@param {int} direction Направление движения игрока
    *returns {{x: int, y: int }} следующая позиция игрока
    */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition;
    },
};
