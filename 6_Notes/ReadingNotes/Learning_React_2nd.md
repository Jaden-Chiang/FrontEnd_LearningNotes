### Creating Functions

> One thing to be aware of when deciding between a function declaration and a function expression is that function declarations are hoisted（提升）and function expressions are not.

函数声明的方法可以将函数提升，而函数表达式不可以，箭头函数也不可以

```javascript
sayHello(); // could log the message
sayHi(); // will cause an error

function sayHello() {
    console.log("say Hello");
}

const sayHi = function() {
    console.log("say Hi");
}
```

- 函数表达式和箭头函数的区别：

  1. 写法不同

  2. `this` 的用法不同，可以参考：https://zhuanlan.zhihu.com/p/354848228，有一个重要的点是如果需要将函数作为回调函数执行，并且不希望函数中的 `this` 发生改变，那么应该使用**箭头函数**

     ```javascript
     class Test {
         constructor(name) {
             this.testName = name;
         }
     
         sayHello = () => {
             console.log(this.testName);
         }
     
         sayHi () {
             console.log(this.testName);
         }
     }
     
     const test = new Test('jaden');
     setTimeout(test.sayHello, 1000); // jaden
     setTimeout(test.sayHi, 1000); // error, 因为失去了上下文
     ```

  3. 普通函数有一个 `arguements` 参数，是传递的所有参数，而箭头函数没有