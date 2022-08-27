// 创建一个Person类
class Person {
    // 构造器方法
    constructor(name, age) {
        // 构造器中的this是谁？—— 类的实例对象
        this.name = name;
        this.age = age;
    }
    // 一般方法
    speak() {
        console.log(`My name is ${this.name}`);
    }
}
// 创建一个Person实例对象
const p1 = new Person('XiaoMing', 18);
console.log(p1);
p1.speak();