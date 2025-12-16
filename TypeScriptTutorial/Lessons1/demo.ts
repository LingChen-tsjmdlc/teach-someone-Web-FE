//参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function demo(x: number, y: number): number {
    return x + y
}

demo(100, 200)
demo(100, '200')        //警告：类型“string”的参数不能赋给类型“number”的参数
demo(100, 200, 300)      //警告：应有2个参数，但获得3个
demo(100)              //警告：应有2个参数，但获得1个