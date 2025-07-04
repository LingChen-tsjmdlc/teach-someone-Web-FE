/** 一，选择题 */
// 1. 以下哪个不是 JavaScript 的基本数据类型？(D)
// A.number
// B.string
// C.object
// D.float

// 2. 表达式 parseInt("3.14.15") 的结果是：(B)
// A. 3.14
// B. 3
// C.NaN
// D. 3.14.15

// 3. 以下哪个运算符要求值和类型都相等？(B)
// A. ==
// B. ===
// C. =
// D. !=

// 4. 达式 "5" + 2 的结果是：(B)
// A. 7
// B. "52"
// C. 52
// D.报错

// 5.以下关于变量的说法错误的是：(B)
// A.变量名可以包含$
// B.变量名可以以数字开头
// C.变量名区分大小写
// D.变量名不能是关键字

/** 二，填空题 */
// 表达式 typeof null 的结果是 ___object___。
// 表达式 "10" == 10 的结果是 ____true__（true / false）。
// 表达式!true || false 的结果是 ___false___。
// 将字符串"123"转换为数字的三种方法是：、、___parseInt("123"),Number("123"),parseFloat("123")___。
// 表达式 3 > 2 > 1 的结果是 ___true___。

/** 三，代码分析题 */
// 1. 分析代码输出的结果
var a = "10";
var b = 10;
console.log(a == b);
//true
conccsole.log(a === b);
//false

// 2. 分析代码输出的结果
var x = 5;
var y = "5";
console.log(x + y);
//"55"
console.log(x - y);
//0

// 3. 用三元运算符改写以下代码
var wight = 18;
if (wight >= 50) {
  console.log("超重");
} else {
  console.log("非超重");
}
//var wight = 18;
//wight >= 50?console.log("超重"): console.log("非超重")

/** 四，编程题 */
// 判断一个变量是否是数字，如果是数字则输出"是数字"，否则输出"不是数字"。
var num="123"
if(typeof num=="number"){
console.log("是数字");
}
else{
  console.log("不是数字");
}
