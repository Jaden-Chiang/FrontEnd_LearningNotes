### 94. DOM查询

1. 获取元素节点
    - `getElementById()`：通过**id**属性获取**一个**元素节点对象
    - `getElementsByTagName()`：通过**标签名**获取**一组**元素节点对象
    - `getElementsByName()`：通过**name**属性获取**一组**元素节点对象

```html
<script type="text/javascript">
    window.onload = function(){
        // 查找btn01节点
        var btn01 = document.getElementById("btn01");
        btn01.onclick = function(){
            // 查找#bj节点
            var bj = document.getElementById("bj");
            // ineerHTML可以获取到元素内部的HTML代码
            document.write(bj.innerHTML);
        };

        // 查找btn02节点
        var btn02 = document.getElementById("btn02");
        btn02.onclick = function(){
            // 查找所有li节点
            // 这个方法会返回一个类数组对象（即使只有一个），所有查询到的元素都会封装到对象中
            var lis = document.getElementsByTagName("li");
            document.write(lis.length);
        };

        // 查找btn03节点
        var btn03 = document.getElementById("btn03");
        btn03.onclick = function(){
            // 查找name=gender的所有节点
            // 这个方法也会返回一个数组
            var inputs = document.getElementByName("gender");
            // ineerHTML可以获取到元素内部的HTML代码，但是对于自结束标签，如input等，这个标签没有意义
            // 如果需要读取一个元素节点的属性，直接使用 元素.属性名，例如 元素.id 元素.name
            // 但是注意！class属性不能采用这种方式（因为class是保留字）。读取class属性时，需要使用 元素.className。
            for (var i=0; i<inputs.length; i++) {
                alert(inputs[i].value);
                alert(inputs[i].classNmae);
            }
        };
    }
</script>
```


### 96. DOM查询
2. 获取元素节点的子节点
    通过具体的元素节点调用
    - `getElementsByTagName()`：**方法**，返回当前节点的指定标签名后代节点
    - `childNodes`：**属性**，返回当前节点的所有子节点
    - `firstChild`：**属性**，返回当前节点的第一个子节点
    - `lastChild`：**属性**，返回当前节点的最后一个子节点

```html
<script type="text/javascript">
    window.onload = function(){
        // 查找btn04节点
        var btn04 = document.getElementById("btn04");
        btn04.onclick = function(){
            // 查找#city元素
            var city = document.getElementById("city");
            // 查找city下所有li节点
            var lis = city.getElementsByTagName("li");
        };

        // 查找btn05节点
        var btn05 = document.getElementById("btn05");
        btn05.onclick = function(){
            // 查找#city元素
            var city = document.getElementById("city");
            // 查找city的所有子节点
            // 注意 childNodes 会获取包括元素节点、文本节点在内的所有子节点，包括DOM标签之间的空白（IE8及以上）！
            var cns = city.childNodes; 

            // children属性可以获取当前元素的所有子元素，更符合使用
            var cns2 = city.children;
        };

        // 查找btn06节点
        var btn06 = document.getElementById("btn06");
        btn06.onclick = function(){
            // 获取id为phone的元素
            var phone = document.getElementById("phone");
            // 获取#phone的第一个子节点
            // firstChild可以获取当前元素的第一个子节点（包括空白）
            var fir = phone.firstChild;
        };
    }
</script>
```


### 97. DOM查询
3. 获取父节点和兄弟节点
    通过具体的节点调用
    - `parentNode`：**属性**，表示当前节点的父节点
    - `previousSibling`：**属性**，表示当前节点的前一个兄弟节点
    - `nextSibling`：**属性**，表示当前节点的后一个兄弟节点

```html
<script type="text/javascript">
    // 定义一个函数，专门为指定元素绑定单击相应函数
    // 参数：idStr：要绑定单击响应函数的对象id属性值; fun: 事件的回调函数
    function myClick(idStr, fun){
        var btn = document.getElementById(idStr);
        btn.onclick = fun;
    }
    window.onload = function(){
        // 为id为btn07的元素绑定一个单击响应函数
        myClick("btn07", function(){
            // 返回#bj的父节点
            var bj = document.getElementById("bj");
            var pn = bj.parentNode;
            // innerText可以获取元素内部的文本内容，和innerHTML类似，不同的是它会自动将html标签去除
        });
        
        // 为id为btn08的元素绑定一个单击响应函数
        myClick("btn08", function(){
            // 返回#android的前一个兄弟节点，也可能获取到空白文本！
            var and = document.getElementById("android");
            var ps = and.previousSibling;
            // 返回#android前一个兄弟元素，IE8及以下不兼容
            var pe = and.previousElementSibling;

            // 返回#android的后一个兄弟节点，也可能获取到空白文本！
            var ns = and.nextSibling;
        });
    }
</script>
```


### 101. DOM查询的剩余方法
4. 在document中有一个属性`body`，它保存的是body的引用：`var body = document.body;`
5. 在document中有一个属性`documentElement`，它保存的是html根标签：`var html = document.documentElement;`
6. 在document中有一个属性`all`，代表页面中的所有元素：`var all = document.all;`

7. 根据元素的class属性值查询一组元素节点对象（IE8及以下不兼容！）
```js
// 获取页面中所有的div
var box1 = document.getElementsByClassName("box1");

// 获取class为box1中的div
// document.querySelector()  需要一个选择器的字符串作为参数，可以根据一个CSS选择器来查询一个元素节点对象
// 使用该方法，只能返回唯一的元素，如果满足条件的元素有多个，那么只会返回第一个
var div = document.querySelector(".box1 div");

// document.querySelectorAll(): 该方法和querySelector()类似，不同的是它会将符合条件的元素封装在一个数组中
```