/**
 * 题目1：泛型约束
 *
 * 实现一个泛型函数 longest，该函数接受两个具有 length属性的参数，并返回其中长度较长的那个。具体要求如下：
 * 1. 函数参数必须是具有 length属性的对象，该属性的值必须是 number类型
 * 2. 返回值的类型必须与输入参数的类型保持一致
 * 3. 如果两个参数的长度相同，返回第一个参数
 * 4. 函数必须使用泛型约束确保参数具有 length属性
 */

// 测试用例​​：
// console.log(longest([1, 2], [3, 4, 5]));    // 应输出 [3, 4, 5]
// console.log(longest("apple", "banana"));     // 应输出 "banana"
// console.log(longest({ length: 3 }, { length: 5 })); // 应输出 { length: 5 }











/**
 * 题目2：电商购物车折扣计算系统
 *
 * 实现一个电商购物车系统，能够处理三种折扣策略：
 * 1. 固定金额折扣（FixedDiscount）：从总价中减去固定金额
 * 2. 百分比折扣（PercentageDiscount）：按百分比打折
 * 3. 满减折扣（ThresholdDiscount）：当订单金额达到指定阈值时减去固定金额
 *
 * 具体要求​​：
 * 1. 定义以下接口：
 *    - Product：包含 id(string)、name(string) 和 price(number) 属性
 *    - CartItem：包含 product(Product) 和 quantity(number) 属性
 *    - Discount：是一个联合类型，包含三种折扣类型
 *    - Cart：包含 items(CartItem数组) 和 discounts(Discount数组) 属性
 * 2. 实现 calculateTotal函数：
 *    - 接收一个 Cart对象作为参数
 *    - 计算商品总价（所有商品价格 × 数量的总和）
 *    - 按顺序应用所有折扣
 *    - 返回最终价格（number类型）
 */

// 测试用例:
// const cart: Cart = {
//   items: [
//     { product: { id: '1', name: '手机', price: 2999 }, quantity: 1 },
//     { product: { id: '2', name: '耳机', price: 199 }, quantity: 2 }
//   ],
//   discounts: [
//     { type: 'percentage', value: 0.9 }, // 9折
//     { type: 'threshold', threshold: 3000, amount: 300 } // 满3000减300
//   ]
// };
// console.log(calculateTotal(cart)); // 应输出 (2999 + 199 * 2)*0.9 - 300 = 2699.1













/**
 * 题目3：用户权限管理系统
 *
 * 实现一个用户权限管理系统，具体要求如下：
 * 1. 定义以下类型和接口：
 *    - Permission：字符串字面量类型，包含 'read'、'write'、'delete' 和 'manage_users'
 *    - Role：包含 name(string) 和 permissions(Permission数组) 属性
 *    - User：包含 id(string)、name(string) 和 roles(Role数组) 属性
 * 2. 实现 hasPermission函数：
 *    - 接收一个 User对象和一个 Permission作为参数
 *    - 检查用户的所有角色是否拥有指定的权限
 *    - 如果任一角色拥有该权限，返回 true，否则返回 false
 */

// 测试用例
// const adminRole: Role = {
//   name: 'admin',
//   permissions: ['read', 'write', 'delete', 'manage_users']
// };
// const editorRole: Role = {
//   name: 'editor',
//   permissions: ['read', 'write']
// };
// const guestRole: Role = {
//   name: 'guest',
//   permissions: ['read']
// };
// const user1: User = {
//   id: '1',
//   name: '管理员',
//   roles: [adminRole]
// };
// const user2: User = {
//   id: '2',
//   name: '编辑',
//   roles: [editorRole]
// };
// const user3: User = {
//   id: '3',
//   name: '访客',
//   roles: [guestRole]
// };
// console.log(hasPermission(user1, 'manage_users')); // true
// console.log(hasPermission(user2, 'delete'));      // false
// console.log(hasPermission(user3, 'read'));        // true
// console.log(hasPermission(user3, 'write'));       // false
















/**
 * 题目4：API数据处理
 *
 * 实现一个简单的API数据处理功能：
 * 1. 定义 ApiResponse 类型：包含 success (boolean) 和 data (泛型)
 * 2. 实现 handleResponse 函数：处理 API 响应
 *    - 成功时返回 data
 *    - 失败时抛出错误
 */

// 测试用例：
// const successResponse: ApiResponse<string> = {
//   success: true,
//   data: "请求成功"
// };
// const errorResponse: ApiResponse<number> = {
//   success: false,
//   data: 404
// };
// console.log(handleResponse(successResponse)); // "请求成功"
// console.log(handleResponse(errorResponse)); // 抛出错误 -> "API请求失败"








/**
 * 题目5：电商系统类型设计
 *
 * 实现一个电商系统的核心类型和功能，具体要求如下：
 * 1. 定义以下接口：
 *    - Product：包含 id(string)、name(string) 和 price(number) 属性
 *    - CartItem：包含 product(Product) 和 quantity(number) 属性
 *    - Cart：包含 items(CartItem数组) 和 totalPrice(number) 属性
 *    - UserShop：包含 username(string) 和 cart(Cart) 属性
 * 2. 实现以下功能函数：
 *    - createUser(username: string): UserShop：创建一个新用户，初始化空购物车
 *    - addToCart(user: UserShop, product: Product, quantity: number = 1): void：添加商品到购物车
 *        · 如果商品已存在，增加数量
 *        · 如果商品不存在，添加新项
 *        · 每次更新后重新计算总价
 *    - getCartTotal(cart: Cart): number：计算购物车中所有商品的总价
 */

// 测试用例:
// const user = createUser("张三");
// const product1: Product = { id: "1", name: "手机", price: 3999 };
// const product2: Product = { id: "2", name: "耳机", price: 199 };
// addToCart(user, product1);
// addToCart(user, product2, 2);
// console.log(user);
/* 应输出:
{
  username: "张三",
  cart: {
    items: [
      { product: { id: "1", name: "手机", price: 3999 }, quantity: 1 },
      { product: { id: "2", name: "耳机", price: 199 }, quantity: 2 }
    ],
    totalPrice: 3999 + (199 * 2) = 4397
  }
}
*/