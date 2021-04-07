const numbers = [4, 567, 21, 1, 57, 923, 62, 91, 43, 111, 8, 3]
console.log(numbers)
let result = numbers.map((element) => {
  console.log(element)
  return element + ''
})
console.log(`все подряд`, result)

result = numbers.map((element) => {
  if (element % 2 === 0) {
    return element + ''
  }
  return element
})
console.log(result)

result = numbers.map((element) => {
  if (element % 2 !== 0) {
    return element + ''
  }
  return element
})
console.log(result)

result = result.map((element) => {
  if (element % 2 === 0) {
    return element + ''
  }
  return element
})
console.log(result)

result = numbers.filter((element) => {
  element = element + ''
  console.log(element)
  if (element.length === 3) {
    return element
  }
})
console.log(result)

result = numbers
  .filter((element) => {
    return element > 50
  })
  .map((element) => {
    return element + ''
  })
console.log(result)

result = numbers.find((element) => {
  element = element + ''
  if (element.includes(1)) {
    return element
  }
})
console.log(result)

result = numbers.forEach((element) => {
  console.log(element)
})
console.log(result)

result = numbers.reduce((acc, element) => {
  acc = acc + element
  console.log(acc)
  return acc
}, 0)
console.log(result)

result = numbers.reduce((acc, element) => {
  console.log(element, acc)
  acc.push(element + '')
  return acc
}, [])
console.log(result)

result = numbers.sort()
console.log(result)

const words = ['tanya', 'vasya', 'dima', 'dasha', 'vova']
result = words.sort()
console.log(result)

result = numbers.sort((min, max) => {
  return max - min
})
console.log(result)

result = numbers.sort((x, y) => {
  return x - y
})
console.log(result)

result = numbers.every((element) => {
  return element > 500
})
console.log(result)

result = numbers.every((element) => {
  return element > 0
})
console.log(result)

result = numbers.some((element) => {
  return element > 500
})
console.log(result)

result = numbers.some((element) => {
  return element < 0
})
console.log(result)
