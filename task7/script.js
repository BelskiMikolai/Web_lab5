
function isEqual(num1, num2) {
    return num1 == num2;
}

function isSumMoreThan10(num1, num2) {
    return num1 + num2 > 10;
}

function isNegative(num) {
    return num < 0;
}

//проверка
alert("2 == 2 " + isEqual(2, 2) + "; 2 == 3 " + isEqual(2, 3));
alert("5 + 5 " + isSumMoreThan10(5, 5) + "; 5 + 6 " + isSumMoreThan10(5, 6));
alert("5 " + isNegative(5) + "; -6 " + isNegative(-6));