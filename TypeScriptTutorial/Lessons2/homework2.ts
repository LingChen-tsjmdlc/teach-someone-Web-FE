// ----- 题目1 -----
// 给定以下函数，如何改进参数和返回值的类型声明？
function processInput(input) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input.toFixed(2);
  }
  return input;
}

// 改进后的函数签名应该是什么？
// 调用示例：
// processInput("hello") → "HELLO"
// processInput(3.1415) → "3.14"
// processInput(true) → true
// 在下面进行改进

// ----- 题目2：类型守卫与自定义类型 -----
// 定义一个Shape类型，可以是Circle或Square
// Circle有radius属性
// Square有sideLength属性
// 实现一个getArea函数，根据传入的Shape计算面积

// 请在这里写下完整的类型定义和函数实现

// ----- 题目3：泛型约束 -----
// 创建一个泛型函数longest，它接受两个参数并返回长度较长的那个
// 要求：
// 1. 参数必须有length属性
// 2. 返回值的类型与输入类型一致
// 3. 调用示例：
//    longest([1, 2], [3, 4, 5]) → [3, 4, 5]
//    longest("apple", "banana") → "banana"

// 请在这里写下你的实现

// ----- 题目4：映射类型与实用工具类型 -----
// 给定一个User接口，创建一个新类型ReadonlyUser
// 1. 使所有属性变为只读
// 2. 添加一个createdAt可选属性(Date类型)
// 3. 保持其他属性不变

interface User {
  id: number;
  name: string;
  email: string;
}

// 请在这里定义ReadonlyUser类型

// ----- 第五题：TypeScript 综合应用题 -----
/**
 * 电商系统类型设计
 *
 * 要求：
 * 1. 定义以下类型和类：
 *    - 商品接口(Product)：id(number)、name(string)、price(number)、库存(stock, number)
 *    - 用户类(User)：id(number)、username(string)、私有密码(password)、购物车(cart)
 *    - 购物车类(Cart)：商品项数组(items)、总价(totalPrice)
 *    - 商品项类(CartItem)：商品(product)、数量(quantity)
 *
 * 2. 实现以下功能：
 *    - User类方法：
 *      * addToCart(product, quantity): 添加商品到购物车
 *      * checkout(): 结算购物车（检查库存并扣除）
 *      * getCartTotal(): 获取购物车总价
 *    - Cart类方法：
 *      * calculateTotal(): 计算购物车总价
 *      * clear(): 清空购物车
 *
 * 3. 添加类型约束：
 *    - 库存不足时不允许添加购物车
 *    - 结算时库存不足的商品跳过处理
 *    - 密码字段外部不可访问
 *
 * 4. 编写使用示例代码
 */

// 请在这里实现你的代码
