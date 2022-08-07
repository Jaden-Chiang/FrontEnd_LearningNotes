var getDiff = function (a, b) {
    const len = a.length;
    let flag = 0;
    for (var i = 0; i < len; i++) {
        if (a.charAt(i) != b.charAt(i)) flag++;
        if (flag > 1) return false;
    }
    return true;
};

// var isContain = function (a, list) {
//     for (var i = 0; i < list.length; i++) {
//         if (a == list[i]) return true;
//     }
//     return false;
// };

// var list = 

// var isContain = function (a, list) {
//     let result = list.filter(checkContain);
//     if (result.length == list.length) return false;
//     return result;

//     function checkContain(value) {
//         return value != a;
//     }
// }

// 从列表中查找符合的单词
// var findWords = function (a, list) {
//     let result = [];
//     for (var i = 0; i < list.length; i++) {
//         if (getDiff(a, list[i])) result.push();
//     }
//     if (result.length == 0) return false;
//     return result;
// };


// console.log(getDiff("let", "lot"));
// console.log(isContain("let", list));

// 判断列表中有无单词
// const set1 = new Set(list);
// for (var key of set1.keys()) {
//     console.log(key);
// }

// var test = function (num) {
//     return (num++);
// };

// console.log(test(1));

var findList = ['cet', 'cot', 'col', 'dot', 'lot', 'pot', 'cat', 'cox',
    'cod', 'cog', 'con', 'tot', 'wot', 'cob', 'com', 'hot',
    'not', 'coo', 'coy', 'jot', 'got', 'cet', 'yet', 'yea',
    'set', 'let', 'vet', 'bet', 'yep', 'pet', 'yew', 'get',
    'net', 'wet', 'met', 'cet', 'cot', 'fat', 'cal', 'cat',
    'can', 'vat', 'eat', 'cap', 'bat', 'tat', 'nat', 'caw',
    'cad', 'cab', 'pat', 'cet', 'sew', 'yet', 'set', 'sec',
    'let', 'see', 'vet', 'bet', 'sen', 'pet', 'sgt', 'get',
    'net', 'wet', 'met', 'cet', 'lit', 'led', 'yet', 'lot',
    'set', 'let', 'vet', 'bet', 'leg', 'pet', 'get', 'lei',
    'net', 'wet', 'met', 'len', 'cet', 'yet', 'set', 'vat',
    'let', 'vet', 'bet', 'pet', 'get', 'net', 'wet', 'met',
    'cet', 'yet', 'but', 'bee',];
var result = [];
for (var i = 0; i < findList.length; i++) {
    console.log(findList[i])
    for (var j = 0; j < list.length; j++) {
        if (getDiff(findList[i], list[j])) result.push(list[j]);
    }
}
console.log(result);