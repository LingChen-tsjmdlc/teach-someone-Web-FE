/** 练习题1：成绩转换器
  * 题目​​：将0 - 100的数字成绩转换为等级制：
  * 90 + 为A
  * 80 - 89为B
  * 70 - 79为C
  * 60 - 69为D
  * 60以下为E
  * 使用switch语句实现
*/
var score = 85;
var grade;

// 你的练习题1代码写在这里
var test = parseInt(score / 10)
switch (test) {
  case 10:
  case 9:
    grade = "A"
    break
  case 8:
    grade = "B"
    break
  case 7:
    grade = "C"
    break
  case 6:
    grade = "D"
    break

  default:
    grade = "E"
    break


}
console.log(grade); // 应输出"B"










/** 练习题2：数组元素替换
 * 将数组中所有偶数替换为"even"，奇数替换为"odd"
*/
var numbers = [1, 2, 3, 4, 5];
var result = [];

// 你的练习题2代码写在这里
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 1) {
    numbers[i] = "odd"
    result.push(numbers[i])
  }
  else {
    numbers[i] = "even"
    result.push(numbers[i])
  }

}


console.log(result); // 应输出["odd", "even", "odd", "even", "odd"]










/**
  *练习题3：密码验证
  *​题目​​：验证密码是否符合要求：
  *长度至少8位
  *包含至少一个大写字母 (提示：每个文字大于等于'A',小于等于'Z')
  *包含至少一个数字 (提示：每个文字大于等于'0',小于等于'9')
  *使用if-else结构实现
*/
// !!! 提示：文字是可以遍历的，每次遍历的元素是各个字
// !!! 例如：
// !!! test="abc";
// !!! for (var i = 0; i < test.length; i++) { console.log(test[i]); }
// !!! 结果是: a  b  c

var password = "Abc12345";
var isValid;

// 你的练习题3代码写在这里

console.log(isValid); // 应输出true










/** 练习题4：斐波那契数列
 *  题目​​：使用while循环生成前7个斐波那契数
*/
// !!! 提示：
// !!! 1. 斐波那契数列前两个数字是 0 和 1
// !!! 2. 从第三个数字开始，每个数字等于前两个数字之和
// !!! 3. 例如：0, 1, 1, 2, 3, 5, 8...
var fib = [];
var n = 7;
var i = 0;

// 你的练习题4代码写在这里

console.log(fib); // 应输出[0, 1, 1, 2, 3, 5, 8]










/** 练习题5：学生数据处理
  * 题目​​：处理学生数据：
  * 计算平均年龄
  * 找出分数最高的学生姓名
*/
// !!! 提示：使用 "." 可以获取到 json 数据的内容; 例如: students[0].name , 就会获取到第 0 个索引的 json 的 name 值
var students = [
  { name: "Alice", age: 20, score: 85 },
  { name: "Bob", age: 21, score: 90 },
  { name: "Charlie", age: 19, score: 78 }
];
var result = {};
var averageAge = 0; // 平均年龄
var topStudent = "";  // 尖子生的名称

// 你的练习题5代码写在这里

console.log(result); // 应输出{averageAge: 20, topStudent: "Bob"}