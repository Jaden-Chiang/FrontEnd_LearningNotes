/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {

    // 获取单词的长度，本题中len是常量
    const len = beginWord.length;

    // 判断两个单词是否只相差一个字母
    var getDiff = function (a, b) {
        let flag = 0;
        for (var i = 0; i < len; i++) {
            if (a.charAt(i) != b.charAt(i)) flag++;
            if (flag > 1) return false;
        }
        return true;
    };

    /*
    * @param{array} findlist: 需要查找的单词列表
    * @param{set} wordSet: 目前有的单词集合
    * @param{number} res: 结果
    * @return{number} res
     */
    var findWay = function (findList, wordSet, result) {
        while (wordSet.size != 0) {
            result++;
            let findTimes = findList.length;
            for (var i = 0; i < findTimes; i++) {
                for (var checkWord of wordSet.keys()) {
                    if (getDiff(checkWord, findList[i])) {
                        findList.push(checkWord);
                        wordSet.delete(checkWord);
                    }
                }
            }
            findList.splice(0, findTimes);
        }

        return result;
    };

    // 根据单词列表创建集合
    const wordSet = new Set(wordList);
    let res = 0;
    // 如果endWord不在wordList中，直接返回0，否则将直接删除
    if (wordSet.delete(endWord) === false) return res;
    res = findWay([beginWord], wordSet, res);

    return res;
};

console.log(ladderLength(beginWord, endWord, wordList));