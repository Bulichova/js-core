const banana = { name: 'banana', country: 'Equador', weight: 5, price: 100 }
console.log(banana)

const orange = { name: 'orange', country: 'Spain', weight: 4, price: 200 }

// преобразуем свойство объекта в массив ключей

const productKeys = Object.keys(banana)
console.log(productKeys)

const productKeys1 = Object.keys(orange)
console.log(productKeys1)

// преобразуем свойство объекта в массив значений

const productValues = Object.values(banana)
console.log(productValues)

const productValues1 = Object.values(orange)
console.log(productValues1)

// преобразуем свойство объекта в многомерный массив

const productEntries = Object.entries(banana)
console.log(productEntries)

const productEntries1 = Object.entries(orange)
console.log(productEntries1)

// let result = productKeys.reduce((acc, el) => {
//   console.log(el)
//   console.log(banana[el])
//   let price
//   let weight
//   if (el === 'price') {
//     price = banana[el]
//   }
//   if (el === 'weight') {
//     weight = banana[el]
//   }
//   if(!isNaN(price)&& !isNaN(weight)){
//       acc  += (price * weight)
//       return acc;
//   }
//   console.log(acc,price,weight);
// }, 0)
// console.log( result);

function result(arr, obj) {
  let result
  let price = arr.find((el) => el === 'price')
  let weight = arr.find((el) => el === 'weight')
  if (!isNaN(obj[price]) && !isNaN(obj[weight])) {
    result = obj[price] * obj[weight]
    // console.log(obj[price])
    return result
  }
}
let total = result(productKeys, banana)
console.log(total)


total = result(productKeys1,orange)  
console.log(total);