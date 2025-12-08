# 一、TypeScript 简介

1. TypeScript 由微软开发，是其于 JavaScript 的一个扩展语言.
2. TypeScript 包含了 JavaScript 的所有内容，即：TypeScript 是 JavaScript 的超集
3. TypeScript 增加了：静态奖型检查、接口、泛型等很多现代开发特性，因此吏适合大型项目的开发。
4. TypeScript 需要编译为 JavaScript,然后交给浏览器成其他 JavaScript 运行环境执行  
   ![alt text](5289fddc2a104ad09191a504caa18ca2.png)

# 二、为什么要学 TS

```JS
let welcome = 'hello'
welcome() //此行报错：TypeError:welcome is not a function
```

```JS
const message ='hello,world'
message.toupercase()  // 拼写错误
```

# 三、包管理器专题讲解

## 3.1. 什么是"包"？

**比喻**：包就像手机上的 APP

- 别人写好的代码
- 可以直接安装使用
- 不用自己从头开发

**专业定义：**
_**包**_（Package）是 _**封装好的代码模块/方法/函数**_，包含：

- 可复用的代码库
- 版本信息
- 依赖声明
- 文档和许可证

## 3.2. 为什么需要包？

- 传统开发的困境

```ts
// 每个项目都要重复写相同的代码：

// 项目1：日期处理
function formatDate(date) {
  // 手写日期格式化
  // 20行代码
}

// 项目2：日期处理
function formatDate(date) {
  // 重新手写
  // 20行代码
}

// 项目3：日期处理
function formatDate(date) {
  // 再次手写
  // 20行代码
}
```

- 包解决的核心问题

  1. 代码复用

  ```ts
  // 不用包 - 每个项目都要自己写
  // 日期格式化、HTTP请求、工具函数、UI组件...

  // 用包 - 直接安装使用
  import dayjs from "dayjs"; // 日期处理
  import axios from "axios"; // HTTP请求
  import lodash from "lodash"; // 工具函数
  import { Button } from "ant-design"; // UI组件
  ```

  2. 质量保证

  ```ts
  // 自己写的代码
  function sortArray(arr) {
    // 可能有bug
    // 性能可能差
    // 测试不充分
  }

  // 专业包
  import { sortBy } from "lodash";
  // 经过：
  // - 上万次测试
  // - 性能优化
  // - 社区审查
  // - 版本迭代
  ```

  3. 标准化

  ```ts
  // 没有包 - 五花八门，同一个功能不同名称不同传入等等
  project1.sortData(arr);
  project2.arraySort(arr);
  project3.sortArray(arr);

  // 有包 - 标准接口
  import { sortBy } from "lodash";
  // 所有项目都用相同API
  ```

- 包的真正价值

  1. 避免重复劳动

  ```tsx
  // 开发日历功能
  // ❌ 自己实现（耗时耗力）
  function 实现日历功能() {
    // 日期计算
    // 星期计算
    // 闰年判断
    // 国际化
    // 时区处理
    // ...几百行代码
  }

  // ✅ 用包（几行代码）
  import Calendar from "antd/lib/calendar";
  <Calendar />; // 搞定！
  ```

  2. 专注业务逻辑

  ```ts
  // 开发电商网站
  // 不用包：
  实现商品轮播
  实现图片懒加载
  实现无限滚动
  实现表单验证
  实现数据请求
  实现状态管理
  // ... 写完这些，项目还没开始

  // 用包：
  npm install vue
  npm install vue-router
  npm install pinia
  npm install element-plus
  npm install axios
  // 直接开始写业务代码
  ```

  3. 社区协作

  ```ts
  // 一个人的代码
  function 自己写的工具函数() {
    // 只有自己用
    // 只有自己维护
    // 只有自己知道bug
  }

  // 社区的包
  import 社区的包 from "package";
  // 特点：
  // 1. 上万人使用
  // 2. 几百人贡献
  // 3. 几千个issue
  // 4. 持续更新维护
  ```

## 3.3 包的分类和作用

| 包类型     | 作用         | 例子                              | 解决的问题             |
| ---------- | ------------ | --------------------------------- | ---------------------- |
| **框架包** | 项目基础架构 | Vue, React, Angular               | 不用从头搭建框架       |
| **UI 包**  | 界面组件     | Element Plus, Ant Design, Hero UI | 不用手写 UI 组件       |
| **工具包** | 功能函数     | lodash, axios, dayjs              | 不用手写工具函数       |
| **构建包** | 项目构建     | Vite, Webpack, ESLint             | 不用配置复杂工具链     |
| **插件包** | 扩展功能     | vue-router, pinia                 | 不用实现路由、状态管理 |

## 3.4 什么是包管理器？

**包管理器**：管理和安装包的**工具**

**常见包管理器**：
| 工具 | 一句话介绍 | 安装命令 |
|------|-----------|---------|
| **npm** | 最老牌，自带 | `npm install 包名` |
| **yarn** | Facebook 出品 | `yarn install 包名` 或者`yarn add 包名` |
| **pnpm** | 最节省空间 | `pnpm install 包名` 或者 `pnpm add 包名` |
| **bun** | 速度最快 | `bun install 包名` |

**核心功能都一样**：

- 安装包
- 卸载包
- 更新包

## 3.5 npm 基本使用

```bash
# 1. 安装包
npm install 包名

# 2. 卸载包
npm uninstall 包名

# 3. 全局安装（命令行工具）
npm install -g 包名
```

## 3.4. 安装 TypeScript

```bash
# 用npm安装
npm install -g typescript

# 检查是否安装成功
tsc --version
```

**简单说**：

1. 包管理器是工具
2. npm 是最常用的
3. 用 `npm install` 安装 TypeScript
4. 用 `tsc --version` 检查版本

# 四、编辑和安装

## 1. 安装

```bash
npm i typescript -g

# 包管理器：npm, yarn, pnpm ,bun
npm install -g pnpm
npm install -g yarn
npm install -g bun
```

## 2. 自动化编译 ts

1. 第一步：创建 TypeScript 编译控制文件

```bash
tsc --init
```

> ### 【补充】 bash 命令：
>
> - ls 命令：列出当前文件夹里面的文件和文件夹
>   > 直接使用
> - cd 命令：切换目录
>   > - cd 使用方法:
>   > - `cd <目录名称>`
>   > - `./` 代表当前目录
>   > - `../` 代表上一级目录

2. 第二步：监视目录中的.ts 文件变化

```bash
tsc --watch
```

3. 第三步：优化，当编译出错时不生成.js 文件

```bash
tsc --noEmitonError --watch
```

# (补) 五、变量声明：const、let、var

## 1. 核心差异对比

| 特性         | `var`                        | `let`                | `const`              |
| ------------ | ---------------------------- | -------------------- | -------------------- |
| **作用域**   | 函数作用域                   | 块级作用域           | 块级作用域           |
| **变量提升** | ✅（提升并初始化 undefined） | ✅（提升但不初始化） | ✅（提升但不初始化） |
| **重复声明** | ✅                           | ❌                   | ❌                   |
| **重新赋值** | ✅                           | ✅                   | ❌                   |

---

## 2. 详细解释

### (1) 作用域范围

```javascript
// var 的函数作用域
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // 相同变量！
    console.log(x); // 2
  }
  console.log(x); // 2
}

// let/const 的块级作用域
function letTest() {
  let x = 1;
  if (true) {
    // let x = 2; // (错误的)不同变量
    x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

### (2) 重复声明

```js
var c = 1;
var c = 2; // ✅

let d = 1;
let d = 2; // ❌ SyntaxError

const e = 1;
const e = 2; // ❌ SyntaxError
```

### (3) 重新赋值

```js
var f = 1;
f = 2; // ✅

let g = 1;
g = 2; // ✅

const h = 1;
h = 2; // ❌ TypeError（对于对象可修改属性）
```

## 3. TypeScript 最佳实践

### (1) 优先使用 const​​：

```ts
// 不会修改的值
const PI = 3.14;
const API_URL = "http://api.example.com";
```

### (2) 需要重新赋值时用 let​​：

```ts
let counter = 0;
counter += 1;
```

### ​(3) ​ 永远不要使用 var​​（避免意外作用域泄漏）：

```ts
// ❌ 错误的写法
var total = 0;
// ✅ 正确的写法
let total = 0;
```

## 4. 总结

- const​​ → 必须且只能赋值一次（推荐默认使用）
- ​​let​​ → 允许后续修改（需要时使用）
- ​​var​​ → 文言文时代的遗迹（不要使用）
