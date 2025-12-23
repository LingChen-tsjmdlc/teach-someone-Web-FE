/*
一、单选题
*/
// 1. 关于 TypeScript 类型，以下说法正确的是：（ C ）
// A.any 类型是类型安全的
// B.将变量声明为 any 后，TypeScript 会进行严格的类型检查
// C.any 类型的值可以赋值给任何其他类型的变量
// D.应该尽量多用 any 类型，可以提高代码灵活性

/* ------------------------------ 题目分割线-------------------------------- */

// 2. 关于 any 和 unknown 类型，以下说法正确的是：（ D ）
// A. any 类型是类型安全的，unknown 类型是不安全的
// B. 任何类型都可以赋值给 any，任何类型也都可以赋值给 unknown
// C. unknown 类型的值可以直接赋值给其他类型的变量
// D. any 类型在使用前不需要进行类型检查

/* ------------------------------ 题目分割线-------------------------------- */

// 3. 关于元组（tuple）类型，以下说法正确的是：（ B ）
// A. 元组中所有元素的类型必须相同
// B. 元组的长度是固定的，不能改变（有 ... 情况除外）
// C. 元组可以使用数组的所有方法
// D. 元组是 JavaScript 原生的数据类型


/* ===================================== 题目分割线 ======================================= */


/*
二、代码分析题
*/

// 1. 分析以下代码，找出错误并说明原因：
// let userName: String = "张三";
// let userAge: number = 25;

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
// 1. 代码能正常运行吗？___能____
// 2. messageStr 最终的值是：___"Hello TypeScript"____
// 3. 如果去掉 if 判断，直接写 messageStr = data 会怎样？___报错____


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
// 1. ① 处会有什么错误？__类型跟前面不同_____
// 2. ② 处能正常执行吗？为什么？__不能，跟前面对对应的需求不符_____
// 3. ③ 处能正常执行吗？为什么？___ 参数类型错误 _____


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
interface UserFormData {
  name: string;
  email: string;
  age?: number;
  password: string;
  depassword: string;  // 你的定义
}


// 2. 实现验证函数（data 是用户输入的数据）
function validateFormFunc(data: any): boolean {
  if (typeof data.Username !== "string" || data.Username.length < 3 || data.Username.length > 20) {
    return false;
  }
  if (typeof data.Email !== "string" || !data.Email.endsWith("@qq.com")) {
    return false;
  }
  if (typeof data.Age !== "number" || data.Age < 3 || data.Age > 120) {
    return false;
  }
  if (typeof data.Password !== "string" || data.Password.length < 6) {
    return false;
  }
  if (data.Password !== data.ConfirmPassword) {
    return false;
  }
  else {
    return true
  }
  // 你的实现
  // 要求：
  // 1. 检查每个字段的类型是否符合 UserFormData
  // 2. 检查每个字段的验证规则
  // 3. 返回错误信息（通过为 true ，没通过为 false）
}

