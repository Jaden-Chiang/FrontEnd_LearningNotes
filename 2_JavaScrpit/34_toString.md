### 68. toString
1. 当我们在页面中打印一个对象时，实际上输出的是对象的`toString()`方法的返回值，如果我们希望在输出对象时不希望输出`[Object Object]`，可以为对象添加一个`toString()`方法

```js
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var per = new Person("my-name", 18, "man");
// 如下两个输出是一样的
console.log(per);
console.log(per.toString());

// 为对象添加toString()方法
per.toString = function(){
    return "new words";
};
```

