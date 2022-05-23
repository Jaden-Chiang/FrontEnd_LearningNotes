### 80. arguments
1. 在调用函数时，浏览器每次都会传递两个隐含的参数
    - 函数的上下文对象`this`
    - 封装实参的对象`arguments`，arguments是一个类数组对象，它可以通过索引来操作数据，也可以获取长度。
        在调用函数时，我们所传递的实参都会在arguments中保存。`arguments.length`可以用来获取实参的长度。我们即使不定义形参，也可以使用arguments来使用实参（只不过比较麻烦）
        - `argument[0]`表示第一个实参
        - `argument[1]`表示第二个实参...

2. arguments()里有一个属性`callee`，这个属性对应一个函数对象，就是当前正在指向的函数对象