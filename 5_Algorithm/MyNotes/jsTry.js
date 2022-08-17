let array = [11, 10, 65, 9, 8, 20, 7, 6, 5, 4, 3, 2, 1, 101];

function mergeSort(array) {
    let tempArray = [];// 创建一个额外数组存放结果
    let k = 1;
    while (k < array.length) {
        array = mergePass(array, tempArray, k, array.length);
        k *= 2; // 每次循环的子序列长度加倍
    }
    return array;
}

function mergePass(oldArray, newArray, k, length) {
    let i = 0;
    while (i <= length - 2 * k) { // 设定循环结束条件
        newArray = newArray.concat(merge(oldArray.slice(i, i + k), oldArray.slice(i + k, i + 2 * k)));
        i = i + 2 * k;
    }
    if (length - i > k) {
        return newArray.concat(merge(oldArray.slice(i, i + k), oldArray.slice(i + k, length)));
    } else {
        return newArray.concat(oldArray.slice(i));
    }
}

var merge = function (left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
        result.push(
            left[i] < right[j] ? left[i++] : right[j++]
        );
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

console.log(mergeSort(array));