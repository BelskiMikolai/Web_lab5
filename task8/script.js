
num1 = prompt("Число 1");
num2 = prompt("Число 2");

let compare = (num1, num2) =>
    (num1 > num2) ? 1 : 
    (num1 < num2) ? 0 :
    -1 ;

alert(compare(num1, num2));
