/*
 * 题目1：回答并替换注释中的 "?"
 */
var a = "123";
var b = true;
var c = null;
var d = "3.14abc";
var e = undefined;

// 以下表达式的结果是什么？
console.log(Number(a));     // ?
console.log(parseInt(d));   // ?
console.log(String(b));     // ?
console.log(typeof c);      // ?
console.log(isNaN(d));      // ?

// 以下加法运算的结果是什么？
console.log(a + b);         // ?
console.log(b + c);         // ?
console.log(c + d);         // ?
console.log(d + e);         // ?



/*
 * 题目2：回答并替换注释中的 "?"
 */
var x = "Hello";
var y = 100;
var z = "50px";

// 以下表达式的结果是什么？
console.log(typeof x);      // ?
console.log(typeof y);      // ?
console.log(parseInt(z));   // ?
console.log(isNaN(z));      // ?
console.log(String(y));     // ?

// 执行以下操作后，变量的值和类型是什么？
var result1 = x + y;            // result1的值和类型是？
var result2 = y + Number(z);    // result2的值和类型是？
var result3 = y + parseInt(z);  // result3的值和类型是？