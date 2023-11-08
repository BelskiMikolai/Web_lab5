
function multArr(arr) {
    let num = 1;
    for (let i = 0; i < arr.length; i++) {
        num *= arr[i];
    }
    return num;
}

let arr = [5, 6, 7, 8];

alert(multArr(arr));