
let salary = +prompt("Введите зарплату:") ?? 0;

function getResult(salary) {
    let bonus = salary * 0.15;
    let tax = (salary + bonus) * 0.1;
    let result = salary - tax + bonus;
    alert(`В итоге с премией и с вычитом нологов: ${result} р.`);
    result -= 90;
    alert(`После трат в магазине: ${result} р.`);
    if (result > 0) {
        result /= 2;
        alert(`Жене половину отдал. Осталось сколько?`);
    }
    return result;
}

alert(`Осталось: ${getResult(salary)} р.`)