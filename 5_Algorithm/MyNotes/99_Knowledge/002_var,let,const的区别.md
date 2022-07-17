## var,let,const的区别
## 1. 参考文章
[Difference between var, let and const keywords in JavaScript](https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/)

### 2. 作用范围
**优先使用`let` 和 `const` ，不要使用`var`!**
- `var`
Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function. 
> 全局作用域或者方法作用域。在方法外部定义的变量，全局都可以访问；而在特定方法内部定义的变量在方法作用域内部可以访问

- `let`
The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). 
> let只能在某一块区域起作用，该作用范围之外不能访问；而且let定义的变量在该块不能再次使用let新建，但是在该块外可以

```js
// Users cannot re-declare the variable defined with the let keyword but can update it.
// For Example:
let a = 10;

// It is not allowed
let a = 10;

// It is allowed
a = 10;
```

```js
// Users can declare the variable with the same name in different blocks using the let keyword.
// For Example:

let a = 10;
if (true) {
	let a=9;
	console.log(a); // It prints 9
}
console.log(a); // It prints 10
```

- `const`
When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared. 
> 在声明变量时必须赋值，而且一经赋值就不可修改