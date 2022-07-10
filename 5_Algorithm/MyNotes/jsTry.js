nums = [-2, -2, 1, 1, 4, 1, 4, 4, -4, -2];

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort();
    console.log(nums)

    for (var i = 0; i < nums.length; i++) {
        // 如果i位置的元素和i+1位置的元素相等，直接跳过
        if (nums[i] == nums[i + 1]) {
            i += 2;
        } else if (i = nums.length - 1) {
            return nums[i];
        } else {
            return nums[i];
        }
    }
};

var res = singleNumber(nums);
console.log(res);