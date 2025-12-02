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
console.log(fruits.length); // 输出 3
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
var last = fruits.pop();

// 删除第一个元素
var first = fruits.shift();
```

### 2. 查找元素

```js
var position = fruits.indexOf("Banana"); // 返回索引或-1
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
fruits.forEach(function(item, index) {
  console.log(index, item);
});
```

### 3. map 方法

```js
var lengths = fruits.map(function (item) {
  return item.length;
});
```

## 4.5 多维数组

```js
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]); // 输出 5
```

# 5. JSON 对象 s

## 5.1 Json 数据

1. 键值对 `"name" : "AAA"`
2. 键 : 值

## 5.2 Json 对象

1. 将 Json 数据放到大括号中 2.例子:

```JSON
a: {"name" : "AAA", "age" : 132, "qwe": {"q": 111} }
```

# 6. 方法/函数

## 6.1 关键词

**`function`**

## 6.2 语法

```JS
function functionName(){
  // 代码块
}

// 带参数
function functionName(a,b){
  // 代码块
}

// 箭头函数
var functionName = (param1,param2) => {
  // 代码块
}
```

## 6.3 退出函数/返回值

`return`

## 6.4 例子

```JS
  function myFunction(a,b)
  {
    return a*b;
  }
  // const myFunction = (a,b) => {
  //    return a*b;
  // }

  num = myFunction(3,5) // 15
```

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
