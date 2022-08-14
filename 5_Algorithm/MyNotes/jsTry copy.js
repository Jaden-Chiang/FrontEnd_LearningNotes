
let array = [50, 10, 90, 30, 70, 40, 80, 60, 20];
function HeapSort(array) {
    let length = array.length; // 获取堆(完全二叉树)的节点数量
    HeapAdjust(array, length); // 调整为一个大顶堆
    console.log(array);
    for (let i = (length - 1); i > 0; i--) {
        swap(array, i, 0);
        HeapAdjust(array, (i - 1));
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
        let temp = array[n];
        if (leftChild < array.length && temp < array[leftChild]) {
            array[n] = array[leftChild];
            array[leftChild] = temp;
            temp = array[n];
        }
        if (rightChild < array.length && temp < array[rightChild]) {
            array[n] = array[rightChild];
            array[rightChild] = temp;
        }
        n--;
    }
}

HeapSort(array);
console.log(array);