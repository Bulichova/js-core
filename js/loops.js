const scores = [12, 17, 9, 10, 20, 20, 19, 18, 7, 8]
console.log(scores)
console.log(`length`, scores.length)

// перебор массива с помощью loop (цикл) for of

let total = 0
for (let elem of scores) {
  // console.log(elem);
  total = total + elem
  // console.log(`total`,total);
}
// console.log(total);
let result = total / scores.length
// console.log(`результат деления`,result);

//  преобразование строки в массив
// метод split

let string =
  'numberless embarrassments which this double relationship had caused him, and of all the temporal reefs among which his spiritual bark had been forced to tack, in order not to suffer shipwreck on either Louis or Charles, that Scylla and that Charybdis which had devoured the Duc de Nemours and the Constable de Saint-Pol. Thanks to Heaven’s mercy, he had made the voyage successfully,'
const words = string.split(' ')
console.log(words.length)
const valiDateWords = []

for (let word of words) {
  // console.log(word);
  if (word.includes(',')) {
    //    console.log('includes,', word);
    const arrayOfLetters = word.split('')
    //    console.log(arrayOfLetters);
    for (let i = 0; i < arrayOfLetters.length; i = i + 1) {
      console.log(`${i + 1} итерация`, arrayOfLetters[i])
      if (arrayOfLetters[i] === ',') {
        arrayOfLetters.splice(i, 1)
        console.log(arrayOfLetters)
        word = arrayOfLetters.join('')
        ;`преобразования массива в строку`
        valiDateWords.push(word)
      }
    }
  } else {
    valiDateWords.push(word)
  }
}
console.log(words)
console.log(valiDateWords)

const numbers = '1,2,3'
console.log(numbers.length)
const arrayOfNumbers = numbers.split(',')
const newNumbers = []
for (let number of arrayOfNumbers) {
  console.log(number)
  number = Number(number)
  console.log(number)
  number = number + 100
  newNumbers.push(number)
}
console.log(newNumbers)
console.log(arrayOfNumbers)

for (let i = 0; i < 3; i++) {
  console.log(arrayOfNumbers[i])
  console.log(newNumbers[i])
}
