### 66. clear & 68. clearfix
如果我们不希望某个元素因为其他元素浮动的影响而改变位置，可以通过`clear`属性来清除浮动元素对当前元素所产生的影响

clear
- 作用：清除浮动元素对当前元素的影响
- 可选值：
    - left：清除左侧元素对当前元素的影响
    - right：清除右侧元素对当前元素的影响
    - both：清除两侧较大元素对当前元素的影响
- 原理：
    设置清除浮动以后，浏览器会自动为元素添加一个上外边距以使其位置不受其他元素的影响

clearfix
- 作用：这个样式可以同时解决高度塌陷和外边距重叠的问题
```css
/* 固定写法 */
.clearfix::before, 
.clearfix::after {
    content: '';
    display: table;
    clear: both
}
/* 解决外边距重叠： */
/* .clearfix::before + display: table + clear: both */
/* 解决高度塌陷： */
/* .clearfix::after + content: '' + display: table + clear: both */
```