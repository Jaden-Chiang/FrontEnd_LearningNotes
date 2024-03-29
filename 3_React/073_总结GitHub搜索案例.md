## 073. 总结GitHub搜索案例

### 1. 设计状态时要考虑全面，例如带有网络请求组件，要考虑请求失败怎么办

### 2. ES6小知识点：解构赋值 + 重命名
```js
let obj = {a:{b:1}};
const {a} = obj; // 传统结构赋值
const {a:{b}} = obj; // 连续解构赋值
const {a:{b:value}} = obj; // 连续解构赋值+重命名
```

### 3. 消息订阅与发布机制
1. 先订阅，再发布（理解：有一种隔空对话的感觉）
2. 适用于任何组件间的通信
3. 要在组件的`componentWillUnmount`中取消订阅

### 4. `fetch`发送请求（关注分离的设计思想）
```js
try {
   const response = await fetch('api1/...');
   const data = await response.json();
   console.log(data);
} catch (error) {
   console.log('请求出错', error);
}
```

