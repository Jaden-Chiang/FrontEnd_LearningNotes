## MAP

### 1. 参考文章
[MDN JS MAP](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

### 2. 常用方法
#### 2.1 实例方法
- `Map.prototype.clear()`
移除 Map 对象中所有的键值对。

- `Map.prototype.delete(key)`
移除 Map 对象中指定的键值对，如果键值对存在并成功被移除，返回 true，否则返回 false。调用 delete 后再调用 Map.prototype.has(key) 将返回 false。

- `Map.prototype.get(key)`
返回与 key 关联的值，若不存在关联的值，则返回 undefined。

- `Map.prototype.has(key)`
返回一个布尔值，用来表明 Map 对象中是否存在与 key 关联的值。

- `Map.prototype.set(key, value)`
在 Map 对象中设置与指定的键 key 关联的值 value，并返回 Map 对象。

#### 2.2 迭代方法
- `Map.prototype[@@iterator]()`
返回一个新的迭代对象，其为一个包含 Map 对象中所有键值对的 [key, value] 数组，并以插入 Map 对象的顺序排列。

- `Map.prototype.keys()`
返回一个新的迭代对象，其中包含 Map 对象中所有的键，并以插入 Map 对象的顺序排列。

- `Map.prototype.values()`
返回一个新的迭代对象，其中包含 Map 对象中所有的值，并以插入 Map 对象的顺序排列。

- `Map.prototype.entries()`
返回一个新的迭代对象，其为一个包含 Map 对象中所有键值对的 [key, value] 数组，并以插入 Map 对象的顺序排列。

- `Map.prototype.forEach(callbackFn[, thisArg])`
以插入的顺序对 Map 对象中存在的键值对分别调用一次 callbackFn。如果给定了 thisArg 参数，这个参数将会是回调函数中 this 的值。

#### 2.3 实例属性
- `Map.prototype.size`
返回 Map 对象中的键值对数量