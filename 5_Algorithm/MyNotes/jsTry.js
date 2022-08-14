
let array = [5, 10, 90, 130, 70, 240, 80, 60, 20, 6, 33, 95, 76];
function HeapSort(array) {
    let length = array.length; // 获取堆(完全二叉树)的节点数量
    for (let i = length; i > 0; i--) {
        swap(array, i, 0);
        HeapAdjust(array, i);
    }
}

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

var HeapAdjust = function (array, length) {
    let n = parseInt((length - 2) / 2);
    while (n >= 0) {
        let leftChild = n * 2 + 1; // 左子节点编号
        let rightChild = n * 2 + 2; // 右子节点编号
        let max = n;
        if (leftChild < length && array[max] < array[leftChild]) {
            max = leftChild;
        }
        if (rightChild < length && array[max] < array[rightChild]) {
            max = rightChild;
        }
        if (max != n) {
            swap(array, max, n);
        }
        n--;
    }
}

HeapSort(array);
console.log(array);