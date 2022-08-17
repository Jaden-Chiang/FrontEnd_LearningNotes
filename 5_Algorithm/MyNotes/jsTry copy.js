var merge = function (left, right, newArray) {
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        newArray.push(
            left[i] < right[j] ? left[i++] : right[j++]
        );
    }
    newArray = newArray.concat(i < left.length ? left.slice(i) : right.slice(j));
    console.log(newArray);
}

let newArray = [];
// console.log(merge([6, 8], [5, 7]));
// console.log(newArray);

merge([6, 8], [5, 7], newArray);
console.log(newArray);
