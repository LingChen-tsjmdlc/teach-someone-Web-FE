/*
  ╔══════════════════════════════════════════╗
  ║  第一批 · 一、单选题（第1~6题）          ║
  ╚══════════════════════════════════════════╝
*/

// 1. 答案：A
// TypeScript 包含了 JavaScript 的所有内容，是其超集

// 2. 答案：C
// 第3行：userName 声明为 string，赋值 100（number）会报编译错误

// 3. 答案：B
// unknown 是类型安全的 any，赋值给其他类型前必须先做类型检查

// 4. 答案：D
// void 表示函数不返回任何值，调用者不应依赖其返回值做任何操作

// 5. 答案：C
// 元组 [string, number] 只能有两个元素，第三个赋值 ["Alice", 20, true] 多了一个元素，会报错

// 6. 答案：D
// 优先使用 const，需要重新赋值时用 let，永远不要使用 var


/*
  ╔══════════════════════════════════════════╗
  ║  第一批 · 二、代码分析题（第1~4题）      ║
  ╚══════════════════════════════════════════╝
*/

// 1. 答案："orange"
// fruit 先赋值 "apple"，再重新赋值为 "orange"（原始类型不可变，但可以重新赋值），最终打印 "orange"

// 2. 答案：会报错
// 报错信息：不能将类型"unknown"分配给类型"string"
// 原因：unknown 类型不能直接赋值给 string，必须先做类型检查或断言

// 3. 答案：控制台输出 "Test"
// logInfo 函数是 void 返回值，但函数体内 console.log(msg) 会正常打印参数

// 4. 答案："Success"
// StatusCode 是数字枚举，Success 默认值为 0，StatusCode[0] 反向映射得到 "Success"


/*
  ╔══════════════════════════════════════════╗
  ║  第一批 · 三、编程题（第1~4题）          ║
  ╚══════════════════════════════════════════╝
*/

// ---- 第1题答案 ----
function calculateArea1(width: number, height: number): number {
  return width * height;
}
console.log(calculateArea1(10, 20)); // 输出：200


/* ------------------------------ 题目分割线 -------------------------------- */


// ---- 第2题答案 ----
type ApiResponse2 = [number, string];

function checkServerStatu(isNormal: boolean): ApiResponse2 {
  if (isNormal) {
    return [200, "OK"];
  } else {
    return [500, "Internal Server Error"];
  }
}

const [statusCode2, message2] = checkServerStatu(true);
console.log(`状态码: ${statusCode2}, 提示: ${message2}`); // 输出：状态码: 200, 提示: OK


/* ------------------------------ 题目分割线 -------------------------------- */


// ---- 第3题答案 ----
enum OrderStatus3 {
  Pending,
  Shipped,
  Delivered,
}
let currentStatus3: OrderStatus3 = OrderStatus3.Pending;
console.log(currentStatus3);      // 输出：0
console.log(OrderStatus3[0]);     // 输出："Pending"


/* ------------------------------ 题目分割线 -------------------------------- */


// ---- 第4题答案 ----
// let weatherData4: unknown = "25℃";

// function parseWeather(data: unknown): void {
//   if (typeof data === "string") {
//     console.log("当前温度为：" + data);
//   } else {
//     console.log("数据格式异常，无法解析");
//   }
// }
// parseWeather(weatherData4); // 输出：当前温度为：25℃


/*
  ╔══════════════════════════════════════════╗
  ║  第一批 · 四、综合应用题                 ║
  ╚══════════════════════════════════════════╝
*/

// ---- 学生成绩评级系统答案 ----
const rawStudentsAll = [
  { name: "张三", score: 85 },
  { name: "李四", score: 55 },
  { name: "王五", score: 90 },
];

function evaluateStudent(
  students: { name: string; score: number }[]
): { name: string; score: number; grade: string }[] {
  const results: { name: string; score: number; grade: string }[] = [];
  for (let i = 0; i < students.length; i++) {
    const item = students[i];
    const grade = item.score >= 60 ? "及格" : "不及格";
    results.push({ name: item.name, score: item.score, grade });
  }
  return results;
}
console.log(evaluateStudent(rawStudentsAll));
// 输出：[{ name: "张三", score: 85, grade: "及格" }, { name: "李四", score: 55, grade: "不及格" }, { name: "王五", score: 90, grade: "及格" }]


/*
  ╔══════════════════════════════════════════╗
  ║  第二批 · 代码分析题（第1~3题）          ║
  ╚══════════════════════════════════════════╝
*/

// 1. 答案：
// ①: userName 类型是 string，不能赋值为 number 类型（30）
// ②: userAge 类型是 number，不能赋值为 string 类型（"25岁"）
// ③: greet 函数的参数 user 类型是 String（包装对象），而 userAge 是 number 类型，number 不能传给 String 类型的参数

// 2. 答案：
// 1. 代码能正常运行吗？→ 能正常运行
// 2. messageStr 最终的值是："Hello TypeScript"（因为 dataNu 是 string，if 条件为 true）
// 3. 如果去掉 if 判断，直接写 messageStr = dataNu 会怎样？→ 报错，不能将类型"unknown"分配给类型"string"

// 3. 答案：
// 1. ① 处会有什么错误？→ 不能将类型"string"分配给类型"number"（score 是 number，不能赋值 "90分"）
// 2. ② 处能正常执行吗？→ 能正常执行，因为 any 类型可以赋值给任何类型的变量
// 3. ③ 处能正常执行吗？→ 不能，getLength 的参数要求 string，但传入的是 number(100)


/*
  ╔══════════════════════════════════════════╗
  ║  第二批 · 编程题（表单验证器）           ║
  ╚══════════════════════════════════════════╝
*/

interface UserFormData {
  username: string;
  QQemail: string;
  age?: number;
  password: string;
  confirmPassword: string;
}

function validateForm(data: UserFormData): boolean[] {
  const results: boolean[] = [];

  // 用户名：长度 3~20
  results.push(data.username.length >= 3 && data.username.length <= 20);

  // QQ邮箱：必须以 @qq.com 结尾
  results.push(data.QQemail.endsWith("@qq.com"));

  // 年龄：可选，如果填了必须是 3~120
  if (data.age === undefined) {
    results.push(true);
  } else {
    results.push(data.age >= 3 && data.age <= 120);
  }

  // 密码：至少6个字符
  results.push(data.password.length >= 6);

  // 确认密码：必须和密码相同
  results.push(data.confirmPassword === data.password);

  return results;
}

const testFormData: UserFormData = {
  username: "Alice",
  QQemail: "123456@qq.com",
  age: 25,
  password: "mypassword",
  confirmPassword: "mypassword",
};

const formResults = validateForm(testFormData);
const allPassed = formResults.every((r) => r === true);
console.log(allPassed ? "验证通过" : "验证失败"); // 输出：验证通过


/*
  ╔════════════════════════════════════════════════════════╗
  ║  第三批 · 一、单选题（第7~14题）                       ║
  ╚════════════════════════════════════════════════════════╝
*/

// 1. 答案：B
// never 类型通常由 TS 自动推断，表示永远不会有值（null、undefined 都不能赋给 never）

// 2. 答案：D
// type 既可以定义基本类型别名，也可以定义对象结构（如 type User = { name: string; age: number }）
// 所以 D 说法错误

// 3. 答案：B
// 第②行 p.id = 2 会报错，因为 id 是 readonly 属性，初始化后不能修改
// 第①行 p.name = "李四" 正常（name 不是 readonly）
// 第③行 p.age = 25 正常（age 是可选属性，初始化后可以赋值）

// 4. 答案：B
// Dog extends Animal 正确继承，myDog 包含了 name、breed、move 三个必需属性，正常运行输出 "阿黄"

// 5. 答案：C
// wrapInArray<boolean>(1) 会报错，因为 1 是 number 类型，不匹配泛型参数 boolean
// 其他选项：A/B 类型匹配正确，D 自动推断为 string 也正确

// 6. 答案：C
// LogLevel 是字符串枚举，LogLevel.Warn 的值就是 "WARN-警告"

// 7. 答案：B
// A 是数字枚举（默认递增），B 是正确的字符串枚举，C 是异构枚举（不推荐），D 语法错误

// 8. 答案：D
// 第②行 arr = [200, "world"] 报错：200 是 number 不匹配第一个位置 string，"world" 是 string 不匹配第二个位置 number
// 第③行 arr = ["hi"] 报错：元组要求两个元素，只给了一个
// 第①行 arr = ["hello", 100] 类型完全匹配，不报错


/*
  ╔════════════════════════════════════════════════════════╗
  ║  第三批 · 二、代码分析题（第5、6、8题）                ║
  ╚════════════════════════════════════════════════════════╝
*/

// 1. 答案：
// else 分支中，TS 推断 value 的类型是 never
// 原因：value 声明为 string，if 已经判断 typeof value === "string" 为 true，
//       那 else 分支在逻辑上永远不会执行，所以 TS 推断为 never

// 2. 答案：
// 1. 第①行会报错吗？→ 会报错
//    原因：appName 是 readonly 属性，只能在初始化时赋值，之后不能修改
// 2. 初始化时没有写 version 属性，会报错吗？→ 不会报错
//    原因：version 是可选属性（用了 ?），可以不写

// 3. 答案：
// 1. ① 处能正常执行并得到正确提示吗？→ 能，safeWrap(100) 返回 number[]，
//    .map 里 x 被推断为 number，x.toFixed(2) 有完整的类型提示
// 2. ② 处在编译时会报错吗？→ 不会报错（编译通过），但运行时会报错
//    原因：dangerWrap 的参数和返回值都是 any，any 放弃了类型检查，
//    所以 x.undefinedMethod() 编译时不报错，但运行时 undefined 不存在 undefinedMethod 方法，会报错


/*
  ╔════════════════════════════════════════════════════════╗
  ║  第三批 · 三、编程题（第5~11题）                       ║
  ╚════════════════════════════════════════════════════════╝
*/

// ---- 第1题答案：type 别名 + 函数 ----
type Product5 = {
  name: string;
  price: number;
  count: number;
};

function calcTotal(product: Product5): number {
  return product.price * product.count;
}

const apple5: Product5 = { name: "苹果", price: 5.5, count: 3 };
console.log(calcTotal(apple5)); // 输出：16.5


/* ------------------------------ 题目分割线 -------------------------------- */


// ---- 第2题答案：interface 定义 + 接口继承 ----
interface Vehicle6 {
  brand: string;
  year: number;
}

interface ElectricCar6 extends Vehicle6 {
  battery: number;
}

const myCar6: ElectricCar6 = {
  brand: "比亚迪",
  year: 2025,
  battery: 60,
};
console.log(`我的车是${myCar6.brand}，${myCar6.year}年款，电池${myCar6.battery}kWh`);
// 输出：我的车是比亚迪，2025年款，电池60kWh


/* ------------------------------ 题目分割线 -------------------------------- */


// ---- 第3题答案：泛型函数（基础）----
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst<number>([10, 20, 30]));  // 输出：10
console.log(getFirst<string>(["a", "b", "c"])); // 输出：a


/* ------------------------------ 题目分割线 -------------------------------- */


// ---- 第4题答案：enum 枚举 + 函数 ----
enum Season8 {
  Spring = "春天",
  Summer = "夏天",
  Autumn = "秋天",
  Winter = "冬天",
}

function getActivity(season: Season8): string {
  if (season === Season8.Spring) {
    return "去踏青";
  } else if (season === Season8.Summer) {
    return "去游泳";
  } else if (season === Season8.Autumn) {
    return "去赏枫";
  } else {
    return "去滑雪";
  }
}

console.log(getActivity(Season8.Summer)); // 输出：去游泳


/* ------------------------------ 题目分割线 -------------------------------- */


// ---- 第5题答案：unknown + 类型收窄 ----
function safeProcess(data: unknown): string {
  if (typeof data === "string") {
    return "字符串：" + data;
  } else if (typeof data === "number") {
    return "数字：" + data;
  } else {
    return "未知类型";
  }
}

console.log(safeProcess("hello")); // 输出：字符串：hello
console.log(safeProcess(42));      // 输出：数字：42
console.log(safeProcess(true));    // 输出：未知类型


/* ------------------------------ 题目分割线 -------------------------------- */


// ---- 第6题答案：泛型接口 ----
interface ApiResponse10<T> {
  code: number;
  message: string;
  data: T;
}

const res10_1: ApiResponse10<string> = {
  code: 200,
  message: "成功",
  data: "用户数据加载完成",
};

const res10_2: ApiResponse10<string[]> = {
  code: 200,
  message: "成功",
  data: ["苹果", "香蕉", "橙子"],
};

console.log(res10_1.data); // 输出：用户数据加载完成
console.log(res10_2.data); // 输出：["苹果", "香蕉", "橙子"]


/* ------------------------------ 题目分割线 -------------------------------- */


// ---- 第7题答案：tuple 元组 + 类型别名 ----
type ScoreRecord11 = [string, number];

const scores11: ScoreRecord11[] = [
  ["张三", 85],
  ["李四", 92],
  ["王五", 78],
];

function findScore(records: ScoreRecord11[], name: string): string {
  for (let i = 0; i < records.length; i++) {
    if (records[i][0] === name) {
      return `${name}的分数是${records[i][1]}`;
    }
  }
  return "未找到该学生";
}

console.log(findScore(scores11, "李四")); // 输出：李四的分数是92
console.log(findScore(scores11, "赵六")); // 输出：未找到该学生


/*
  ╔════════════════════════════════════════════════════════╗
  ║  第三批 · 四、综合应用题（图书管理系统）               ║
  ╚════════════════════════════════════════════════════════╝
*/

// 1. 定义字符串枚举
enum BookStatus {
  Available = "可借",
  Borrowed = "已借出",
  Reserved = "已预约",
}

// 2. 定义 Book 接口
interface Book {
  id: number;
  title: string;
  author: string;
  status: BookStatus;
}

// 3. 定义 Reader 接口
interface Reader {
  name: string;
  borrowedBooks: Book[];
}

// 4.1 创建读者
function createReader(name: string): Reader {
  return {
    name: name,
    borrowedBooks: [],
  };
}

// 4.2 借书
function borrowBook(reader: Reader, book: Book): string {
  if (book.status !== BookStatus.Available) {
    return "该书不可借";
  }
  book.status = BookStatus.Borrowed;
  reader.borrowedBooks.push(book);
  return "借阅成功";
}

// 4.3 还书
function returnBook(reader: Reader, bookId: number): string {
  const index = reader.borrowedBooks.findIndex((b) => b.id === bookId);
  if (index === -1) {
    return "该读者未借此书";
  }
  const book = reader.borrowedBooks[index];
  book.status = BookStatus.Available;
  reader.borrowedBooks.splice(index, 1);
  return "归还成功";
}

// 5. 测试代码
const book1: Book = { id: 1, title: "红楼梦", author: "曹雪芹", status: BookStatus.Available };
const book2: Book = { id: 2, title: "西游记", author: "吴承恩", status: BookStatus.Available };
const book3: Book = { id: 3, title: "水浒传", author: "施耐庵", status: BookStatus.Reserved };

const xiaoming = createReader("小明");

// 小明借红楼梦
console.log(borrowBook(xiaoming, book1)); // 输出：借阅成功

// 小明借水浒传（已预约，不可借）
console.log(borrowBook(xiaoming, book3)); // 输出：该书不可借

// 打印小明已借图书的书名
console.log(xiaoming.borrowedBooks.map((b) => b.title)); // 输出：["红楼梦"]

// 小明归还红楼梦
console.log(returnBook(xiaoming, 1)); // 输出：归还成功

// 再次打印小明已借图书的数量
console.log(xiaoming.borrowedBooks.length); // 输出：0
