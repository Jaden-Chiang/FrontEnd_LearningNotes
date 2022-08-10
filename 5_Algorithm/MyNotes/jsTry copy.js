// 本代码为参考模板自己编写
function shellSort(array) {
    let i;
    let j;
    let increment = array.length;
    let temp;
    do {
        increment = parseInt(increment / 3 + 1); // 增量序列
        for (i = increment; i < array.length; i++) {
            if (array[i] < array[i - increment]) {
                temp = array[i];
                for (j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
                    array[j + increment] = array[j];
                }
                array[j + increment] = temp;
            }
        }
    } while (increment > 1);

    return array;
}

let array = [9, 1, 5, 8, 3, 7, 4, 6, 2];
console.log(shellSort(array));