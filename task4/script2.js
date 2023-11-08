
function setRandomLang() {
    switch (Math.floor(Math.random() * 2)) {
        case 0:
            return 'ru';
        case 1:
            return 'by';
    }
}

let lang = setRandomLang();
let week;

switch (lang) {
    case 'ru':
        week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        break;
    case 'by':
        week = ["Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота", "Нядзеля"];
        break;
}

alert(week);