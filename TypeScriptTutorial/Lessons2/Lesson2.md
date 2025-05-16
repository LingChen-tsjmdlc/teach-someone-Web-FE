# 四、类型声明

- 使用 `:` 来对变量或函数形参，进行类型声明：

```TS
let a:string     //变量a只能存储字符串
let b:number     //变量b只能存储数值
let c:boolean    //变量c只能存储布尔值
a = 'hello'
a = 100          //警告：不能将类型“number'”分配给类型“string”

b = 666
b = '你好'       //警告：不能将类型“string”分配给类型“number'”

c = true
c = 666         //警告：不能将类型“number”分配给类型“boolean”

//参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function demo(x:number,y:number):number{
  return x + y
}

demo(100,200)
demo(100,'200')        //警告：类型“string”的参数不能赋给类型“number”的参数
demo(100,200,300)      //警告：应有2个参数，但获得3个
demo(100)              //警告：应有2个参数，但获得1个

```

# 五、类型推断

- `TS` 会根据我们的代码进行类型推导。

```TS
let d = -99
d = false   // 报错，不能将类型“boolean”分配给“number”
```

- 但要注意，类型推断不是万能的，面对复杂类型时推断容易出外问题，所以还是尽量明确的编写类型声明！

# 六、类型总览

## 1.类型

1. JS 里面的类型
   - string
   - number
   - boolean
   - null
   - bigint（大整数）
   - undefind
   - symbol（符号）
   - object (里面包含 Arry、function、Data 等)
2. TS 里面的类型
   - 上述的类型
   - 六个新的类型
     - any
     - unknown
     - never
     - void
     - tuple
     - enum
   - 两个用于自定义类型的方式
     - type
     - interface (常用)
3. 注意：全部是小写。在 JS 中这些内置的构造函数：`Number`、`String`、`Boolean` 等，它们用于创建对应的包装对象，在日常开发中 **_很少使用_**,在 TS 中也是同理，所以说在平常的类型声明的时候通常都是小写。

## 2.原始对象和包装对象

### (1) 原始对象

- **原始对象：** 如 `number`、`string`、`boolean` ,在 JS 中是简单的数据类型，它们在内存中占用空间小，处理速度快。
- **特点：​**

  - **不可变（Immutable）** ​​：原始值不能被修改，只能重新赋值。(比如如果你有一个青苹果，你能直接把它“变成”红苹果吗？**不能！** ​​ 你只能扔掉青苹果，换一个新的红苹果。)

    ```TS
    let fruit = "青苹果";
    fruit = "红苹果"; // 不是修改，而是换了一个新苹果！
    ```

  - ​ **按值传递（Pass by Value）** ​​：赋值或传参时，传递的是值的副本。(如果你把一个苹果送给朋友，你手里的苹果会消失吗？→ ​​ 不会！​​ 朋友得到的是一个复制品 ​​，你手里的苹果还在。)

    ```TS
    let myApple = "我的苹果";
    let yourApple = myApple; // 复制了一份给你
    yourApple = "你的苹果"; // 你修改了你的复制品
    console.log(myApple); // "我的苹果"（我手里的没变！）
    ```

  - 没有方法或属性（苹果自己能削皮吗？→ ​​ 不能！你需要用 ​​ 削皮器工具 ​​（包装对象）来帮忙。）

    ```TS
    let apple = "apple";
    console.log(apple.toUpperCase()); // APPLE, 临时用工具处理
    ```

### (2) 包装对象

- **包装对象：** 如 `Number`、`String`、`Boolean` ,是 复杂类型，在内存中占用更多的空间，在平常开发中很少由开发者自己创建包装对象。
- **特点：**

  - **对象类型（Object）** ​​，可以使用方法和属性。
    - 普通苹果 ​​（**原始类型**）：只能看，不能自己削皮
    - 工具箱 ​​（**包装对象**）：里面有削皮刀、切片器等工具（方法）
      ```TS
      let apple = "红苹果"; // 普通苹果
      // 当你想用"削皮"功能时
      apple.toUpperCase(); // JS 悄悄把苹果放进工具箱
      ```
  - **临时创建 ​** ​：当对原始值调用方法时，JS 会自动将其转换为包装对象，执行后丢弃。

    ```TS
       let apple = "Red apple";
       // JS的步骤：
       // 1. 把苹果装进临时工具箱：new String(apple)
       // 2. 用工具箱的.toUpperCase()工具
       // 3. 用完立即扔掉工具箱
       console.log(apple.toUpperCase()); // "Red apple" → "RED APPLE"
    ```

  - **手动创建**​​：可以使用 new 关键字（但不推荐）

### (3) 包装对象 vs 原始类型 对比 ​

|          | 原始类型（苹果） | 包装对象（工具箱） |
| -------- | ---------------- | ------------------ |
| ​ 类型 ​ | string/number 等 | String/Number 等   |
| 存储 ​   | 直接放在桌上(栈) | 锁在工具箱里       |
| 方法 ​   | 临时借用工具箱   | 自带所有工具       |
| 推荐 ​   | ✅ 平时就用这个  | ❌ 除非特殊需求    |

# 七、常用类型

## 1. any

- 定义：任意类型，一旦将变量设置成 any ，那么就意味着放弃对该变量的检查

  ```TS
  //明确的表示a的类型是any   一   【显式的any】
  let a: any
  //以下对a的赋值，均无警告
  a = 100
  a = '你好'
  a = false

  //没有明确的表示b的类型是any,但TS主动推断出来b是any  一  隐式的any
  let b
  //以下对b的赋值，均无警告
  b = 100
  b = '你好'
  b = false
  ```

- 注意：`any`类型的变量，可以赋值给任何类型的变量

## 2. unknown

- 定义：未知类型
- 可以理解为一个类型安全的 `any` ，适用于：不确定数据的具体类型

  ```TS
  //设置a的类型为unknown
  let a: unknown

  //以下对a的赋值，均正常
  a = 100
  a = false
  a = '你好'

  // 设置x的数据类型为string
  let x: string
  x = a//警告：不能将类型“unknown'”分配给类型“string”
  ```

- `unknown` 会强制开发者在使用之前进行类型检查

  ```TS
  // 设置a的类型为unknown
  let a: unknown
  a = 'hello'

  // 第一种方式：加类型判断
  if (typeof a === 'string') {
     x = a
     console.log(x)
  }

  // 第二种方式：加断言(如果确定数据类型,常用)
  x = a as string

  //第三种方式：加断言
  x = <string>a
  ```

## 3. never

- 定义：任何值都不是，简而言之就是不能有值，`undefind`、`null`、`""`、`0` 都不行！
- 几乎不用 `never` 去限制变量，因为没有意义，如：

  ```TS
  /*指定a的类型为never,那就意味着a以后不能存任何的数据了*/
  let a: never

  //以下对a的所有赋值都会有警告
  a = 1
  a = true
  a = undefined
  a = null
  ```

- `never` 一般是 TS 主动推断出来的，例如：

  ```TS
  //指定a的类型为string
  let a:string
  //给a设置一个值
  a = 'hello'

  if (typeof a ==='string') {
     console.log(a.toUppercase())
  }else{
     console.log(a) // TS会推断出此处的 a 是 never,因为没有任何一个值符合此处的逻辑
  }
  ```

## 4. void

- 定义：`void` 通常用于函数返回值声明, 表示函数不返回任何值。

  ```TS
  //无警告
  function logMessage(msg: string): void {
    console.log(msg)
  }
  //无警告
  function logMessage2(msg: string): void {
    console.log(msg)
    return;
  }
  //无警告
  function logMessage3(msg: string): void {
    console.log(msg)
    return undefined
  }
  ```

- 限制函数返回值时，是不是 `undefind` 和 `void` 没有区别呢？答案是有区别的，因为 **返回值类型为 `void` 的函数，调用者不应该依赖其返回值进行任何操作**

  ```TS
  function logMessage(msg: string): void {
     console.log(msg)
  }
  let result = logMessage('你好')
  if (result) { //此行报错：无法测试"void"类型的表达式的真实性
     console.log('logMessage有返回值')
  }
  ```

  ```TS
  function logMessage(msg: string): undefined {
    console.log(msg)
  }
  let result = logMessage('你好')
  if (result) {  //此行无警告
    console.log('logMessage?有返回值')
  }
  ```

- 简单来说：void 包含 undefined。void 是一个广泛的 `“空”` 概念，而 undefined 是这种`“空”` 状态的一种具体形式

## 5. object

- 定义：所有非原始类型，可以是：对象，函数，数组等。**由于太宽泛，所以实际很少用**

  ```TS
  let a:object  //a的值可以是任何【非原始类型】，包括：对象、函数、数组等

  //以下代码，是将【非原始类型】赋给a,所以均符合要求
  a = {}
  a = {name: '张三'}
  a = [1, 3, 5, 7, 9]
  a = function () {}
  a = new String('123')
  class Person {}
  a = new Person()

  //以下代码，是将【原始类型】赋给a,有警告
  a = 1           //警告：不能将类型“number”分配给类型“object”
  a = true        //警告：不能将类型boolean'”分配给类型“object'
  a = '你好'       //警告：不能将类型“string”分配给类型“object'”
  a = null        //警告：不能将类型“nul1”分配给类型“object”
  a = undefined   //警告：不能将类型“undefined”分配给类型“object”
  ```

## 6. tuple

- 定义：元组，一种**特殊的数组类型**，可以**存储固定数量的元素**，而且每个元素的类型是**已知的**且**可以不同**，用于精确的描述一组数组的值，用`?`表示可选内容。

  ```TS
  //第一个元素必须是string类型，第二个元素必须是number类型:
  let letarr1:[string,number]
  //第一个元素必须是number类型，第二个元素是可选的，如果存在，必须是boolean类型:
  let letarr2:[number,boolean?]
  //第一个元素必须是number类型，后面的元素可以是任意数量的string类型
  let letarr3:[number, ...string[]]
  //可以赋值
  arr1 = ['hello'，123]
  arr2 = [100]
  arr2 = [100, false]
  arr3 = [10, 'hello'，'world']
  arr3 = [10]
  //不可以赋值，arr1声明时是两个元素，赋直的是三个
  arr1 = ['hello',123,fa1se]
  ```

## 7. enum

### (1) 基础定义

- 枚举（Enum）用于定义一组命名的常量集合，适用于有限选项的场景
- 枚举成员默认从 `0` 开始自动递增，也可手动指定值

  ```ts
  // 默认数字枚举
  enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
  }
  // 手动赋值枚举
  enum Status {
    Success = 200,
    NotFound = 404,
    Error = 500,
  }
  ```

### (2) 字符串枚举

```ts
enum LogLevel {
  Info = "INFO-信息",
  Warn = "WARN-警告",
  Error = "ERROR-错误",
}
console.log(LogLevel.Warn); // "WARN-警告"
```

### (3) 常量枚举（编译后会被移除）

```ts
const enum Colors {
  Red,
  Green,
  Blue,
}
let bgColor = Colors.Green; // 编译后直接替换为：let bgColor = 1
```

### (4) 异构枚举（混合类型，不推荐）

```ts
enum BooleanLike {
  No = 0,
  Yes = "YES",
}
```

### (5) 枚举特点

- ​ 反向映射 ​​：可通过值获取键名（仅数字枚举）

  ```ts
  enum Direction {
    Up = 1,
  }
  console.log(Direction[1]); // "Up"
  ```

- ​​ 运行时存在性 ​​：非 const 枚举会生成真实对象

  ```ts
  // 编译后的JS代码
  var Direction;
  (function (Direction) {
    Direction[(Direction["Up"] = 0)] = "Up";
  })(Direction || (Direction = {}));
  ```

- 类型安全 ​​：限制变量取值范围

  ```ts
  function move(direction: Direction) {
    // ...
  }
  move(Direction.Left); // ✅
  move(100); // ❌ 类型错误
  ```

## 8. type

- 定义：可以为任意一种类型创建别名，让代码更加简洁。
- 用法：使用关键字 type 定义，取个别名，然后等于号后面跟类型名称。

  ```ts
  type num = number;
  let price: num;
  price = 100;
  ```

## 9. interfac

# 八、自定义类型

## 1. 泛型（Generics）

### (1) 基础概念

- **定义**：泛型是 TypeScript 中创建可重用代码组件的工具，允许在定义时不指定具体类型，而是在使用时动态指定
- **符号约定**：通常使用 `<T>`（Type 缩写）表示，也可以用其他字母如 `<K>`, `<V>`

```ts
// 最简单的泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 使用示例
let output1 = identity<string>("hello"); // 显式指定类型
let output2 = identity(100); // 自动类型推断
```

### (2) 泛型应用场景

#### 函数中使用

```ts
// 处理数组的泛型函数
function reverseArray<T>(items: T[]): T[] {
  return items.reverse();
}
// 使用示例
reverseArray<number>([1, 2, 3]); // ✅ 返回 [3, 2, 1]
reverseArray(["a", "b"]); // ✅ 类型推断为 string[]
```

#### 接口中使用

```ts
// 通用响应接口
interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}
// 使用示例
const userRes: ApiResponse<{ name: string }> = {
  code: 200,
  data: { name: "张三" },
  message: "success",
};
const productRes: ApiResponse<string[]> = {
  code: 200,
  data: ["手机", "电脑"],
  message: "ok",
};
```

### (3) 泛型约束

- 作用 ​: 限制泛型允许的类型范围
- 使用: extends 关键字

```ts
// 要求必须包含 length 属性
interface Lengthwise {
  length: number;
}
function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}
// 使用示例
logLength("hello"); // ✅ 5
logLength([1, 2, 3]); // ✅ 3
logLength(100); // ❌ 类型"number"不满足约束
```

### (3) 泛型 和 any

| 特性 ​​          | 泛型                              | any                 |
| ---------------- | --------------------------------- | ------------------- |
| ​​ 类型安全 ​    | ​ ✅ 使用时确定类型，保持类型检查 | ❌ 完全放弃类型检查 |
| ​​ 代码提示 ​​   | ✅ 有完整类型提示                 | ❌ 无提示           |
| ​​ 使用场景 ​​   | 需要灵活但保持类型安全的场景      | 紧急修复/兼容旧代码 |
| ​​ 重构友好度 ​​ | ✅ 优秀                           | ❌ 极差             |

```ts
// 泛型示例（安全）
function safeWrap<T>(value: T): T[] {
  return [value];
}
safeWrap(100).map((x) => x.toFixed(2)); // ✅ 正确提示数字方法

// any示例（危险）
function dangerWrap(value: any): any[] {
  return [value];
}
dangerWrap(100).map((x) => x.undefinedMethod()); // ❌ 运行时才会报错
```

### (4) 提示

> 💡 ​​ 最佳实践提示 ​​：
>
> - 优先使用泛型而不是 any
> - 合理使用泛型约束(extends)
> - 复杂场景使用类型别名(type)或接口(interface)组合泛型
> - 在组件中广泛使用泛型（如 useState<T>）

## 2. interface（接口）

### (1) 基础定义

- **作用**：用于定义对象的结构规范，强制对象必须符合指定格式
- **特点**：
  - 支持继承（`extends`）
  - 支持声明合并
  - 适合定义对象、类的公共契约
  - 可以嵌套

```ts
// 基础接口定义
interface User {
  id: number;
  name: string;
  age?: number; // 可选属性
  readonly email: string; // 只读属性
}

// 使用示例
const user1: User = {
  id: 1,
  name: "张三",
  email: "zhangsan@example.com",
};

user1.age = 30; // ✅ 可选属性可赋值
user1.email = "..."; // ❌ 无法分配到 "email"，因为它是只读属性
```

### (2) 接口继承

```ts
// 基础接口
interface Animal {
  name: string;
  move(): void;
}

// 继承扩展
interface Dog extends Animal {
  breed: string;
  bark(): void;
}

// 实现示例
const myDog: Dog = {
  name: "阿黄",
  breed: "金毛",
  move() {
    console.log("跑动");
  },
  bark() {
    console.log("汪汪！");
  },
};
```

### (3) 函数类型接口

```ts
// 定义函数签名
interface SearchFunc {
  (source: string, keyword: string): boolean;
}
const mySearch: SearchFunc = (src, kw) => {
  return src.includes(kw);
};
mySearch("hello world", "hello"); // ✅
```

### (4) 接口与泛型结合

```ts
// 泛型接口
interface Result<T> {
  success: boolean;
  data: T;
  code: number;
}
// 使用示例
const apiRes: Result<string> = {
  success: true,
  data: "操作成功",
  code: 200,
}; // ✅
const apiRes: Result<string> = {
  success: true,
  data: {},
  code: 200,
}; // ✅
```

# 九、类型声明文件（.d.ts）

## 1. 基本作用

- 给 JavaScript 代码添加类型说明，就像给英文书加中文翻译本 （主要用在：为旧 JS 代码或第三方库添加类型支持）
- 类型声明文件就像给 JS 戴的"翻译眼镜"，让 TS 能看懂 JS 代码

## 2. 最简单的写法

```typescript
// 声明全局变量（比如网页中的全局变量）
declare const APP_VERSION: string;

// 声明全局函数（比如网页中的老函数）
declare function showLoading(msg: string): void;

// 声明模块类型（比如给jQuery加类型）
declare module "jquery" {
  function $(selector: string): {
    click(): void;
    hide(): void;
  };
  export = $;
}
```

## 3. 例子：

```js
// utils.js
export function formatPrice(price) {
  return "¥" + price.toFixed(2);
}
```

```ts
// utils.d.ts
export function formatPrice(price: number): string;
```

## 4. 注意事项

1. .d.ts 文件不需要自己写，大部分库都有现成的类型包
2. 简单的项目可能完全不需要写类型声明文件，所以不常用

# 十、构造函数详解

## 1. 什么是构造函数？

构造函数就像「**对象的初始化说明书**」，决定了：

1.  创建对象时必须提供哪些信息
2.  对象刚出生时有哪些初始值
    > 总的来说就是初始化用的

```typescript
// 类比：乐高小人说明书
class LegoPerson {
  // 构造函数：规定必须提供名字和帽子
  constructor(name: string, hat: string) {
    this.name = name;
    this.hat = hat;
  }
}
```

## 2. 关键特点

### (1) 使用方法

- 在 class 中 constructor 是构造函数的关键字
- 必须用 new 关键词调用 → 触发出生流程

```ts
// 必须按说明书提供材料
const worker = new LegoPerson("工人", "安全帽");
```

```ts
class 类名 {
  // class 的讲解看下面的 十一、类（Class）
  constructor(参数列表) {
    // 初始化属性（相当于准备零件）
    属性1 = 参数1;
    属性2 = 参数2;
  }
}

// 真实糖果工厂示例
class Candy {
  // 必须提供品类和糖分
  constructor(public type: string, private _sugar: number) {}
}

const milkCandy = new Candy("奶糖", 50);
```

## 3. 示例：

```ts
class Robot {
  // 构造函数：规定出生时必须要有名字和能量
  constructor(public name: string, public energy: number) {
    console.log(`${name}机器人启动！剩余能量：${energy}%`);
  }
}

// 使用过程 ⚙️
const wallE = new Robot("瓦力", 100);
```

- 拆解解释：
  - **调用**​​ → new Robot("瓦力", 100)
  - **初始化**​​ → name = "瓦力", energy = 100
  - **执行** → 输出日志"瓦力机器人启动！剩余能量：100%"

## 4. 构造函数 和 普通函数

| 构造函数                | 普通方法                       |
| ----------------------- | ------------------------------ |
| 只在创建对象时执行一次  | 对象创建后可以多次调用         |
| 没有 ​​ return 返回值   | 可以有 return 值               |
| ​ 必须用 new 关键字调用 | 用对象实例调用（如 obj.foo()） |

```ts
class Example {
  constructor() {
    console.log("构造函数执行");
  }

  normalMethod() {
    console.log("普通方法被调用");
  }
}

const obj = new Example(); // 输出："构造函数执行"
obj.normalMethod(); // 输出："普通方法被调用"
```

# 十一、类（Class）

## 1. 基础结构

### (1) 定义类和创建实例

```typescript
class Person {
  // 属性声明
  name: string;
  age: number;

  // 构造函数
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 方法
  sayHello() {
    console.log(`大家好，我是${this.name}，今年${this.age}岁`);
  }
}

// 创建实例
const xiaoming = new Person("小明", 18);
xiaoming.sayHello(); // 输出：大家好，我是小明，今年18岁
```

### (2) 构造函数简写（推荐）

```ts
class Student {
  // 直接在构造函数参数前加修饰符
  constructor(public name: string, private _score: number) {}

  checkScore() {
    console.log(`${this.name}的成绩是：${this._score}`);
  }
}

const stu = new Student("小红", 95);
stu.checkScore(); // 输出：小红的成绩是：95
stu.name; // ✅ 可以访问
stu._score; // ❌ 私有属性不能访问
```

## 2. 访问修饰符

| 修饰符    | 作用                         | 示例                  |
| --------- | ---------------------------- | --------------------- |
| public    | 公开属性（默认）             | public name: string   |
| private   | 私有属性（只能在类内部访问） | private id: number    |
| protected | 受保护属性（子类可访问）     | protected key: string |

```ts
class Animal {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // 通过公共方法访问私有属性
  public getName() {
    return this._name;
  }
}

const cat = new Animal("喵喵");
console.log(cat.getName()); // ✅ "喵喵"
console.log(cat._name); // ❌ 私有属性不能访问
```

## 3. 继承与扩展

```ts
// 父类
class Animal {
  constructor(public name: string) {}

  move() {
    console.log(`${this.name}在移动`);
  }
}

// 子类继承
class Dog extends Animal {
  bark() {
    console.log("汪汪！");
  }
}

const dog = new Dog("阿黄");
dog.move(); // ✅ 继承的方法
dog.bark(); // ✅ 自己的方法
```

## 4. 静态成员

```ts
class AppConfig {
  // 静态属性（属于类本身）
  static version = "1.0.0";

  // 静态方法
  static getBaseUrl() {
    return "https://api.example.com";
  }
}

console.log(AppConfig.version); // "1.0.0"
console.log(AppConfig.getBaseUrl()); // "https://api.example.com"
```

## 5. 实际应用场景

- 比如表单验证：

```ts
class Validator {
  static isEmail(email: string): boolean {
    return /^\w+@\w+\.\w+$/.test(email);
  }

  static isPhone(phone: string): boolean {
    return /^1\d{10}$/.test(phone);
  }
}

console.log(Validator.isEmail("test@example.com")); // true
```

## 6. 注意事项

- 类的方法中访问属性要加 this
- 私有属性推荐用 \_ 开头命名（如 \_password）
- 优先使用 public 简写形式

```ts
// ✅ 推荐写法
class User {
  constructor(public username: string, private _password: string) {}
}

// ❌ 传统写法
class OldUser {
  public username: string;
  private _password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this._password = password;
  }
}
```
