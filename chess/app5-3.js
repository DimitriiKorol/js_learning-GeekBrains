'use strict';

//Делаем из строк массивы (лень потому что)
let rows = "87654321".split("");
let cols = 'abcdefgh'.split("");

//Получаем объект куда вставлять ячейки
let table = document.querySelector('.table');

/**Здесь с помощью for и вложенного for создаем
 *поле шахмат и колонку с номерами полей
 */
for (var i = 0; i < rows.length; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (var n = 0; n <= cols.length; n++) {
        let td = document.createElement('td');
        if (n == 0) {
            td.className = "nums";
            td.innerHTML = rows[i];
        } else if (i % 2 == 0) {
            td.className = "whites";
        } else {
            td.className = "blacks";
        }
        tr.append(td);
    }
}

// А здесь создаем строку для букв...
let thead = document.createElement('tr');
table.insertAdjacentElement('afterbegin', thead);

//... генерируем буквы и вставляем их
for (var i = 0; i <= cols.length; i++) {
    if (i == 0) {
        let tdcols = document.createElement('td');
        thead.append(tdcols);
    } else if (i != 0) {
        let tdcols = document.createElement('td');
        tdcols.className = "letters";
        tdcols.innerHTML = cols[i-1];
        thead.append(tdcols);
    }
}
