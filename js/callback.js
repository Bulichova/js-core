// Функция Учить Js

// function toLearnJS( toRightCode, toReadDocs){
//     toRightCode ();
//     toReadDocs ();
// };
// toLearnJS ();

function getResult(x, y, callback) {
  return callback(x, y)
}

function getSum(a, b) {
  return a + b
}
function getMultiply(a, b) {
  return a * b
}
function getPow(a, b) {
  return a ** b
}

let result = getResult(3, 5, getSum)
console.log(`сумма`, result)

result = getResult(4, 7, getMultiply)
console.log(`прооизведение`, result)

result = getResult(2, 3, getPow)
console.log(`степень`, result)

const toLearnJS = function (x, y, z) {
  x()
  y()
  z()
}
const toRead = function () {
  console.log(`нужно читать документацию`)
}
const toWrite = function () {
  console.log(`нужно писать код`)
}
const toListen = function () {
  console.log(`нужно слушать лекции`)
}

toLearnJS(toRead, toWrite, toListen)
