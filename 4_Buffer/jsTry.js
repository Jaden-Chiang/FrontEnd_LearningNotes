var findKthLargest = function (nums, k) {
    let heapSize = nums.length;
    buildMaxHeap(nums, heapSize);
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, i, 0);
        heapSize--;
        heapAdjust(nums, 0, heapSize);
    }
    return nums[0];
};

function buildMaxHeap(nums, heapSize) {
    for (let i = Math.floor((heapSize - 2) / 2); i >= 0; i--) {
        heapAdjust(nums, i, heapSize);
    }
}

function heapAdjust(nums, i, heapSize) {
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    let max = i;
    if (leftChild < heapSize && nums[max] < nums[leftChild]) {
        max = leftChild;
    }
    if (rightChild < heapSize && nums[max] < nums[rightChild]) {
        max = rightChild;
    }
    if (max != i) {
        swap(nums, i, max);
        // 递归交换后面的节点
        heapAdjust(nums, max, heapSize);
    }
    n--;
}

swap = (nums, a, b) => {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(findKthLargest(nums, 4));