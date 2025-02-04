// 一、数据与变量:
// 1. 创建一个购物清单数组
const shoppingList = ['Toast', 'Ham', 'Avo']

// 二、数组应用：
// 1. 向购物清单中添加两样物品，并输出更新后的清单
shoppingList.push('Cheese Slice', 'Mayo')
console.log(shoppingList)

// 从购物清单中删除最后一项物品，并输出结果
shoppingList.pop()
console.log(shoppingList)

// 三、条件与循环：
// 1. 创建一个函数，当购物清单中的物品超过5项时，在控制台输出"你的购物车满了"。
const ifShoppingListIsFull = list => {
    if (list.length > 5) {
        console.log("Your shopping cart is full")
    }
}

// test cases
ifShoppingListIsFull(shoppingList)
let shoppingList2 = [...shoppingList]
shoppingList2.push('salmon fillet', 'eggs')
ifShoppingListIsFull(shoppingList2)

// 2. 使用循环语句遍历购物清单，将每一项物品在控制台上以编号的形式输出。
const logItemsInShoppingList = list => {
    for (let i = 0; i < list.length; i++) {
        console.log(`${i + 1}. ${list[i]}`)
    }
}

// test case
logItemsInShoppingList(shoppingList)

// 四、函数与对象：
// 1. 创建一个函数，该函数接受物品名称作为参数，并返回该物品是否在购物清单中。
const ifItemInShoppingList = itemName => {
    for (let index = 0; index < shoppingList.length; index++) {
        if (shoppingList[index].trim().toLowerCase() == itemName.trim().toLowerCase()) {
            return true
        }
    }
    return false
}

// test cases
const testNames = ['  cheese slice ', 'Masala']
console.log('Whether Items are in the shopping list:')
for (let index = 0; index < testNames.length; index++) {
    const testName = testNames[index]
    const flag = ifItemInShoppingList(testName)
    console.log(`${testName.trim().toLowerCase()}: [${flag ? '\u2713' : '\u292B'}]`)
}

// 2. 创建一个购物物品对象，其中包括物品名称、价格和数量。
const createItemObject = (name, price, quantity) => ({ name, price, quantity })

// test case
console.log(createItemObject('KitKat', '$7.00', 666))