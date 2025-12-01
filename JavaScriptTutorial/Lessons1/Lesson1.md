# JavaScript 基础知识整理

## 一、JavaScript 基础

### 1. ECMAScript 简介

- **定义**：ECMAScript 是 JavaScript 的语言标准，定义了语法和逻辑。
- **规则和语法**：包括变量声明、数据类型、运算符等。

### 2. JavaScript 的应用场景

1. 浏览器客户端开发（核心用途）
2. 服务器开发（如 Node.js, 现在改为 python 或者 go）
3. 桌面程序开发

### 3. JavaScript 的组成

1. **ECMAScript**：基本语法和核心功能。
2. **BOM**（Browser Object Model）：操作浏览器窗口。
3. **DOM**（Document Object Model）：操作 HTML 文档。

### 4. JavaScript 代码书写位置

1. **内嵌式**：使用 `<script>` 标签嵌入 HTML。
2. **行内式**：直接在 HTML 元素中编写（不推荐）。
3. **外链式**：通过 `<script src="file.js">` 引入外部文件。

### 5. JavaScript 的特点

- 基于原型的面向对象语言。
- 严格区分大小写，代码从上到下顺序执行。

### 6. 注释

- **单行注释**：`// 注释内容`
- **多行注释**：`/* 注释内容 */`（快捷键：`Ctrl+/`）

---

## 二、变量与数据类型

### 1. 变量定义

- **变量**：内存中存储数据的容器。
- **语法**：`var 变量名 = 值;`
- **特性**：

  1. 变量名唯一，第二次赋值会覆盖原值。
  2. 变量名区分大小写。

  ```js
  var value = 10;
  value = 20;
  ```

### 2. 变量命名规则

1. 不能以数字开头，不能使用中文。
2. 不能是关键字（如 `var`、`function`、`const`）或保留字。
3. 不能包含空格。
4. 允许使用字母、数字、下划线、`$`。
5. 建议使用语义化的唯一名称。

---

### 3. 数据类型

#### (1) 基本数据类型

1. **数值类型（number）**

   - 包含整数、浮点数、二进制等。
   - `NaN` 是数值类型，表示“非数字”(Not a Number)。

2. **字符串类型（string）**

   - 用单引号或双引号包裹的内容，如 `'abc'` 或 `"123"`。

3. **布尔类型（boolean）**

   - 仅有两个值：`true`（真）和 `false`（假）。

4. **null 类型**

   - 唯一值：`null`，表示“空”。

5. **undefined 类型**
   - 唯一值：`undefined`，表示“未定义”。

#### (2) 复杂数据类型

1. **对象类型（object）**：包括数组、函数等。
2. **函数类型（function）**：可执行代码块。

#### (3) 类型判断

- **`typeof` 用法**：

  ```javascript
  var n1 = 100;
  console.log(typeof n1); // "number"

  var s1 = "abc";
  console.log(typeof s1); // "string"
  ```

- 判断 NaN：

  ```js
  var n1 = 100;
  console.log(isNaN(n1)); // true（是数字）

  var s1 = "Jack";
  console.log(isNaN(s1)); // flase（非数字）
  ```

### 4. 类型转换

#### (1) 转换为数值

##### 1. Number(变量名)

- 转换规则：
  - 将强制**转换为数值类型**；可以转换成小数；也可以转换布尔值。
  - true → 1，false → 0，null → 0。
  - 无法转换时返回 NaN。
  - 例子：
    ```js
    var a = "1.43";
    var b = fales;
    var c = "abcd";
    console.log(Number(a)); // 1.43
    console.log(Number(b)); // 0
    console.log(Number(c)); // NaN
    ```

##### 2. parseInt(字符串变量)

- 从字符串开头提取整数，忽略小数和非数字前缀。
- 示例：
  ```javascript
  console.log(parseInt("2")); // 2
  console.log(parseInt("25678")); // 25678
  console.log(parseInt("3.14")); // 3
  console.log(parseInt("k23")); // NaN
  ```
- 注意！如果开头不是数值，直接返回 NAN
- 主要作用：对小数取整（保留整数）

##### 3. parseFloat(字符串变量)

- 提取浮点数，保留第一个小数点。
- 示例：
  ```javascript
  console.log(parseFloat("1.22df")); // 1.22
  console.log(parseFloat("1.3.4.5")); // 1.3
  console.log(parseFloat("h34")); // NaN
  ```

#### (2) 转换为字符串

##### 1. 变量名.toString()

- 概念：将数值转换为字符串
- 注意！ undefined 和 null 不能被转换
- 示例：
  ```js
  100.toString(); // "100"
  true.toString(); // "true"
  ```

##### 2. String(变量名)

- 概念：所有类型均可转换。
- 示例：
  ```js
  String(null); // "null"
  String(undefined); // "undefined"
  String(3.1415926); // "3.1415926"
  ```

#### (3)关于加法`+`的使用

- 规则：
  - 若操作数为字符串，执行字符串拼接。
  - 否则，尝试转换为数值后计算。
- 示例：
  ```javascript
  console.log(1 + "2"); // "12"
  console.log(1 + 2); // 3
  console.log(1 + true); // 2
  ```
