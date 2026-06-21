/*
  一、单选题
*/

// 1. 关于 TypeScript 和 JavaScript 的关系，根据文档描述正确的是：    （  A   ）
// A. TypeScript 包含了 JavaScript 的所有内容，是其超集
// B. TypeScript 代码可以直接在浏览器运行，不需要编译
// C. TypeScript 只能在微软开发的特定环境中运行
// D. TypeScript 去掉了 JavaScript 中不安全的特性

/* ------------------------------ 题目分割线 -------------------------------- */

// 2. 分析以下代码，哪一行会出现 TypeScript 编译错误？    （  C  ）
// 第1行 ->   let userName: string;
// 第2行 ->   userName = "Alice";
// 第3行 ->   userName = 100;
// A. 第1行
// B. 第2行
// C. 第3行
// D. 不会报错

/* ------------------------------ 题目分割线 -------------------------------- */

// 3. 关于 `any` 类型和 `unknown` 类型的区别，文档中的说法正确的是：    （  B  ）
// A. `any` 和 `unknown` 完全一样，可以互换使用
// B. `unknown` 是类型安全的，赋值给其他类型前必须进行类型检查
// C. `any` 类型的变量不能赋值给 `string` 类型的变量
// D. `unknown` 类型的变量可以直接调用方法，无需检查

/* ------------------------------ 题目分割线 -------------------------------- */

// 4. 以下关于函数返回值类型 `void` 的描述，正确的是：    （  D  ）
// A. `void` 函数必须显式写上 return undefined;
// B. `void` 和 `undefined` 在函数返回值上没有区别
// C. 调用 `void` 函数的返回值可以用于 if 判断
// D. `void` 表示函数不返回任何值，调用者不应依赖其返回值

/* ------------------------------ 题目分割线 -------------------------------- */

// 5. 分析以下 `tuple`（元组）的定义，哪一行赋值是错误的？    （  C  ）
let userInfo: [string, number];
// 第1行 ->   userInfo = ["Bob", 25];
// 第2行 ->   userInfo = ["Tom", 30];
// 第3行 ->   userInfo = ["Alice", 20, true];

// A. 第1行
// B. 第2行
// C. 第3行
// D. 以上都不会报错

/* ------------------------------ 题目分割线 -------------------------------- */

// 6. 关于变量声明 `const`、`let`、`var` 的最佳实践，文档推荐的做法是：    （  D  ）
// A. 全部使用 var，因为它是传统的写法
// B. 全部使用 let，因为 const 太麻烦
// C. 随意混用，没有区别
// D. 优先使用 const，需要重新赋值时用 let，永远不要使用 var

/*
  ===================================== 题目分割线 =======================================
*/

/*
  二、代码分析题（写出输出结果或报错原因）
*/
// 1. 分析类型推断和原始类型的不可变性（参考文档：原始对象和包装对象）：
let fruit = "apple";
fruit = "orange";
console.log(fruit);
// 结果是： ___"orange" ___

/* ------------------------------ 题目分割线 -------------------------------- */

// 2. 分析 `unknown` 类型的安全性（参考文档：unknown定义）：
let input: unknown;
input = "123";
// let output: string = input; // 如果取消注释这行，会报错吗？报错说的是什么？
// 报错原因： ___ 会报错，无法将string类型的赋值给input___

/* ------------------------------ 题目分割线 -------------------------------- */

// 3. 分析 `void` 函数的正确调用
function logInfo(msg: string): void {
  console.log(msg);
}
logInfo("Test");
// 预期控制台输出： ___ "Test"___

/* ------------------------------ 题目分割线 -------------------------------- */

// 4. 分析数字枚举（Enum）的反向映射：
enum StatusCode {
  Success,
  Error,
}
console.log(StatusCode[0]);
// 结果是： ___Success ___

/*
  ===================================== 题目分割线 =======================================
*/

/*
  三、编程题（考察 TS 核心语法）
*/
// 第1题：类型声明与函数参数
// 题目：定义一个函数 `calculateArea`，用于计算矩形面积。
// 要求：
//      1. 参数 `width` 和 `height` 必须是 number 类型。
//      2. 函数返回值必须是 number 类型。
//      3. 在函数内部计算 width * height 并返回。
//      4. 调用该函数，传入 10 和 20，并打印结果。

// 在这里写你的代码：
let width: number;
let height: number;
function calculateArea(width, height): number {
  return width * height;
}
calculateArea(10, 20);

/* ------------------------------ 题目分割线 -------------------------------- */

// 第2题：Tuple（元组）的实际应用 - API 状态响应
// 背景：在实际项目中，后端接口经常返回固定格式的数据。为了避免定义繁琐的对象，我们可以使用元组来表示 [状态码, 提示信息]。
// 要求：
//      1. 定义一个类型别名 `ApiResponse`，它是一个元组，第一个元素是数字（status code），第二个元素是字符串（message）。
//      2. 编写一个函数 `checkServerStatus`，该函数的返回值类型为 `ApiResponse`。
//      3. 当服务器正常时，返回 `[200, "OK"]`；异常时返回 `[500, "Internal Server Error"]`。
//      4. 调用该函数并使用解构赋值获取状态码和消息，打印到控制台（例如输出是：服务报错了：状态码: 500, 提示: Internal Server Error）。
type ApiResponse = [number, string];
function checkServerStatus(severIsOk: boolean): ApiResponse {
  if (severIsOk) {
    return [200, "OK"];
  } else {
    return [500, "Internal Server Error"];
  }
}
let serverIdel = checkServerStatus(false);
console.log(`服务报错了：状态码: ${serverIdel[0]}, 提示: ${serverIdel[1]}`);

/* ------------------------------ 题目分割线 -------------------------------- */

// 第3题：Enum（枚举）的应用
// 题目：定义一个订单状态枚举，并根据状态输出信息。
// 要求：
//      1. 定义一个 `OrderStatus` 枚举，包含：Pending(待支付)、Shipped(已发货)、Delivered(已送达)。
//      2. 定义一个变量 `currentStatus`，初始值为 `OrderStatus.Pending`。
//      3. 打印 `currentStatus` 的值（数字）。
//      4. 打印 `OrderStatus[0]` 的值（字符串）。

enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
}
let currentStatus = OrderStatus.Pending;
console.log(currentStatus);
console.log(OrderStatus);

/* ------------------------------ 题目分割线 -------------------------------- */

// 第4题：第三方接口数据的防御性处理
// 背景：在真实项目中，我们经常需要调用第三方的天气 API。由于后端返回的数据结构不受我们控制（可能是 JSON 字符串、数字或对象），我们需要使用 TS 来安全地解析它。
// 要求：
//    1. 定义一个变量 `weatherData`，类型为 `unknown`，模拟从外部获取的不确定数据。初始值赋为字符串 "25℃"。
//    2. 编写一个函数 `parseWeather`，接收该 `unknown` 类型的参数。
//    3. 在函数内部，必须先进行类型检查（类型收窄）。如果它是字符串，则打印 "当前温度为：" + 该字符串；如果不是字符串，则打印 "数据格式异常，无法解析"。
//    4. 调用该函数并传入 `weatherData`。
let weatherData: unknown;
weatherData = "25℃";
function parseWeather(weatherData) {
  if (typeof weatherData === "string") {
    console.log(`当前温度为：${weatherData}`);
  } else {
    console.log("数据格式异常，无法解析");
  }
}
parseWeather(weatherData);

/*
  ===================================== 题目分割线 =======================================
*/

/*
  四、综合应用题（附加题，困难）
*/

// 题目：学生成绩评级系统的数据处理
// 背景：在实际的业务系统中，后端返回的学生数据往往只有基础信息（如姓名和分数）。前端或中间层需要根据业务规则，动态计算出评级并补充到数据中。使用 TypeScript 可以确保这个数据处理过程是安全的。
// 需求：
// 1. 声明一个常量数组 `rawStudents`，用于存储原始学生数据。每个元素是一个对象，包含 `name: string` 和 `score: number`。
//    请填入以下三名学生的数据：
//    - { name: "张三", score: 85 }
//    - { name: "李四", score: 55 }
//    - { name: "王五", score: 90 }
// 2. 声明一个空数组 `results`，用于存储处理后的结果。每个元素是一个对象，除了原有的 `name` 和 `score`，还需要新增一个属性 `grade: string`（用于存储评级结果）。
// 3. 编写一个函数 `evaluateStudents`，接收原始学生数组作为参数，返回值类型为处理后的结果数组。
// 4. 在函数内部，遍历传入的数组，根据 `score` 动态生成 `grade` 属性（>=60 为 "及格"，<60 为 "不及格"），并将处理后的完整对象存入 `results` 数组中。
// 5. 调用该函数，传入 `rawStudents`，并使用 `console.log` 打印最终的结果数组。

// --- 在这里写你的代码 ---

const rawStudents = [
  { name: "张三", score: 85 },
  { name: "李四", score: 55 },
  { name: "王五", score: 90 },
];
let results: { name: string; score: number; grade: string }[] = [];

function evaluateStudents(
  student: { name: string; score: number }[],
): { name: string; score: number; grade: string }[] {
  results = [];
  for (let i = 0; i < student.length; i++) {
    // 为什么要用三元使用if时，总会找不到参数和元素
    const item = student[i];
    const grade = item.score >= 60 ? "及格" : "不及格";
    results.push({ name: item.name, score: item.score, grade });
  }
  return results;
}
console.log(evaluateStudents(rawStudents));

/*
二、代码分析题
*/

// 1. 分析以下代码，找出错误并说明原因：
// let userName: String = "张三";
// let userAge: number = 25;
//     首字母大写了

// userName = 30;  // 错误位置 ①
// userAge = "25岁";  // 错误位置  ②

// function greet(user: String): string {
//   return "你好，" + user.toUpperCase();
// }

// console.log(greet(userName));
// console.log(greet(userAge));  // 错误位置  ③

// 错误原因：
// 1. ①: __应是string类型，输入的是number类型_______________________________
// 2. ②: __应是number类型，输入的是string类型_______________________________
// 3. ③: ___没有英文字母，不满足条件______________________________

/* ------------------------------ 题目分割线-------------------------------- */

// 2. 分析以下代码的输出和类型：
let dataNu: unknown = "Hello TypeScript";
let messageStr: string;

if (typeof dataNu === "string") {
  messageStr = dataNu;
} else {
  messageStr = "不是字符串";
}

// 问题：
// 1. 代码能正常运行吗？___不能____
// 2. messageStr 最终的值是：____"Hello TypeScript"___
// 3. 如果去掉 if 判断，直接写 messageStr = data 会怎样？___无法判断，无法将unknown类型的赋予给messageStr____

/* ------------------------------ 题目分割线-------------------------------- */

// 3. 分析以下代码中的类型问题：

// let score: number = 85;
// score = "90分";  // ①

// let student: any = "张三";
// let nameLength: number = student;  // ②

// function getLength(str: string): number {
//   return str.length;
// }

// getLength(100);  // ③

// 问题分析：
// 1. ① 处会有什么错误？___将string类型赋予给了number类型____
// 2. ② 处能正常执行吗？为什么？____可以，any类型的元素可以赋值给任意类型的元素___
// 3. ③ 处能正常执行吗？为什么？___不行，实参要字符串 _____

/* ===================================== 题目分割线 ======================================= */

/*
三、编程题
*/

// 实现一个表单验证器
//
// 题目背景：你需要为一个用户注册表单实现一个类型安全的验证器。表单包含以下字段：
// 1. 用户名：string，必填，长度3 - 20个字符
// 2. QQ邮箱：string，必填，必须是以 @qq.com 结尾
// 3. 年龄：number，可选，如果填写必须是3 - 120之间
// 4. 密码：string，必填，至少6个字符
// 5. 确认密码：string，必填，必须和密码相同
//
// 题目要求：
// 定义表单数据的 TypeScript 类型
// 实现验证函数，返回验证结果

// 1. 定义表单数据类型
// 2. 实现验证函数（data 是用户输入的数据）

// 你的实现
// 要求：
// 1. 检查每个字段的类型是否符合 UserFormData
// 2. 检查每个字段的验证规则
// 3. 返回错误信息（通过为 true ，没通过为 false）

// function 用户名函数(名字:string):boolean{
//   if (名字.length>=3&&名字.length<=20){
//     return true
//   }
//   else{
//     return false
//   }
// }

// type 年龄=number
// function 年龄函数(岁数:年龄):boolean{
//   if (3<岁数&&岁数<120){
//     return true
//   }
//   else {
//     return false
//   }
// }
interface userInfomation {
  username: string;
  QQemail: string;
  age?: number;
  passswprd: string;
  secendpassword: string;
}
function UserFormData(everuser: userInfomation): boolean[] {
  // 设置一个数组接住返回值
  let users: boolean[] = [];
  // 用户名长度
  if (everuser.username.length >= 3 && everuser.username.length <= 20) {
    users.push(true);
  } else {
    users.push(false);
  }
  // qq邮箱
  if (everuser.QQemail.endsWith("@qq.com")) {
    users.push(true);
  } else {
    users.push(false);
  }
  // 年龄
  if (
    everuser.age === undefined ||
    (everuser.age >= 3 && everuser.age <= 120)
  ) {
    users.push(true);
  } else {
    users.push(false);
  }
  // 密码
  if (everuser.passswprd.length >= 6) {
    users.push(true);
  } else {
    users.push(false);
  }
  // 确认密码
  if (everuser.secendpassword === everuser.passswprd) {
    users.push(true);
  } else {
    users.push(false);
  }
  return users;
}
const testData: userInfomation = {
  username: "Alice",
  QQemail: "123456@qq.com",
  age: 25,
  passswprd: "mypassword",
  secendpassword: "mypassword",
};

let datas = UserFormData(testData);
let res = datas.every((i) => i === true);
if (res === true) {
  console.log("验证通过");
} else {
  console.log("错误");
}

/* ============================================================================ */
/* ============================================================================ */
/*                    ▼▼▼            第三批新增题目            ▼▼▼              */
/* ============================================================================ */
/* ============================================================================ */

/*
  ==========================================
  一、单选题
  ==========================================
*/

// 1. 关于 `never` 类型，以下说法正确的是：    （   B  ）
// A. `never` 类型的变量可以赋值为 null
// B. `never` 类型通常由 TypeScript 自动推断出来，表示永远不会有值的类型
// C. `never` 和 `void` 完全一样，可以互换使用
// D. 可以给 `never` 类型的变量赋值为 undefined

/* ------------------------------ 题目分割线 -------------------------------- */

// 2. 关于 `type`（类型别名），以下用法 “错误” 的是：    （   C  ）
// A. type ID = number;
// B. type User = { name: string; age: number };
// C. type Count = 10;
// D. type 不能用于定义对象结构，只能定义基本类型

/* ------------------------------ 题目分割线 -------------------------------- */

// 3. 分析以下代码，哪一行会报错？    （  B  ）
interface Person {
  name: string;
  readonly id: number;
  age?: number;
}
const p: Person = { name: "张三", id: 1 };
// p.name = "李四";    // 第①行
// p.id = 2;           // 第②行
// p.age = 25;         // 第③行
// A. 第①行
// B. 第②行
// C. 第③行
// D. 都不会报错
// 这个是调用的意思？应该是重新命名的意思，那就都是错的

/* ------------------------------ 题目分割线 -------------------------------- */

// 4. 关于 interface（接口）的继承，以下代码能正常运行吗？    （  B   ）
interface Animal {
  name: string;
  move(): void;
}
interface Dog extends Animal {
  breed: string;
}
const myDog: Dog = {
  name: "阿黄",
  breed: "金毛",
  move() {
    console.log("跑动");
  },
};
console.log(myDog.name);
// A. 报错，Dog 不能继承 Animal
// B. 正常运行，输出 "阿黄"
// C. 报错，myDog 缺少 move 方法
// D. 正常运行，但输出 undefined
// 问的ai，这个例子不完整，只有使用的结果，move时会输出跑动

/* ------------------------------ 题目分割线 -------------------------------- */

// 5. 关于泛型函数，以下调用会 "报错" 的是：    （  c   ）
function wrapInArray<T>(value: T): T[] {
  return [value];
}
// A. wrapInArray<string>("hello")
// B. wrapInArray<number>(100)
// C. wrapInArray<boolean>(1)
// D. wrapInArray("world")

/* ------------------------------ 题目分割线 -------------------------------- */

// 6. 分析以下枚举代码，`console.log(LogLevel.Warn)` 的输出是：    （  c   ）
enum LogLevel {
  Info = "INFO-信息",
  Warn = "WARN-警告",
  Error = "ERROR-错误",
}
console.log(LogLevel.Warn);
// A. 1
// B. "Warn"
// C. "WARN-警告"
// D. undefined

/* ------------------------------ 题目分割线 -------------------------------- */

// 7. 以下哪种写法是**字符串枚举**的正确定义？    （  b   ）
// A. enum Color { Red, Green, Blue }
// B. enum Color { Red = "RED", Green = "GREEN", Blue = "BLUE" }
// C. enum Color { Red = 0, Green = "green" }
// D. enum Color { "RED", "GREEN", "BLUE" }
// 那么ab两个有什么区别，都是数字枚举

/* ------------------------------ 题目分割线 -------------------------------- */

// 8. 分析以下代码，哪一行会报错？    （   b  ）
let arr: [string, number];
// arr = ["hello", 100];     // 第①行
// arr = [200, "world"];     // 第②行
// arr = ["hi"];             // 第③行
// A. 第①行
// B. 第②行
// C. 第③行
// D. 第②行和第③行都会报错
// 多了会报错，少了不行但是不会报错？

/*
  ==========================================
  二、代码分析题
  ==========================================
*/

// 1. 分析 `never` 类型的推断（参考文档：never 定义）：
// let value: string;
// value = "hello";
// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// } else {
//   console.log(value); // TS 推断此处的 value 是什么类型？
// }
// 问题：else 分支中，TS 推断 value 的类型是 ________never ，
//       原因是 _____________________无法被定义，或者说按照else的条件，那么在前文对value的定义失效了，现在的value是没有被定义的

/* ------------------------------ 题目分割线 -------------------------------- */

// 2. 分析 interface 的 readonly 和可选属性（提示：参考文档 interface 基础定义）：
interface Config {
  readonly appName: string;
  version?: number;
}
const config: Config = { appName: "MyApp" };
// config.appName = "NewApp";   // ①
// config.version = 2;          // ②
// 问题：
// 1. 第①行会报错吗？ ________会 ，原因是 ________________________________________const定义的值无法被更改
// 2. 初始化时没有写 version 属性，会报错吗？ ________ 不会报错，原因是 ____________________?表示可写可不写

/* ------------------------------ 题目分割线 -------------------------------- */

// 3. 分析泛型与 any 的区别（提示：参考文档：泛型和any对比）：
function safeWrap<T>(value: T): T[] {
  return [value];
}
function dangerWrap(value: any): any[] {
  return [value];
}
safeWrap(100).map((x) => x.toFixed(2)); // ①//这个函数什么意思？问的ai是高阶函数，那就是先把safeWrap(100)代入，返回[100],在带入到map（x）里面，返回[100].toFixed(2)
dangerWrap(100).map((x) => x.undefinedMethod()); // ②//没懂这个any的。any是啥都可以，所以也可以？

// 问题：
// 1. ① 处能正常执行并得到正确提示吗？ ________能
// 2. ② 处在编译时会报错吗？ ________ ，原因是 ________________________________________

/*
  ==========================================
  三、编程题
  ==========================================
*/

// ---- 第1题：type 别名 + 函数 ----
// 题目：使用 type 定义一个"商品"类型，并编写函数计算商品总价。
// 要求：
//      1. 使用 type 定义一个 Product 类型，包含三个属性：
//         - name（string）：商品名称
//         - price（number）：单价
//         - count（number）：数量
//      2. 编写函数 calcTotal，接收一个 Product 类型的参数，
//         返回 price * count 的结果（返回值类型为 number）。
//      3. 定义一个商品 apple：name 为 "苹果"，price 为 5.5，count 为 3。
//      4. 调用 calcTotal(apple)，用 console.log 打印结果。
//         预期输出：16.5

// 在这里写你的代码：
type Product = {
  name: string;
  price: number;
  count: number;
  name: string;
  price: number;
  count: number;
};

function calcTotal(products: Product): number {
  return products.price * products.count;
}
const apple = {
  name: "苹果",
  price: 5.5,
  count: 3,
const apple = {
  name: "苹果",
  price: 5.5,
  count: 3,
};
let appleSel = calcTotal(apple);
console.log(appleSel);
/* ------------------------------ 题目分割线 -------------------------------- */

// ---- 第2题：interface 定义 + 接口继承 ----
// 题目：定义"车辆"接口和继承它的"电动汽车"接口。
// 要求：
//      1. 定义 interface Vehicle，包含：
//          - brand（string）：品牌
//          - year（number）：年份
//      2. 定义 interface ElectricCar，**继承 Vehicle**，额外包含：
//          - battery（number）：电池容量（单位 kWh）
//      3. 创建一个 ElectricCar 类型的对象 myCar：
//         brand 为 "比亚迪"，year 为 2025，battery 为 60。
//      4. 用 console.log 打印：`我的车是${myCar.brand}，${myCar.year}年款，电池${myCar.battery}kWh`
//         预期输出：我的车是比亚迪，2025年款，电池60kWh

// 在这里写你的代码：
interface Vehicle {
  brand: string;
  year: number;
}
interface ElectricCar extends Vehicle {
  battery: number;
}
const myCar: ElectricCar = {
  brand: "比亚迪",
  year: 2025,
  battery: 60
}
console.log(`我的车是${myCar.brand},${myCar.year}年款，电池${myCar.battery}kWh`)
/* ------------------------------ 题目分割线 -------------------------------- */

// ---- 第3题：泛型函数（基础）----
// 题目：编写一个泛型函数 getFirst，获取数组的第一个元素。
// 要求：
//      1. 函数名：getFirst
//      2. 泛型参数：<T>
//      3. 参数：arr（类型为 T[]，即元素类型为 T 的数组）
//      4. 返回值类型：T（返回数组的第一个元素）
//      5. 函数体：直接返回 arr[0]
//      6. 测试：
//         - 调用 getFirst<number>([10, 20, 30])，打印结果。预期输出：10
//         - 调用 getFirst<string>(["a", "b", "c"])，打印结果。预期输出："a"

// 在这里写你的代码：
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<number>(["a", "b", "c"]));
/* ------------------------------ 题目分割线 -------------------------------- */

// ---- 第4题：enum 枚举 + 函数 ----
// 题目：定义季节枚举，并编写函数根据季节返回活动建议。
// 要求：
//      1. 定义字符串枚举 Season，包含四个值：
//         - Spring = "春天"
//         - Summer = "夏天"
//         - Autumn = "秋天"
//         - Winter = "冬天"
//      2. 编写函数 getActivity，接收一个 Season 类型的参数，
//         返回值类型为 string。
//      3. 函数逻辑（用 if-else 或 switch）：
//         - Season.Spring → 返回 "去踏青"
//         - Season.Summer → 返回 "去游泳"
//         - Season.Autumn → 返回 "去赏枫"
//         - Season.Winter → 返回 "去滑雪"
//      4. 调用 getActivity(Season.Summer)，打印结果。预期输出：去游泳

// 在这里写你的代码：

// 一开始不理解，season.什么什么的，参数不知道具体怎么去定
// enum Season {
//   Spring = "春天",
//   Summer = "夏天",
//   Autumn = "秋天",
//   Winter = "冬天",
// }
// function getActivity(Season: Season): string {
//   let i = "";
//   if ((i = "春天")) {
//     ("去踏青");
//   } else if ((i = "夏天")) {
//     ("去游泳");
//   } else if ((i = "秋天")) {
//     ("去赏枫");
//   } else if ((i = "冬天")) {
//     ("去滑雪");
//   }
//   return i;
// }
// console.log(getActivity(Season.Summer));

enum Season {
  Spring = "春天",
  Summer = "夏天",
  Autumn = "秋天",
  Winter = "冬天",
}

function getActivity(season: Season): string {
  if (season === Season.Spring) {
    return "去踏青";
  } else if (season === Season.Summer) {
    return "去游泳";
  } else if (season === Season.Autumn) {
    return "去赏枫";
  } else if (season === Season.Winter) {
    return "去滑雪";
  } else {
    return "无";
  }
}
console.log(getActivity(Season.Summer));

/* ------------------------------ 题目分割线 -------------------------------- */

// ---- 第5题：泛型接口（interface + 泛型）----
// 题目：定义一个通用的 API 响应接口，并使用它。
// 要求：
//      1. 定义泛型接口 ApiResponses<T>，包含三个属性：
//         - code（number）：状态码
//         - message（string）：提示信息
//         - data（T）：响应数据，类型由泛型 T 决定
//      2. 创建一个变量 res1，类型为 ApiResponse<string>：
//         code 为 200，message 为 "成功"，data 为 "用户数据加载完成"
//      3. 创建一个变量 res2，类型为 ApiResponse<string[]>：
//         code 为 200，message 为 "成功"，data 为 ["苹果", "香蕉", "橙子"]
//      4. 分别打印 res1.data 和 res2.data。
//         预期输出：
//         用户数据加载完成
//         ["苹果", "香蕉", "橙子"]

// 在这里写你的代码：
interface ApiResponses<T> {
  code: number;
  message: string;
  data: T;
}
let res1: ApiResponses<string> = {
  code: 200,
  message: "成功",
  data: "用户数据加载完成",
};
let res2: ApiResponses<string[]> = {
  code: 200,
  message: "成功",
  data: ["苹果", "香蕉", "橙子"],
};
console.log(res1.data);
console.log(res2.data);
/* ------------------------------ 题目分割线 -------------------------------- */

// ---- 第6题：tuple 元组 + 类型别名 ----
// 题目：用元组表示学生的成绩记录，并编写查询函数。
// 要求：
//      1. 使用 type 定义一个 ScoreRecord 类型别名，它是一个元组：
//         - 第一个元素是 string（学生姓名）
//         - 第二个元素是 number（分数）
//      2. 定义一个数组 scores，类型为 ScoreRecord[]，
//         包含以下三条数据：
//         - ["张三", 85]
//         - ["李四", 92]
//         - ["王五", 78]
//      3. 编写函数 findScore，接收两个参数：
//         - records：ScoreRecord[] 类型（成绩记录数组）
//         - name：string 类型（要查找的学生姓名）
//         返回值类型为 string。
//      4. 函数逻辑：
//         - 遍历 records 数组，找到姓名等于 name 的那条记录
//         - 如果找到了，返回 `${name}的分数是${分数}`（例如 "张三的分数是85"）
//         - 如果没找到，返回 "未找到该学生"
//      5. 测试：
//         - 调用 findScore(scores, "李四")，打印结果。预期输出：李四的分数是92
//         - 调用 findScore(scores, "赵六")，打印结果。预期输出：未找到该学生

// 在这里写你的代码：
type ScoreRecord = [string, number];
let scores: ScoreRecord[] = [
  ["张三", 85],
  ["李四", 92],
  ["王五", 78],
];
function findScore(scores: ScoreRecord[], name: string): string {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i][0] === name) {
      return `${name}的分数是${scores[i][1]}`;
    }
  }
  return "未找到该学生";
  // 这里为什么不能在循环里面写else？写了之后会说这个函数没有return
}
console.log(findScore(scores, "李四"));
console.log(findScore(scores, "赵六"));

/*
  ==========================================
  四、综合应用题
  ==========================================
*/

// ---- 综合题：图书管理系统 ----
// 背景：你需要为一个小型图书馆设计类型系统，并实现基本的业务功能。
//
// 需求：
// 1. 定义字符串枚举 BookStatus，包含三个值：
//    - Available = "可借"
//    - Borrowed = "已借出"
//    - Reserved = "已预约"
//
// 2. 使用 interface 定义 Book（图书），包含：
//    - id（number）：图书编号
//    - title（string）：书名
//    - author（string）：作者
//    - status（BookStatus）：当前状态
//
// 3. 使用 interface 定义 Reader（读者），包含：
//    - name（string）：读者姓名
//    - borrowedBooks（Book[]）：已借图书列表（Book 类型的数组）
//
// 4. 实现以下函数：
//
//    4.1 createReader(name: string): Reader
//        - 创建一个新读者，borrowedBooks 初始为空数组 []
//        - 返回创建的 Reader 对象
//
//    4.2 borrowBook(reader: Reader, book: Book): string
//        - 如果 book.status 不是 BookStatus.Available，返回 "该书不可借"
//        - 如果可以借：
//          - 把 book 的 status 改为 BookStatus.Borrowed
//          - 把 book 加入 reader.borrowedBooks 数组
//          - 返回 "借阅成功"
//
//    4.3 returnBook(reader: Reader, bookId: number): string
//        - 在 reader.borrowedBooks 中查找 id 等于 bookId 的书
//        - 如果没找到，返回 "该读者未借此书"
//        - 如果找到了：
//          - 把那本书的 status 改为 BookStatus.Available
//          - 从 reader.borrowedBooks 中移除那本书（可以用 splice 或 filter）
//          - 返回 "归还成功"
//
// 5. 测试代码（直接写下面即可）：
//    - 创建3本书：{ id: 1, title: "红楼梦", author: "曹雪芹", status: BookStatus.Available }
//                 { id: 2, title: "西游记", author: "吴承恩", status: BookStatus.Available }
//                 { id: 3, title: "水浒传", author: "施耐庵", status: BookStatus.Reserved }
//    - 创建1个读者：名字叫 "小明"
//    - 小明借红楼梦 → 打印结果（预期：借阅成功）
//    - 小明借水浒传 → 打印结果（预期：该书不可借）
//    - 打印小明已借图书的书名（预期：红楼梦）
//    - 小明归还红楼梦 → 打印结果（预期：归还成功）
//    - 再次打印小明已借图书的数量（预期：0）

// 在这里写你的代码：
enum BookStatus {
  Available = "可借",
  Borrowed = "已借出",
  Reserved = "已预约",
}
interface Book {
  id: number;
  title: string;
  author: string;
  status: BookStatus;
}
interface Reader {
  name: string;
  borrowedBook: Book[];
}
function createReader(name: string): Reader {
  let newReader: Reader = { name: name, borrowedBook: [] };
  return newReader;
}
function borrowbook(newReader: Reader, book: Book) {
  if (book.status !== BookStatus.Borrowed) {
    return "该书不可借";
  } else {
    book;
    Reader.borrowBook;
  }
}
