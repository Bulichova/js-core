// Oбъявление функции
// Function Expression

// 1 Function Expression

const myFunc = function () {
  let a = 5
  console.log(a)
}
// Вызов функции
myFunc()
const myFunc1 = function () {
  let a = 1
  let b = 2
  let rezult = a + b
  return rezult
}
myFunc1()
console.log(myFunc1())

const myFunc2 = function () {
  let x = '1'
  let y = 1
  let rezult = x + y
  return rezult
}

// 2 Function Expression

myFunc2()
console.log(myFunc2())
let rezult = myFunc2()
console.log(rezult)
let z = 10
let total = rezult + z
console.log(total)

// 3 Function Expression

const myFunc3 = function (a, b) {
  let rezult = a + b
  return rezult
}
rezult = myFunc3(1, '2')
console.log(rezult)

rezult = myFunc3(100, 63)
console.log(rezult)

rezult = myFunc3(15, 'hello')
console.log(rezult)

rezult = myFunc3(7)
console.log(rezult)

rezult = myFunc3(2, 3, 4)
console.log(rezult)

let a = 100
let b = 63
rezult = myFunc3(a, b)
console.log(rezult)

a = 'Tanya'
b = 17
rezult = myFunc3(a, b)
console.log(rezult)

// 4 Function Expression

a = 1000
b = 'hello'
const myFunc4 = function (param1, param2, param3) {
  return param1 + param2 + param3
}
rezult = myFunc4(a, z, b)
console.log(rezult)

// 5 Function Expression

const myFunc5 = function (a, b, c = 0) {
  return a + b + c
}
let rezult1 = myFunc5(1, 2)
console.log(rezult1)

rezult1 = myFunc5(1, 2, 3)
console.log(rezult1)

// 6 Function Expression

const myFunc6 = function (a = 1, b = 2, c = 3) {
  return a + b + c
}
rezult1 = myFunc6()
console.log(rezult1)

rezult1 = myFunc6(6, 7, 8)
console.log(rezult1)

// Функция покупки продуктов
// Function Declaration

function toBayProducts(meat = '0', milk = '0', bread = 'тост') {
  console.log(`я купил: ${meat},${milk},${bread}`)
}
toBayProducts('свинина', 'соевое молоко', 'батон')
toBayProducts('телятина', 'кокосовое молоко', 'бородинский хлеб')
toBayProducts()

// Arrow Function (ES6)

const toBayProducts1 = (meat, milk, bread) => {
  console.log(`я купил: ${meat},${milk},${bread}`)
}
toBayProducts1('свинина', 'соевое молоко', 'батон')

// Function Expression

const toBayProducts2 = function (meat, milk, bread) {
  console.log(`я купил: ${meat},${milk},${bread}`)
}

toBayProducts2('телятина', 'кокосовое молоко', 'бородинский хлеб')
