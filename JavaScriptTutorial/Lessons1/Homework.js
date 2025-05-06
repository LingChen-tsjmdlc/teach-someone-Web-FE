/*
 * 题目1：回答并替换注释中的 "?"
 */
var a = "123";
var b = true;
var c = null;
var d = "3.14abc";
var e = undefined;

// 以下表达式的结果是什么？
console.log(Number(a));     // ? 123
console.log(parseInt(d));   // ? NaN
console.log(String(b));     // ? 1
console.log(typeof c);      // ? number
console.log(isNaN(d));      // ? flase

// 以下加法运算的结果是什么？
console.log(a + b);         // ? '1231'
console.log(b + c);         // ? 1 
console.log(c + d);         // ? 'null3.14abc'
console.log(d + e);         // ? '3.14abcundefined' 



/*
 * 题目2：回答并替换注释中的 "?"
 */
var x = "Hello";
var y = 100;
var z = "50px";

// 以下表达式的结果是什么？
console.log(typeof x);      // ? string
console.log(typeof y);      // ? number
console.log(parseInt(z));   // ? NaN
console.log(isNaN(z));      // ? flase
console.log(String(y));     // ? "100"

// 执行以下操作后，变量的值和类型是什么？
var result1 = x + y;            // result1的值和类型是？ number = x + y  number
var result2 = y + Number(z);    // result2的值和类型是？ number = y + Number(z)  string||bolean
var result3 = y + parseInt(z);  // result3的值和类型是？ number = y + parseInt(z)  string