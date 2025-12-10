// ------------------------------↓↓↓↓↓↓↓↓↓↓ 程思玮的作业 ↓↓↓↓↓↓↓↓↓↓--------------------------------

/*
  一、单选题
*/

// 1. 关于函数返回值，以下说法正确的是：    （ C ）
// A.函数必须要有 return 语句
// B.函数可以有多个 return 语句，都会按顺序执行
// C.函数中 return 后面的代码不会执行
// D.函数可以有多个 return 语句，但最后一个 return 会覆盖前面的

/* ------------------------------ 题目分割线 -------------------------------- */

// 2. 以下代码的输出结果是：    （ B ）
// <-- ↓↓↓↓↓ 代码开始 ↓↓↓↓↓ -->
var arr = [1, 2, 3, 4, 5];
var result = arr.map((num) => {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});
console.log(result);
// <-- ↑↑↑↑↑ 代码结束 ↑↑↑↑↑ -->
// A. [1, 2, 3, 4, 5]
// B. ["odd", "even", "odd", "even", "odd"]
// C. ["even", "odd", "even", "odd", "even"]
// D. [false, true, false, true, false]

/* ------------------------------ 题目分割线 -------------------------------- */

// 3. 以下关于数组方法的说法，正确的是：    （ C ）
// A. forEach 方法会返回一个新的数组
// B. filter 方法会改变原数组
// C. map 方法会返回一个新数组
// D. some 方法会返回数组的第一个元素


/* ===================================== 题目分割线 ======================================= */


/*
  二、代码分析题
*/

// 1. 分析以下代码的输出结果：
function calculate(a, b, operation) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "multiply") {
    return a * b;
  } else {
    return "无效操作";
  }
}
var result1 = calculate(5, 3, "add");
var result2 = calculate(4, 2, "multiply");
var result3 = calculate(10, 5, "divide");
console.log(result1, result2, result3);

// 结果是： ____8___, ___8____, ___"无效操作"____


/* ------------------------------ 题目分割线-------------------------------- */


// 2. 分析以下代码的输出结果：
var numbers = [10, 20, 30, 40, 50];
var filtered = numbers.filter(function (num) {
  return num > 25;
});//30, 40, 50
var doubled = filtered.map(function (num) {
  return num * 2;
});
console.log(filtered.length, doubled[1]);

// 结果是： _______, _______




/* ===================================== 题目分割线 ======================================= */




/*
  三、编程题
*/

// 第1题：数组处理函数
// 编写一个函数 calculateScores，它接收一个数字数组（成绩数组），返回一个新数组，只包含及格的成绩（大于等于60分）；同时输出平均分。

// 你的代码：
var scores = [60, 80, 90, 40, 50];

function calculateScores(score) {
  // 及格的分数就是 passScores
  var passScores = score.filter((item) => {
    return item >= 60;
  })
  console.log("及格的分数有：" + passScores);

  // 总分
  var total = 0
  score.forEach((item) => {
    total += item
  });
  console.log(total);
}

// 使用
calculateScores(scores)






/* ------------------------------ 题目分割线-------------------------------- */





// 第2题：数字统计函数
// 编写一个函数 countNumbers，它接收一个数字数组，在函数内部完成以下统计：
// 1. 偶数的数量
// 2. 奇数的数量
// 3. 正数的数量
// 4. 负数的数量
// 5. 零的数量
// 直接在控制台输出结果，不返回任何值（使用 console.log() 就行了）

// 你的代码:

function countNumbers(number) {
  // 初始化计数器
  var evenCount, oddCound, posCount, negaCount, zeroCount = 0;

  number.forEach((item) => {
    // 判断奇数偶数情况
    if (item % 2 === 0) {
      evenCount++
    } else {
      oddCound++
    }

    // 正负
    if (item < 0) {
      negaCount++
    }
    else if (item > 0) {
      posCount++
    }
    else {
      zeroCount++
    }
  });
  // 输出
  console.log(`偶数的数量：${evenCount},奇数的数量：${oddCound},正数的数量：${posCount}，负数的数量：${negaCount}，零的数量：${zeroCount}`);
}


var testNumbers = [1, -2, 3, 0, 4, -5, 6];
countNumbers(testNumbers);














