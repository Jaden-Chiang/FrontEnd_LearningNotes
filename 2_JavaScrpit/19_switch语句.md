### 33. 条件分支语句
1. **条件分支语句**：在执行时，会依次将case后的表达式的值和switch后的条件表达式的值进行全等比较，如果比较结果是true，则从当前case处开始执行代码（case后的所有代码都会执行，因此需要`break`进行打断）；如果是false，就继续向下比较
```js
// 语法
switch(条件表达式) {
    case 表达式:
        语句...;
        // 使用break退出switch语句
        break;
    case 表达式:
        语句...;
        break;
    default:
        语句...;
        break;
}
```

2. switch与if效果差不多，可以互相代替