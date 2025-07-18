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


function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}








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
* 商品基础接口定义
* @property id - 商品唯一标识符(string)
* @property name - 商品名称(string)
* @property price - 商品价格(number)
*/
interface Product {
  id: string;
  name: string;
  price: number;
}

/**
* 购物车商品项接口
* @property product - 商品信息(Product)
* @property quantity - 商品数量(number)
*/
interface CartItem {
  product: Product;
  quantity: number;
}

/**
* 折扣类型联合定义

* @property {'fixed'} type - 固定金额折扣类型标识
* @property {number} amount - 固定折扣金额
* @example { type: 'fixed', amount: 50 } // 减50元
*
* @property {'percentage'} type - 百分比折扣类型标识
* @property {number} value - 折扣比例(0-1)
* @example { type: 'percentage', value: 0.8 } // 打8折
*
* @property {'threshold'} type - 满减折扣类型标识
* @property {number} threshold - 满减门槛金额
* @property {number} amount - 满减金额
* @example { type: 'threshold', threshold: 300, amount: 50 } // 满300减50
*/
type Discount =
  | { type: 'fixed'; amount: number }
  | { type: 'percentage'; value: number }
  | { type: 'threshold'; threshold: number; amount: number };

/**
* 购物车接口
* @property items - 购物车商品项列表(CartItem[])
* @property discounts - 应用的折扣列表(Discount[])
*/
interface Cart {
  items: CartItem[];
  discounts: Discount[];
}

/**
* 计算购物车最终总价（含折扣计算）
* @param cart - 购物车对象
* @returns 计算折扣后的最终总价(number)
*
* 实现逻辑：
* 1. 首先计算商品原始总价(subtotal)：
*    - 使用reduce遍历所有购物车商品项
*    - 累加每个商品的价格×数量
* 2. 然后应用所有折扣：
*    - 使用reduce依次处理每个折扣
*    - 根据折扣类型执行不同计算：
*      - 'fixed': 直接减去固定金额
*      - 'percentage': 乘以折扣比例
*      - 'threshold': 判断是否达到门槛金额，满足则减去指定金额
*/
function calculateTotal(cart: Cart): number {
  // 计算商品原始总价
  const subtotal = cart.items.reduce((sum, item) => {
    return sum + (item.product.price * item.quantity);
  }, 0);
  // 应用所有折扣
  return cart.discounts.reduce((currentTotal, discount) => {
    switch (discount.type) {
      case 'fixed':
        // 固定金额折扣：直接减去指定金额
        return currentTotal - discount.amount;
      case 'percentage':
        // 百分比折扣：乘以折扣比例
        return currentTotal * discount.value;
      case 'threshold':
        // 满减折扣：达到门槛金额则减去指定金额
        return currentTotal >= discount.threshold
          ? currentTotal - discount.amount
          : currentTotal;
    }
  }, subtotal);
}


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



// 权限类型定义
type Permission = 'read' | 'write' | 'delete' | 'manage_users';

// 角色定义
interface Role {
  name: string;
  permissions: Permission[];
}

// 用户接口
interface User {
  id: string;
  name: string;
  roles: Role[];
}

/**
 * 检查用户是否拥有指定权限
 * @param user - 用户对象，包含角色信息
 * @param permission - 要检查的权限项
 * @returns 如果用户任意一个角色拥有该权限则返回true，否则返回false
 *
 * 实现逻辑：
 * 1. 遍历用户的所有角色(user.roles)
 * 2. 对每个角色检查其权限列表(role.permissions)
 * 3. 使用Array.some()方法，只要有一个角色拥有该权限就返回true
 * 4. 使用Array.includes()方法检查权限是否存在于角色权限列表中
 */
function hasPermission(user: User, permission: Permission): boolean {
  return user.roles.some(role =>
    role.permissions.includes(permission)
  );
}



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



// 定义API响应类型
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

// 处理API响应
function handleResponse<T>(response: ApiResponse<T>): T {
  if (response.success) {
    return response.data;
  } else {
    throw new Error("API请求失败");
  }
}



/**
 * 题目5：电商系统类型设计
 *
 * 实现一个电商系统的核心类型和功能，具体要求如下：
 * 1. 定义以下接口：
 *    - Product：包含 id(string)、name(string) 和 price(number) 属性
 *    - CartItem：包含 product(Product) 和 quantity(number) 属性
 *    - Cart1：包含 items(CartItem数组) 和 totalPrice(number) 属性
 *    - UserShop：包含 username(string) 和 cart(Cart1) 属性
 * 2. 实现以下功能函数：
 *    - createUser(username: string): UserShop：创建一个新用户，初始化空购物车
 *    - addToCart(user: UserShop, product: Product, quantity: number = 1): void：添加商品到购物车
 *        · 如果商品已存在，增加数量
 *        · 如果商品不存在，添加新项
 *        · 每次更新后重新计算总价
 *    - getCartTotal(cart: Cart1): number：计算购物车中所有商品的总价
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

// 定义商品接口
interface Product {
  id: string;       // 商品唯一标识符
  name: string;     // 商品名称
  price: number;    // 商品价格
}

// 定义购物车项接口
interface CartItem {
  product: Product;  // 商品信息
  quantity: number;  // 商品数量
}

// 定义购物车接口
interface Cart1 {
  items: CartItem[];    // 购物车中的商品项列表
  totalPrice: number;   // 购物车总金额
}

// 定义用户商店接口
interface UserShop {
  username: string;  // 用户名
  cart: Cart1;       // 用户的购物车
}

/**
 * 创建新用户
 * @param username 用户名
 * @returns 返回一个新用户对象，包含初始化的空购物车
 */
function createUser(username: string): UserShop {
  return {
    username,
    cart: {
      items: [],      // 初始购物车为空
      totalPrice: 0,  // 初始总金额为0
    }
  };
}

/**
 * 添加商品到购物车
 * @param user 用户对象
 * @param product 要添加的商品
 * @param quantity 商品数量，默认为1
 */
function addToCart(user: UserShop, product: Product, quantity: number = 1): void {
  // 检查购物车中是否已存在该商品
  const existingItem = user.cart.items.find(item => item.product.id === product.id);
  if (existingItem) {
    // 如果已存在，增加数量
    existingItem.quantity += quantity;
  } else {
    // 如果不存在，添加新商品项
    user.cart.items.push({ product, quantity });
  }
  // 更新购物车总金额
  user.cart.totalPrice = getCartTotal(user.cart);
}

/**
 * 计算购物车总金额
 * @param cart 购物车对象
 * @returns 返回购物车中所有商品的总金额
 */
function getCartTotal(cart: Cart1): number {
  return cart.items.reduce((total, item) => {
    // 累加每个商品项的价格×数量
    return total + (item.product.price * item.quantity);
  }, 0);  // 初始值为0
}