/* ------------------------------------------------------------
 * 一、选择题
 * ------------------------------------------------------------ */

// 1. 下面这段代码的输出是？
var x = 10;
x = "10";
console.log(typeof x);

//    A. "number"
//    B. "string"
//    C. "object"
//    D. 报错
//    答案：B

// 2. 下面这段代码的输出是？

//    A. 6
//    B. "123"
//    C. "33"
//    D. "15"
//    答案：

// 3. 下面这段代码的输出是？
console.log(isNaN("3.14"));

//    A. true
//    B. false
//    C. "3.14"
//    D. NaN
//    答案：A

// 4. 下面这段代码的输出是？
console.log(parseInt("88.99元"));

//    A. 88
//    B. 88.99
//    C. NaN
//    D. "88"
//    答案：A

// 5. 下面这段代码的输出是？
var a;
console.log(typeof a);
var b = null;
console.log(typeof b);

//    A. "undefined"  /  "null"
//    B. "undefined"  /  "object"
//    C. "null"       /  "object"
//    D. 都报错
//    答案：B

// 6. 下面这段代码的输出是？
console.log(Number(""));
console.log(Number("abc"));

//    A. 0    /  NaN
//    B. NaN  /  NaN
//    C. 0    /  0
//    D. ""   /  NaN
//    答案：A

/* ------------------------------------------------------------
 * 二、代码分析题
 * ------------------------------------------------------------ */

// 1. 变量覆盖
var role = "学生";
role = "前端工程师";
var level = 1;
level = level + 1;
console.log(role);
// 输出："前端工程师"
console.log(level);
// 输出：2

// 2. typeof 看类型
var a = 3.14;
var b = "3.14";
var c = true;
var d = null;
var e;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
// 输出：number
// 输出：string
// 输出：boolean
// 输出：object
// 输出：null

// 3. isNaN 的"先转再判"
// 提示：isNaN(x) 实际是问"x 转成数字后是不是 NaN"
console.log(isNaN(100));
console.log(isNaN("100"));
console.log(isNaN("一百"));
console.log(isNaN(true));
console.log(isNaN(null));
console.log(isNaN(undefined));
// 输出：true
// 输出：flase
// 输出：flase
// 输出：true
// 输出：true
// 输出：flase

// 4. 类型转换
console.log(Number("3.5px"));
console.log(parseInt("88.99元"));
console.log(parseInt("元88"));
console.log(parseFloat("12.34.56"));
console.log(parseFloat("abc12"));
// 输出：3.5
// 输出：88
// 输出：NaN
// 输出：12.34
// 输出：NaN

// 5. 加号 + 的两种情况
// 规则：从左到右算，遇到字符串就开始拼接，之后都按拼接处理
console.log(2 + 3 + "5");
console.log("2" + 3 + 5);
console.log(1 + true);
console.log("1" + true);
console.log(1 + null);
// 输出："235"
// 输出："235"
// 输出：2
// 输出：11
// 输出：1

/* ------------------------------------------------------------
 * 三、编程题
 * ------------------------------------------------------------ */

/* 第 1 题：自我介绍卡片
 *
 * 场景：你刚加入一个团队，需要在群里发一段自我介绍。
 *
 * 提示：模板字符串就是 `${变量}` 这个东西
 *
 * 要求：
 *   ① 定义 4 个变量：姓名、年龄（数字）、城市、是否单身（布尔值）
 *   ② 用【模板字符串】输出一段话，例如：
 *      "大家好，我叫张三，今年 25 岁，来自杭州，单身状态：true"
 *   ③ 再用【+ 号拼接】写一次同样的输出，体会两种写法的差别
 */
// 在这里写你的代码：
var hallo = "大家好，";
var name = "张三";
var age = 25;
var city = "杭州";
var single = true;

console.log(
  hallo +
    "我叫" +
    name +
    "," +
    "今年" +
    age +
    "岁，" +
    "来自" +
    city +
    "," +
    "单身状态:" +
    single,
);
console.log(
  `${hallo}我叫${name},今年${age}岁，来自${city},单身状态：${single}`,
);

/* 第 2 题：购物车小计
 *
 * 场景：用户在你的网站买了一些商品，你要算总价。
 *       注意！ —— 从前端 Input 表单里拿到的数字，全都是字符串！
 *
 * 数据：
 *   - 商品：JavaScript 入门书
 *   - 单价（字符串）："59.9"
 *   - 数量（字符串）："3"
 *   - 运费（数字）：8
 *
 * 要求：
 *   ① 算出总价 = 单价 × 数量 + 运费
 *   ② 用模板字符串输出一行小计，例如：
 *      "购买《JavaScript 入门书》3 本，应付 187.7 元（含运费 8 元）"
 *
 * 提醒：如果你直接用字符串去乘、去加，会得到奇怪的结果。注意类型转换。
 */
var productName = "JavaScript 入门书";
var priceStr = "59.9";
var countStr = "3";
var shipping = 8;

// 在这里写你的代码：

var pay = Number(priceStr) * Number(countStr) + shipping;
console.log(pay);
console.log(
  `购买《${profuctName}》${Number(countStr)}本，应付${pay}元（含运费${shipping}元）`,
);
