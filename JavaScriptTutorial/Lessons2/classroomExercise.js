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