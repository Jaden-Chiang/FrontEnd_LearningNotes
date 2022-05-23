### 44. break和continue
1. `break`只对离它最近的循环产生影响，如果要对外层的产生影响，可以添加一个`label`来进行标识
```js
outer:
for(var i=0; i<5; i++) {
    console.log('外层循环');
    for (var j=0; j<5; j++) {
        break outer;
        console.log('内层循环')；
    }
}
```

2. `continue`可以用来跳过当次循环，同样，continue也是默认对最近的循环起作用

3. `console.time()`可以用来开启一个计时器，需要一个字符串作为参数，这个字符串会作为计时器的标识
4. `console.timeEnd()`用来停止一个计时器，也需要一个字符串作为参数
