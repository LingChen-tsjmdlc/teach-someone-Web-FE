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
function processInputImprove(
  input: string | number | boolean
): string | number | boolean {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input.toFixed(2);
  }
  return input;
}

// ----- 题目2：类型守卫与自定义类型 -----
// 定义一个Shape类型，可以是Circle或Square
// Circle有radius属性
// Square有sideLength属性
// 实现一个getArea函数，根据传入的Shape计算面积

// 请在这里写下完整的类型定义和函数实现
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

// 使用示例
const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", sideLength: 4 };
console.log(getArea(circle)); // 78.53981633974483
console.log(getArea(square)); // 16

// ----- 题目3：泛型约束 -----
// 创建一个泛型函数longest，它接受两个参数并返回长度较长的那个
// 要求：
// 1. 参数必须有length属性
// 2. 返回值的类型与输入类型一致
// 3. 调用示例：
//    longest([1, 2], [3, 4, 5]) → [3, 4, 5]
//    longest("apple", "banana") → "banana"

// 请在这里写下你的实现
interface Lengthwise {
  length: number;
}

function longest<T extends Lengthwise>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

// 使用示例
console.log(longest([1, 2], [3, 4, 5])); // [3, 4, 5]
console.log(longest("apple", "banana")); // "banana"

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
type ReadonlyUser = {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  createdAt?: Date;
};

// 使用示例
const user: ReadonlyUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
  createdAt: new Date(),
};

// ----- 第五题：TypeScript 综合应用题 -----
/**
 * 电商系统类型设计
 *
 * 要求：
 * 1. 使用interface定义以下类型：
 *    - 商品(Product):有：id，name，price 三个属性
 *    - 购物车(Cart):有：items，totalPrice 两个属性
 *    - 用户(UserShop):有：username，cart 两个属性
 *
 * 2. 实现以下功能：
 *    - createUser(): 创建用户
 *    - addToCart(): 添加商品到购物车
 *    - getCartTotal(): 计算购物车总价
 */

// 请在这里实现你的代码

// 使用 interface 定义类型
interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  items: Product[];
  totalPrice: number;
}

interface UserShop {
  username: string;
  cart: Cart;
}

// 实现功能函数 - 创建用户
function createUser(username: string): UserShop {
  return {
    username: username,
    cart: {
      items: [],
      totalPrice: 0,
    },
  };
}

// 实现功能函数 - 添加商品到购物车
function addToCart(user: UserShop, product: Product): UserShop {
  // 创建新的商品数组
  const newItems = user.cart.items.concat(product);

  // 计算新的总金额
  const newTotal = calculateTotal(newItems);

  // 返回新的user对象
  return {
    username: user.username,
    cart: {
      items: newItems,
      totalPrice: newTotal,
    },
  };
}

// 计算总价的辅助函数：添加商品到购物车
function calculateTotal(items: Product[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// 实现功能函数 - 计算购物车总价
function getCartTotal(user: UserShop): number {
  return user.cart.totalPrice;
}

// 使用示例：
// const products: Product[] = [
//   { id: 1, name: "苹果", price: 5 },
//   { id: 2, name: "香蕉", price: 3 },
//   { id: 3, name: "橙子", price: 4 },
// ];

// // 创建用户
// let currentUser = createUser("李四");

// // 添加商品到购物车
// currentUser = addToCart(currentUser, products[0]); // 添加苹果
// currentUser = addToCart(currentUser, products[2]); // 添加橙子

// // 获取购物车总价
// console.log(`${currentUser.username}的购物车:`);
// console.log("商品列表:", currentUser.cart.items.map((p) => p.name).join(", "));
// console.log(`总价: ${getCartTotal(currentUser)}元`);
