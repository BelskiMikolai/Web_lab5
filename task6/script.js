
function sqrt(num) {
    return num *= num;
}

function sum(num1, num2) {
    return num1 + num2;
}

function calcNum(num1, num2, num3) {
    return (num1 - num2) / num3;
}

function getDay(numOfDay) {
    dayOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    return dayOfWeek[numOfDay - 1] ?? "В неделе от 1 до 7 дней";
}

//Проверка
alert("3 ^ 3 = " + sqrt(3));
alert("2 + 2 = " + sum(2, 2));
alert("(3 - 2) / 2 = " + calcNum(3, 2, 2));
alert("0: " + getDay(0) + " 2: " + getDay(2));