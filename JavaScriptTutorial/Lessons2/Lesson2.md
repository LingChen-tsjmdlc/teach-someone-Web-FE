# 1. JS 的运算符

## 1.1 数学运算符

| 运算符 | 描述                                               | 实例 (A=10,B=20)           |
| ------ | -------------------------------------------------- | -------------------------- |
| +      | 加法运算符，对运算符左右两边的操作数执行加法操作   | A + B 值为 30              |
| -      | 减法运算符，对运算符左右两边的操作数执行减法操作   | A - B 值为 -10             |
| \*     | 乘法运算符，将运算符左右两边的操作数相乘           | A \* B 值为 200            |
| /      | 除法运算符，使用运算符左边的操作数除以右边的操作数 | B / A 值为 2               |
| %      | 取模运算符，整除后的余数                           | B % A 值为 0 (21/10=2...1) |
| ++     | 自增运算符，整数值增加 1                           | A++ 值为 11 (A=A+1)        |
| --     | 自减运算符，整数值减少 1                           | A-- 值为 9 (A=A-1)         |

## 1.2 赋值运算符

| 运算符 | 描述                               | 实例                               |
| ------ | ---------------------------------- | ---------------------------------- |
| =      | 右边的等左边的                     | var a = 10                         |
| +=     | 变量本身加上符号后面的值           | a += 10(就是 a=a+10，现在 a 是 20) |
| -=     | 变量本身减去符号后面的值           | a -= 5(就是 a=a-10，现在 a 是 15)  |
| \*=    | 变量本身 × 符号后面的值            |                                    |
| /=     | 变量本身 ÷ 符号后面的值            |                                    |
| %=     | 变量等于变量本身对符号后面进行取余 | a %= 10                            |

## 1.3 比较运算符

### 1.3.1 ==

1. 含义：比较两个值是否相等，不管数据类型
2. 例子：

```JS
1 == "1" // 为 true
```

### 1.3.2 ===

1. 含义：比较两个值是否相等，数据类型也要相同
2. 例子：

```JS
1 === "1" // 为 flase
1 === 1 // 为 true
```

### 1.2.3 !=

1. 含义：比较两个值是否不相等
2. 例子：

```JS
  1 != "1" // 为 flase
```

### 1.2.4 !==

1. 含义：比较两个值和数据类型是否不相等
2. 例子：

```JS
  1 !== "1" // 为 true
```

### 1.2.5 >=

1. 含义：比较左边的值是否大于等于右边的值
2. 例子：

```JS
  1 >= 1 // 为 true
  1 >= 0 // 为 true
  1 >= 2 // 为 false
```

### 1.2.6 <=

1. 含义：比较左边的值是否小于等于右边的值
2. 例子：

```JS
  1 <= 1 // 为 true
  1 <= 0 // 为 flase
  1 <= 2 // 为 true
```

### 1.2.7 >

1. 含义：比较左边的值是否大于右边的值
2. 例子：

```JS
  1 > 1 // 为 flase
  1 > 0 // 为 true
  1 > 2 // 为 flase
```

### 1.2.7 <

1. 含义：比较左边的值是否小于右边的值
2. 例子：

```JS
  1 < 1 // 为 flase
  1 < 0 // 为 flase
  1 < 2 // 为 true
```

## 1.3 逻辑运算符

### 1.3.1 && (and)

1. 含义：进行且运算
2. 例子：

```JS
  true && true    // true
  true && flase   // false
  flase && true   // flase
  flase && flase  // flase
```

3. 只要一个为假的，都为假

### 1.3.2 || (or)

1. 含义：进行或运算
2. 例子：

```JS
  true || true    // true
  true || flase   // true
  flase || true   // true
  flase || flase  // flase
```

3. 只要一个为真的，都为真

### 1.3.3 !

1. 含义：取反运算
2. 例子：

```JS
  !true   // flase
  !flase  // true
```

3. 反转 bool 值即可

## 1.4 三元运算符

1. 含义：简化版本的 if-else 语句
2. 例子：

```JS
  var a = 10

  isNaN(a) ? console.log(a) : console.log("为假")
  // 值为 10


  if (isNaN(a)){
    console.log(a)
  }
  else{
    console.log("为假")
  }
```

3. 语法：`if的判断条件 ? 为真的时候执行的语句 : 为假的时候执行的语句`

# 2. 语句

## 2.1 if / if else / if else if 语句

- 含义：做判断用
- 基础语法:

```JS
if(条件){
  // 如果条件成立，就会执行的代码
}
```

- if-else 结构

```js
if (条件) {
  // 如果条件成立，就会执行的代码
} else {
  // 如果条件不成立，就会执行的代码
}
```

- if-else if 结构

```js
if (条件1) {
  // 如果条件1成立，就会执行的代码
} else if (条件2) {
  // 如果条件2成立，就会执行的代码
} else {
  // 如果上面条件不成立，就会执行的代码
}
```

- 可以嵌套

```js
if (条件1) {
  if (条件2) {
    // 条件1和条件2都为真时执行
  }
}
```

- 例子：

```js
var score = 85;

if (score >= 90) {
  console.log("优秀");
} else if (score >= 80) {
  console.log("良好"); // 这里会输出
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}
```

## 2.4 switch 语句

- 含义：用于多条件分支选择，比多个 if-else 更清晰
- 基础语法：

```js
switch (表达式) {
  case 值1:
    // 当表达式结果等于值1时执行
    break;
  case 值2:
    // 当表达式结果等于值2时执行
    break;
  default:
  // 当没有匹配的case时执行
}
```

- 特点：

  - 使用 break 防止"穿透"（继续执行下一个 case）
  - case 值可以是常量表达式
  - 严格比较（===）

- 例子：

```js
var day = 1;
var dayName;

switch (day) {
  case 1:
    dayName = "星期一";
    break;
  case 2:
    dayName = "星期二";
    break;
  case 3:
    dayName = "星期三"; // 这里会执行
    break;
  default: // default 这个单词是 "默认" 的意思
    dayName = "未知";
}
```

## 2.5 for 语句

- 含义：用于循环执行代码块
- 基础语法：

```js
for (初始化; 条件; 迭代) {
  // 循环体
}
for (; 条件; 迭代) {
  // 循环体
}
for (初始化; 条件; ) {
  // 循环体
}
for (初始化; ; 迭代) {
  // 循环体
}
for (;;) {
  // 循环体
}
```

- 变体：
  - 可以省略初始化（如果已在外部声明）
  - 可以省略迭代部分（需在循环体内处理）
  - 可以省略所有部分，创建无限循环
- 例子：

```js
// 基本用法
for (var i = 0; i < 5; i++) {
  console.log(i); // 输出0,1,2,3,4
}

// 遍历数组
var arr = [10, 20, 30];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 无限循环
for (;;) {
  // 需要内部有break条件
}
```

## 2.6 while 语句

- 含义：当条件为真时重复执行代码块
- 基础语法：

```js
while (条件) {
  // 循环体
}
```

- 变体(do-while：确保至少执行一次)

```js
do {
  // 循环体
} while (条件);
```

- 注意事项：

  - 必须有改变条件的语句，否则会无限循环
  - 适合不确定循环次数的场景

- 例子：

```js
// 基本while
var i = 0;
while (i < 5) {
  console.log(i); // 输出0,1,2,3,4
  i++;
}

var i = 0;
while (i < 5) {
  i++;
  console.log(i); // 输出1，2，3，4，5
}

// do-while
var j = 0;
do {
  console.log(j); // 至少输出一次0
  j++; // 现在 j 是 1
} while (j < 5);

// 读取输入直到满足条件
var input;
while (input !== "quit") {
  input = prompt("输入quit退出");
}
if (input === "quit") {
  exit();
}
```

# 3. break 和 continue

## 3.1 break 语句

2. 特点：
   - 立即终止当前循环
   - 在嵌套循环中，只跳出最内层循环
   - 在 switch 中用于防止 case 穿透
3. 语法：

```js
break;
```

4. 使用场景：

- 循环中找到目标后提前退出
- switch 语句中每个 case 结束

- 例子：

```JS
// 在for循环中使用
for(var i = 0; i < 10; i++) {
  if(i === 5) {
    break; // 当i等于5时跳出循环
  }
  console.log(i); // 输出0,1,2,3,4
}

// 在switch中使用
var fruit = 'apple';
switch(fruit) {
  case 'banana':
    console.log('香蕉');
    break;
  case 'apple':
    console.log('苹果'); // 输出"苹果"
    break;
  default:
    console.log('未知水果');
}
```

## 3.2 continue 语句

1. 解释：跳过当前循环的剩余语句，直接进入下一次循环
2. 特点：

- 不会终止整个循环 , 只是跳过当前迭代
- 在 while 循环中需要注意可能造成无限循环

3. 语法

```js
continue;
```

4. 使用场景：

- 跳过某些特定条件的迭代
- 过滤不需要处理的数据

5. 例子：

```js
// 跳过偶数
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // 跳过偶数
  }
  console.log(i); // 输出1,3,5,7,9
}

// 在while循环中使用
var n = 0;
while (n < 5) {
  n++;
  if (n === 3) {
    continue; // 跳过n=3的迭代
  }
  console.log(n); // 输出1,2,4,5
}
```

## 3.3 对比总结

| 特性         | break        | continue         |
| ------------ | ------------ | ---------------- |
| 作用         | 完全终止循环 | 跳过当前迭代     |
| 循环后续执行 | 不再执行     | 继续下一次迭代   |
| 使用场景     | 提前退出循环 | 过滤特定条件迭代 |
| switch 语句  | 必须使用     | 不能使用         |

# 4. 数组

## 4.1 创建数组

JavaScript 创建数组的几种方式：

1. 使用 Array 构造函数：

```JS
var myArry = new Array();
myArry[0] = "a"

var myArry1 = new Array("a","b","c");
```

2. 使用数组字面量（推荐）：

```js
var colors = ["red", "green", "blue"];
var emptyArray = [];
```

3. 创建指定长度的数组：

```js
var fixedLengthArray = new Array(5); // 创建长度为5的空数组
```

## 4.2 数组的基本操作

### 1. 访问元素

```js
var fruits = ["Apple", "Banana", "Orange", "Mango", "Pear"];
console.log(fruits[0]); // 输出 "Apple"
console.log(fruits[2]); // 输出 "Orange"
console.log(fruits.length); // 输出 5
```

### 2. 修改元素

```js
fruits[1] = "Pear"; // 修改第二个元素
```

### 3. 添加元素

```JS
// 添加到数组末尾
fruits.push("Mango");

// 添加到数组开头
fruits.unshift("Strawberry");
```

## 4.3 数组的常用方法

### 1. 删除元素

```js
// 删除最后一个元素
fruits.pop();

// 删除第一个元素
fruits.shift();
```

### 2. 查找元素

```js
var position = fruits.indexOf("Banana"); // 返回索引（所以说这里返回是1)或-1
```

### 3. 切片和拼接

```js
// 切片
var citrus = fruits.slice(1, 3); // ["Banana", "Orange"]
// 拼接
var removedItems = fruits.splice(1, 2, "Lemon", "Kiwi");
// ["Apple","Lemon", "Kiwi" , "Mango", "Pear"]
```

## 4.4 数组遍历

### 1. for 循环

```js
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### 2. forEach 方法(常用)

```JS
fruits.forEach((item, index, array) => {
  console.log(item, index, array);
});
```

- 参数讲解:

| 参数位置 | 参数名 | 含义                     | 是否可选               |
| -------- | ------ | ------------------------ | ---------------------- |
| 1        | item   | 当前遍历到的数组元素     | 必选，但参数名可自定义 |
| 2        | index  | 当前元素的索引（0 开始） | 可选                   |
| 3        | array  | 正在遍历的数组本身       | 可选                   |

### 3. map 方法

```js
var fruits = ["apple", "banana", "orange"];
var lengths = fruits.map((item, index, array) => {
  console.log(item, index, array);
  return item.length; // lengths 的结果是 [5, 6, 6]
});
```

### 【补充: return 关键字——还东西用的】

#### 补 1. 当前学过的两种方法对比

| 方法        | 要不要 return | 为什么               |
| ----------- | ------------- | -------------------- |
| **map**     | ✅ **必须**   | 要"还"新值组成新数组 |
| **forEach** | ❌ **不要**   | 只是做事，不"还"东西 |

#### 补 2.【示例对比】

```javascript
var fruits = ["apple", "banana", "orange"];

// 1. forEach - 不要 return
fruits.forEach((item) => {
  console.log(item); // 只是做事情
  // 这里写不写 return 都没用
});

// 2. map - 必须 return
var lengths = fruits.map((item) => {
  return item.length; // 必须"还"一个值回去！
  // 这个值 (lengths) 会成为新数组的元素
});
// lengths = [5, 6, 6]

// ❌ 错误写法
var wrong = fruits.map((item) => {
  item.length; // 没写 return，结果都是 undefined！
});
// wrong = [undefined, undefined, undefined]
```

#### 记住

**"用 forEach 只看不拿，用 map 看了还要拿回来"**

- **forEach**：像**参观博物馆** - 只看展品，不带走东西
- **map**：像**购物** - 看中什么，要拿回来（return）结账

## 4.5 数组其他高阶方法

### 4.5.1 filter 方法

```javascript
// 过滤数组，返回新数组
var numbers = [1, 2, 3, 4, 5, 6];

// 过滤出偶数
var evenNumbers = numbers.filter((item, index, array) => {
  return item % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6]

// 过滤水果名称长度大于2的
var fruits = ["apple", "kiwi", "banana", "pear"];
var longFruits = fruits.filter((fruit) => {
  return fruit.length > 3;
});
console.log(longFruits); // ["apple", "banana", "pear"]
```

- **作用**：过滤数组元素，返回满足条件的新数组
- **返回值**：新数组（不改变原数组）
- **回调要求**：必须返回布尔值
- **参数**：与 forEach 相同

### 4.5.2 find 方法

```javascript
// 查找第一个符合条件的元素
var users = [
  { name: "张三", age: 20 },
  { name: "李四", age: 25 },
  { name: "王五", age: 20 },
];

// 查找年龄为20的第一个用户
var user = users.find((item, index, array) => {
  return item.age === 20;
});
console.log(user); // { name: "张三", age: 20 }

// 查找水果
var fruits = ["apple", "banana", "orange"];
var fruit = fruits.find((item) => {
  return item.startsWith("b"); // startsWith 就是使用某某开头的意思
});
console.log(fruit); // "banana"
```

- **作用**：查找第一个符合条件的元素
- **返回值**：找到的元素，找不到返回 undefined
- **参数**：与 forEach 相同

### 4.5.3 some 方法

```javascript
// 检查数组中是否至少有一个元素满足条件
var numbers = [1, 3, 5, 7, 8];

// 检查是否有偶数
var hasEven = numbers.some((item, index, array) => {
  return item % 2 === 0;
});
console.log(hasEven); // true

// 检查水果中是否有"apple"
var fruits = ["banana", "orange", "apple"];
var hasApple = fruits.some((fruit) => {
  return fruit === "apple";
});
console.log(hasApple); // true
```

- **作用**：检查数组中是否至少有一个元素满足条件
- **返回值**：布尔值
- **参数**：与 forEach 相同

### 4.5.4 every 方法

```javascript
// 检查数组中的所有元素是否都满足条件
var scores = [85, 90, 92, 88, 95];

// 检查是否所有成绩都及格（>=60）
var allPass = scores.every((item, index, array) => {
  return item >= 60;
});
console.log(allPass); // true
```

- **作用**：检查数组中所有元素是否都满足条件
- **返回值**：布尔值
- **参数**：与 forEach 相同

### 4.5.6 方法对比总结

| 方法        | 作用       | 返回值                 | 是否改变原数组 | 使用场景         |
| ----------- | ---------- | ---------------------- | -------------- | ---------------- |
| **forEach** | 遍历数组   | undefined              | 否             | 单纯的遍历操作   |
| **map**     | 映射新数组 | 新数组                 | 否             | 数据转换         |
| **filter**  | 过滤数组   | 新数组                 | 否             | 筛选数据         |
| **find**    | 查找元素   | 找到的元素或 undefined | 否             | 查找单个元素     |
| **some**    | 检查条件   | 布尔值                 | 否             | 检查是否存在     |
| **every**   | 检查所有   | 布尔值                 | 否             | 检查是否全部满足 |

## 4.5 多维数组

```js
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]); // 输出 5
```

# 5. JSON 对象

## 5.1 Json 数据

1. 键值对 `"name" : "AAA"`
2. 键 : 值 (key : value)

## 5.2 Json 对象

1. 将 Json 数据放到大括号中 2.例子:

```JSON
a: {"name" : "AAA", "age" : 132, "qwe": {"q": 111} }
```

---

---

---

---

---

# 6. 函数（Function）

## 6.1 函数的概念

**函数**是一段可重复使用的代码块，用于完成特定的任务。

### 为什么需要函数？

1. **代码复用**：避免重复写相同代码
2. **模块化**：将复杂问题分解为小问题
3. **提高可读性**：用函数名说明代码功能

## 6.2 函数的定义

### 6.2.1 函数声明（最常用）

```javascript
// 语法
function 函数名(参数1, 参数2, ...) {
  // 要执行的代码
  return 结果; // 可选
}

// 示例1：无参数函数
function sayHello() {
  console.log("你好！");
  console.log("欢迎学习JavaScript！");
}

// 示例2：有参数函数
function greet(name) {
  console.log("你好，" + name + "！");
}

// 示例3：有返回值的函数
function add(a, b) {
  return a + b;  // 返回计算结果
}
```

### 6.2.2 函数表达式 (就是来接返回结果的)

```javascript
// 语法
var 函数名 = function(参数1, 参数2, ...) {
  // 要执行的代码
  return 结果;
};

// 示例
var multiply = function(x, y) {
  return x * y;
};
```

### 6.2.3 箭头函数

```javascript
// 语法
var 函数名 = (参数1, 参数2, ...) => {
  // 要执行的代码
  return 结果;
};

// 示例
var divide = (x, y) => {
  return x / y;
};
```

## 6.3 调用函数

```javascript
// 1. 无参数函数调用
sayHello();
// 输出：
// 你好！
// 欢迎学习JavaScript！

// 2. 有参数函数调用
greet("张三"); // 输出：你好，张三！

// 3. 有返回值函数调用
var result = add(5, 3); // 调用函数并把返回值保存
console.log(result); // 输出：8

// 4. 直接在表达式中使用
var total = add(10, 20) + 5; // 30 + 5
console.log(total); // 输出：35
```

## 6.4 参数详解

### 6.4.1 形参 vs 实参

```javascript
// 定义函数时的参数叫"形参"（形式参数）
function introduce(name, age) {
  // name, age 是形参
  console.log("我叫" + name + "，今年" + age + "岁");
}

// 调用函数时的值叫"实参"（实际参数）
introduce("李四", 20); // "李四"和20是实参
```

### 6.4.2 默认参数

```javascript
// ES6 写法
function greet(name = "朋友") {
  // 默认值
  console.log("你好，" + name);
}

greet("张三"); // 输出：你好，张三
greet(); // 输出：你好，朋友
```

### 6.4.3 参数数量

```javascript
function showInfo(name, age, city) {
  console.log("姓名：" + name);
  console.log("年龄：" + age);
  console.log("城市：" + city);
}

// 参数过多会被忽略
showInfo("张三", 20, "北京", "多余的参数"); // 多出的参数被忽略

// 参数不足会是 undefined
showInfo("李四");
// 输出：
// 姓名：李四
// 年龄：undefined
// 城市：undefined
```

## 6.5 返回值（return）

### 6.5.1 return 的作用

```javascript
function calculate(x, y) {
  var sum = x + y;
  return sum; // 1. 结束函数执行
  console.log("这行不会执行"); // 2. 返回后面的代码不会执行
}

var result = calculate(5, 3);
console.log(result); // 输出：8
```

### 6.5.2 无 return 的情况

```javascript
function showMessage() {
  console.log("没有return的函数");
  // 默认返回 undefined
}

var result = showMessage(); // 输出：没有return的函数
console.log(result); // 输出：undefined
```

### 6.5.3 返回多个值

```javascript
// 方法1：返回数组
function getMinMax(numbers) {
  var min = Math.min(...numbers);
  var max = Math.max(...numbers);
  return [min, max]; // 返回数组
}

var result = getMinMax([1, 5, 3, 9, 2]);
console.log("最小值：" + result[0]); // 1
console.log("最大值：" + result[1]); // 9

// 方法2：返回对象
function getUserInfo() {
  return {
    name: "张三",
    age: 20,
    city: "北京",
  };
}

var user = getUserInfo();
console.log(user.name); // 张三
```

## 6.6 不同写法对比

```javascript
// 1. 函数声明（最常用）
function add1(a, b) {
  return a + b;
}

// 2. 函数表达式
var add2 = function (a, b) {
  return a + b;
};

// 3. 箭头函数
var add3 = (a, b) => {
  return a + b;
};

// 4. 箭头函数简写（只有一条语句）
var add4 = (a, b) => a + b;

// 调用方式相同
console.log(add1(2, 3)); // 5
console.log(add2(2, 3)); // 5
console.log(add3(2, 3)); // 5
console.log(add4(2, 3)); // 5
```

## 6.7 实际应用示例

### 示例 1：计算器函数

```javascript
// 计算面积
function calculateArea(length, width) {
  return length * width;
}

// 计算圆的周长
function calculateCircle(radius) {
  return 2 * 3.14 * radius;
}

// 使用
var roomArea = calculateArea(5, 4);
console.log("房间面积：" + roomArea + "平方米");

var circleLength = calculateCircle(3);
console.log("圆的周长：" + circleLength);
```

### 示例 2：成绩等级判断

```javascript
function getGrade(score) {
  if (score >= 90) {
    return "优秀";
  } else if (score >= 80) {
    return "良好";
  } else if (score >= 60) {
    return "及格";
  } else {
    return "不及格";
  }
}

var grade = getGrade(85);
console.log("成绩等级：" + grade); // 良好
```

### 示例 3：数组处理函数

```javascript
// 找出数组中的最大值
function findMax(numbers) {
  var max = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

var scores = [85, 92, 78, 95, 88];
var highest = findMax(scores);
console.log("最高分：" + highest); // 95
```

## 6.8 函数与数组方法结合

```javascript
// 1. 先定义函数
function square(x) {
  // square 翻译成中文是 "平方" 的意思
  return x * x;
}

function isEven(num) {
  // 是否为偶数?
  return num % 2 === 0;
}

// 2. 在数组方法中使用
var numbers = [1, 2, 3, 4, 5];

// map 使用函数
var squares = numbers.map(square);
console.log(squares); // [1, 4, 9, 16, 25]

// filter 使用函数
var evens = numbers.filter(isEven);
console.log(evens); // [2, 4]

// forEach 使用函数
numbers.forEach(function (num) {
  console.log("数字：" + num);
});
```

## 6.9 常见错误

### 错误 1：忘记调用函数

```javascript
function sayHi() {
  console.log("你好");
}

// ❌ 错误写法
sayHi; // 没有括号，不会执行

// ✅ 正确写法
sayHi(); // 输出：你好
```

### 错误 2：参数类型错误

```javascript
function add(a, b) {
  return a + b;
}

// ❌ 字符串相加
var result1 = add("5", "3"); // "53"（字符串拼接）

// ✅ 数字相加
var result2 = add(5, 3); // 8
```

### 错误 3：作用域问题

```javascript
function calculate() {
  var x = 10; // 函数内部变量
  return x;
}

// console.log(x);  // ❌ 错误：x 在函数外部访问不到
console.log(calculate()); // ✅ 正确：通过函数访问
```

## 6.10 练习

```javascript
// 1. 写一个函数，接收两个数字，返回它们的和
function add(a, b) {
  // 代码
}

// 2. 写一个函数，接收温度（摄氏度），返回华氏度
// 公式：华氏度 = 摄氏度 × 9/5 + 32
function toFahrenheit(celsius) {
  // 代码
}
```

## 📊 重点总结

| 概念         | 说明           | 示例                           |
| ------------ | -------------- | ------------------------------ |
| **函数定义** | 创建函数       | `function add(a, b) { ... }`   |
| **函数调用** | 执行函数       | `add(2, 3)`                    |
| **参数**     | 传入函数的值   | `function greet(name) { ... }` |
| **返回值**   | 函数执行的结果 | `return a + b;`                |
| **默认参数** | 参数的默认值   | `function greet(name="朋友")`  |
| **箭头函数** | 简洁的函数写法 | `(a, b) => a + b`              |

# 7. HTML

## 7.1 全称

「HTML」(Hyper Text Markup Language): 超文本标记语言

1. 因为它可以加入图片、声音、动画、多媒体等内容（超越文本限制 ）
2. 不仅如此，它还可以从一个文件跳转到另一个文件，与世界各地主机的文件连接（超级链接文本）

## 7.2 HTML 骨架格式

```HTML
<!-- 页面中最大的标签 根标签 -->
<html lang="en">
    <!-- 头部标签 -->
    <head>
        <!-- 标题标签 -->
        <title></title>
    </head>
    <!-- 主体 -->
    <body>
    </body>
</html>
```
