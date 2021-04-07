const numbers = [4, 567, 21, 1, 57, 923, 62, 91, 43, 111, 8, 3]

let result = numbers.map((elem) => elem + '')
console.log(result)

result = numbers.map((elem) => (elem % 2 === 0 ? elem + '' : elem))
console.log(result)
