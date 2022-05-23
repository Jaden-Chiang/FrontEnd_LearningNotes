### 102. DOM增删改
1. 
- `document.createElement()`：它需要一个标签名作为参数，将会根据标签名创建元素节点对象，并将创建好的对象作为返回值返回
- `document.createTextNode()`：可以创建一个文本对象，需要一个文本内容作为参数，将会根据该内容创建文本节点，并将新的节点返回
- `appendChild()`：向一个父节点中添加一个新的子节点，语法：父节点.appendChild(子节点);

```js
window.onload = function(){
    // 创建一个广州节点，添加到#city下
    myclick("btn01", function(){
        // 创建广州节点 <li>广州</li>
        // 1. 创建li元素节点
        var li = document.createElement("li");

        // 2. 创建广州文本节点
        var gztext = document.createTextNode("广州");

        // 3. 将gztext设置li的子节点
        li.appendChild(gztext);

        // 使用HTML也可以完成DOM的增删改的相关操作。但是这种方式动静很大，会把原有的删除掉再重新添加
        // 获取父节点city
        var city = document.getElementById("city");
        city.innerHTML += "<li>广州</li>"

        // 可以将上面两种方法结合使用
        // 1. 创建li元素节点
        var li = document.createElement("li");
        // 2. 向li中设置文本
        li.innerHTML = "广州";
        
        // 3. 将li添加到city中
        city.appendChild(li);
    });
```

2. 
- `insertBefore()`：可以在指定的子节点前插入新的节点。语法：父节点.insertBefore(新节点，旧节点);

```js
window.onload = function(){
    // 将“广州”节点插入多#bj前面
    myclick("btn02", function(){
        // 创建广州节点 <li>广州</li>
        var li = document.createElement("li");
        var gztext = document.createTextNode("广州");
        li.appendChild(gztext);

        // 获取id为bj的节点
        var bj = document.getElementById("bj");

        // 获取父节点city
        var city = document.getElementById("city");
        city.insertBefore(li, bj);
    });
```

3. 
- `replaceChild()`：可以使用指定的子节点替换已有的子节点。语法：父节点.replaceChild(新节点，旧节点);

```js
window.onload = function(){
    // 将“广州”节点替换#bj前面
    myclick("btn03", function(){
        // 创建广州节点 <li>广州</li>
        var li = document.createElement("li");
        var gztext = document.createTextNode("广州");
        li.appendChild(gztext);

        // 获取id为bj的节点
        var bj = document.getElementById("bj");

        // 获取父节点city
        var city = document.getElementById("city");

        city.replaceChild(li, bj);
    });
```

4. 
- `removeChild()`：可以删除子节点。语法：父节点.removeChild(子节点);

```js
window.onload = function(){
    // 将#bj节点删除
    myclick("btn04", function(){
        // 获取id为bj的节点
        var bj = document.getElementById("bj");

        // 获取父节点city
        var city = document.getElementById("city");

        city.removeChild(bj);

        // 可以使用下面的方法优化
        bj.parentNode.removeChild(bj);
    });
```