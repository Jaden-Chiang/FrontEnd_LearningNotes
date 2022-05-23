### 81. Date对象
1. 在JS中使用`Date`对象来表示一个时间
```js
// 创建一个Date对象
// 如果直接使用构造函数创建一个Date对象，则会封装为当前代码执行的时间
var d = new Date();

// 创建一个指定的时间对象
// 需要在构造函数中传递一个表示时间的字符串对象
// 日期格式： 月/日/年 时:分:秒
var d2 = new Date("12/03/2018 11:11:55");

// getDate()：获取当前日期对象是几号
var date = d2.getDate();

// getDay()：获取当前是星期几，会返回0（周日）- 6（周六）
var day = d2.getDay();

// getMonth()：获取当前时间对象的月份，返回0（1月）- 11 （12月）
var month = d2.getMonth();

// getFullYear()：获取年份
var year = d2.getFullYear();

// getTime()：获取当前日期对象的时间戳
// 时间戳：从格林威治标准时间的1970年1月1日，0时0分0秒到现在的毫秒数。计算机底层在保存时间时使用的都是时间戳
var time = d2.getTime();

// now()：获取当前的时间戳
time = Date.now();
```