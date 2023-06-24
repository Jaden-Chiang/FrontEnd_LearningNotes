# Learning React

## Chapter 2. JavaScript for React

### Declaring Variables

#### Template Strings

> Template strings honor whitespace, making it easier to draft up email templates, code examples, or anything else that contains whitespace.

模板字符串支持空格，而使用以往的 `""` 不能进行换行

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

### Asynchronous JavaScript

#### Async/Await

> When using `async` and `await`, you need to surround your promise call in a `try...catch` block to handle any errors that may occur due to an unresolved promise.

使用 `async `和 `await` 时要用 `try...catch` 来捕获异常，相当于 `fetch...then...catch` 

```javascript
const getFakeInfo = async() => {
    try {
        let res = await fetch("url");
        let {results} = res.json();
    } catch (error) {
        console.log(error);
    }
};
getFakeInfo();
```



### ES6 Modules

> You can scope module variables locally under different variable names

```javascript
import { print as p, log as l } from './test';
```
### Chapter 3. Functional Programming with JavaScript

### Functional Concepts

> The core concepts of functional programming: immutability, purity, data transformation, higher-order functions and recursion.

- **Immutability**

  > In a functional program, data is immutable.

  函数式编程中，应该不改变原始数据，通过“修改数据副本”的方式来更改数据

- **Pure Functions**

  > A *pure function* is a function that returns a value that's computed based on its arguments. Pure functions take at least one argument and always return a value of another function.
  >
  > When write functions, try to follow these three rules:
  >
  > 1. The function should take in at least one argument.
  > 2. The function should return a value or another function.
  > 3. The function should not change or mutate any of its arguments.

  纯函数至少接受一个参数，然后返回一个值或方法。纯函数不应该有副作用（side effect），即执行函数的过程中，修改了DOM结构、其他对象等

- **Data Transformations**

  > `map` and `reduce` are the main weapons of any functional programmer, and JavaScript is no exception.

  `map`  和 `reduce` 是函数式编程的重要工具

  以`map`为例，如果需要根据`state`的不同，来渲染不同的`component`，那么可以写出对应的数组，然后通过`map`来自动生成对应的数组

  ```javascript
  const data = { one: "OneComp", two: "TwoComp", Three: "ThreeComp" };
  
  const result = Object.keys(data).map((item) => ({
    key: item,
    comp: data.item,
  }));
  
  console.log(result); /* =>[
    { key: 'one', comp: undefined },
    { key: 'two', comp: undefined },
    { key: 'Three', comp: undefined }
  ] */
  ```

  `reduce`的用处也有很多，比如可以对一个数组去重

  ```javascript
  const colors = ["red", "red", "blue", "green", "blue"];
  
  const uniqueColors = colors.reduce(
    (unique, color) =>
      unique.indexOf(color) !== -1 ? unique : [...unique, color],
    []
  );
  
  console.log(uniqueColors); // => [ 'red', 'blue', 'green' ]
  /*
  * 注：reduce() 接收两个参数，第一个参数是执行归并操作的函数，第二个参数是可选的，作为归并函数的初始值
  * 参数函数中，第一个参数为初始值，第二个参数为数组中遍历到的元素
  */
  ```

  再来看一个使用`reduce`获取数组最大值的方法

  ```javascript
  const ages = [21, 18, 42, 40, 64, 63, 34];
  
  const maxAge = ages.reduce((max, age) => {
      console.log(`${max} > ${age} ? ${max > age}`); // 21 > 18 ? true ; 21 > 42 ? false ...
      return max > age ? max : age
  })
  
  console.log(maxAge); // 64
  ```

- **Higher-Order Functions**

- **Recursion**



## Chapter 4. How React Works

### Page Setup

> ***React*** is the library for creating views. ***ReactDOM*** is the library used to actually render the UI in the browser.

### React Components

> Before there were function components, there were other ways to create components.

- **Tour stop 1: `createClass`**

  ```js
  const IngredientsList = React.createClass({
      displayName: "IngredientList",
      render() {
          return React.createElement(
          	"ul",
              { className: "ingredients" },
              this.props.items.map((ingredient, i) => React.createElement("li", { key: i }, ingredient)
            )
          );
      }
  });
  
  // Components that used createClass would have a render() method that described the React element(s) that would be returned and rendered.
  ```

- **Tour stop 2: class components**

  ```javascript
  class IngredientsList extends React.component {
      render() {
          return React.createElement(
          	"ul",
              { className: "ingredients" },
              this.props.items.map((ingredient, i) => React.createElement("li", { key: i }, ingredient))
          )
      }
  }
  ```



## Chapter 5. React with JSX

### React Element as JSX

> JSX works with components as well. Simply define the component using the class name.

![](D:\KuaFuPlan\FrontEndLearning\6_Notes\ReadingNotes\pictures\learning_react\5-1.png)

### Bebel

> JavaScript is an interpreted language: the browser interprets the code as text, so there's no need to compile JavaScript. However, not all browsers support the latest JavaScript syntax, and no browser supports JSX syntax. Since we want to use the latest features of JavaScript along with JSX, we're going to need a way to convert our fancy source code into something that the browser can interpret. This process is called compiling, and it's what **Babel** is designed to do.

JavaScript 是一种解释性语言，浏览器将代码解释为文本，因此无需编译。但是浏览器并不支持所有最新的JS语法以及JSX，因此需要将源码转换为浏览器可以解释的代码，这个过程称为编译，也就是**Babel**设计的目的



## Chapter 6. React State Management

### The useState Hook

> `Hooks` contain reusable code logic that is separate from the component tree. They allow us to hook up functionality to our components.

> The most important thing to remember about Hooks is that they can cause the component they're hooked into to rerender. Every time we invoke the `setSelectedStars` function to change the value of `selectedStars`, the `StarRating` function component will be reinvoked by the hook, and it will render again, this time with a new value for `selectedStars`. This is why Hooks are such a killer feature. When data within the hook changes, they have the power to render the component they're hooked into with new data.

`Hooks` 会让被 `hook` 的组件重新渲染，每一次我们调用`setSelectedStars`时，函数组件`StarRating`就会重新渲染一次。这也是为什么`Hooks`有致命的功能——当`hook`内部的数据产生改变时，它们有能力使用新的数据渲染组件
