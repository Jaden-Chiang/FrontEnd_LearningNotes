### 102

#### First Try

```js
var levelOrder = function(root) {
    // 排除特殊情况
    if (root == null) {
        return
    }

    // 创建返回结果，root不为空，则res初始时直接加入root.val
    var res = [[root.val]];

    // 创建结点列表
    var nodeList = [];

    // 创建临时结点列表
    var tempList = [];

    // 创建结点值列表
    var varList = [];

    function hasChild(root) {
        if (root.left != null) {
            nodeList.push(root.left);
        }
        if (root.right != null) {
            nodeList.push(root.right);
        }

        tempList = nodeList;
    }

    function addVal()

};
```
