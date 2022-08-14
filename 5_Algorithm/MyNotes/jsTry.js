const array = [8, 7, 6, 5, 4, 3, 2, 1];

function mergeSort(array) {
    if (array.length > 1) { // 设置递归的结束条件，即子序列长度为1
        const length = array.length;
        const middle = Math.floor(length / 2); // Math.floor是取不小于括号中数字的最小整数
        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle, length));
        array = merge(left, right);
    }
    return array;
}

var merge = function (left, right) {
    let i = 0;
    let j = 0;
    const result = []; // 记录返回的结果
    while (i < left.length && j < right.length) {
        result.push(
            left[i] < right[j] ? left[i++] : right[j++]
        );
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

console.log(mergeSort(array));