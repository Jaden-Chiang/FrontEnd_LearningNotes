### 126. less的简介

**less**是一门css的预处理语言
- less是一个css的增强版，通过less可以编写更少的代码实现更强大的样式
- less中添加了许多的新特性，如对变量的支持、对mixin的支持
- less的语法大致与css一支，但是less中增添了许多对CSS的扩展，所以浏览器无法直接执行less代码，要执行必须将less转换为css

```css
/* css原生的变量设置方式 */
html {
    --color: #bfa;
}

.box1 {
    /* calc是一个计算函数 */
    width: calc(200px*2);
    height:100px;
    color: var(--color);
}
```

**less使用方式**：
新建`xx.less`，在里面输入，保存后自动生成`xx.css`文件

### 127. less的语法

```less
// less中的单行注释，不会被解析到css文件中
/* css中的注释，可以被解析到css文件中 */
.box1 {
    background-color: #bfa;

    .box2 {
        background-color: #ff0;
    }

    .box3 {
        background-color: red;
    }
}
```

- 变量的语法：
    - 变量的命名：`@变量名`
    - 变量的使用：
        - 如果是直接使用，使用`@变量名`即可
        - 如果是作为类名、属性名，或者一部分值使用时，使用`@{变量名}`
        - 变量发生重名时，会优先使用比较近的变量
    - `&`：表示外层的父元素
    - `:extend()`：对当前选择器扩展指定选择器的样式（相当于继承（）内元素的样式），扩展还可以创建mixins，参照下方代码

```less
@a: 100px;
@b: #bfa
@c: box6;

.box1 {
    width: @a;
    background-color: @b;
}

.@{c} {
    width: @a;
    background-image: url("@{c}/1.png");
}

// 使用类选择器时可以在选择器后面添加一个括号，创建了一个mixins
.p1() {
    width: 100px;
    height: 200px;
}
// mixins的使用
.p2 {
    .p1;
}
```
