/** 练习题1：成绩转换器
  * 题目​​：将0 - 100的数字成绩转换为等级制：
  * 90 + 为A
  * 80 - 89为B
  * 70 - 79为C
  * 60 - 69为D
  * 60以下为E
*/
var score; // 分数

console.log("里面是输出的内容")

if (score >= 90 && score < 100) {
  console.log("A")
}
else if (score >= 80 && score < 90) {
  console.log("B")
}
else if (score >= 70 && score < 80) {
  console.log("C")
}
else if (score >= 60 && score < 70) {
  console.log("D")
}
else if (score < 60) {
  console.log("E")
}
else {
  console.log("报错")
}














// ---------------------
/** 练习题1：成绩转换器
  * 题目​​：将0 - 100的数字成绩转换为等级制：
  * 90 + 为A 
  * 80 - 89为B
  * 70 - 79为C
  * 60 - 69为D
  * 60以下为E
*/
var score; // 分数

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (89 >= score && score >= 80) {
  console.log("B");
} else if (79 >= score && score >= 70) {
  console.log("C");
} else if (69 >= score && score >= 60) {
  console.log("D");
} else if (59 >= score && score >= 0) {
  console.log("E");
} else {
  console.log("报错")
}







/** 练习题2：数组元素替换
 * 将数组中所有偶数替换为"even"，奇数替换为"odd"
*/
var numbers = [1, 2, 3, 4, 5];
var result = [];

// 你的练习题2代码写在这里
for (var i = 0; i < numbers.length; i++) {
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
var hasUpperCase = false;
var hasNumber = false;
if (password.length < 8) {
  isValid = false
}
else {
  for (var i = 0; i < password.length; i++) {
    if (password[i] >= 'A' && password[i] <= 'Z') {
      hasUpperCase = true
    }
    else if (password[i] >= '0' && password[i] <= '9') {
      hasNumber = true
    }
  }
}

if (hasNumber && hasUpperCase) {
  isValid = true
}
else {
  isValid = false
}
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
while (i < n) {
  if (i === 0) {
    fib.push(0)
  }
  else if (i === 1) {
    fib.push(1)
  }
  else {
    fib.push(fib[i - 1] + fib[i - 2])
  }
  i++
}

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
var max
var maxname
var sum = 0
for (i = 0; i < students.length; i++) {
  if (i === 0) {
    max = students[0].score
    maxname = students[0].name
  }
  else if (students[i].score > max) {
    max = students[i].score
    maxname = students[i].name
  }
  sum += students[i].age
}
averageAge = sum / students.length
result.averageAge = averageAge
result.topStudent = maxname
console.log(result); // 应输出{averageAge: 20, topStudent: "Bob"}


// 1. 使用if-else判断季节：
//  12/1/2：冬季
//  3-5：春季
//  6-8：夏季
//  9-11：秋季
// 最后 log 出来
var mon = 7
if (mon === 12 || mon === 1 || mon === 2) {
  console.log("是冬季")
}
else if (mon === 3 || mon === 4 || mon === 5) {
  console.log("是春季")
}
else if (mon === 6 || mon === 7 || mon === 8) {
  console.log("是夏季")
}
else if (mon === 9 || mon === 10 || mon === 11) {
  console.log("是秋季")
}
// 2. 使用 switch 判断某个月的天数（2月28按天算）
// 最后 log 出来
var mon = 7
switch (mon) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("当月有31天")
    break
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("当月有30天")
    break
  default:
    console.log("当月有28天")
}

// 3. for 循环计算 1-100 所有奇数的和并 log
var sum = 0
for (i = 1; i <= 100; i += 2) {
  sum = sum + i
}
console.log(sum)
// 4. while 找出第一个能被 7 和 9 整除的数字
var n = 1
while (true) {
  if (n % 7 === 0 && n % 9 === 0) {
    console.log(n)
    break
  }
  n++
}