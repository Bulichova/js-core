console.log({})
const user = {}
console.log(user)
const user1 = { name: `Tanya` }
console.log(user1)

// способы обращения к свойствам объекта
console.log(user1.name)
console.log(user1[`name`])
user1.name = `Tanucha`
console.log(user1.name)
console.log(user1[`name`])
user1.name = `Tatatatat`
console.log(user1[`name`])
console.log(user.age)
user1.age = 37
console.log(user1.age)
console.log(user1)
user1[`mood`] = `happy`
console.log(user1.mood)
console.log(user1)
delete user1.mood
console.log(user1.mood)
console.log(user1)

function createObject(a, b) {
  return { name: a, age: b }
}
let object = createObject('Tata', 37)
console.log(object)

object = createObject('Tanucha', 3, 'happy')
console.log(object)

function createShortObject(name, age, email, phone) {
  return { name, age, email, phone }
}
object = createShortObject('tata', 37, 'bulichova@gmail.com', '0672306575')
console.log(object)

function createNewObject(x) {
  return { status: 'new', ...x }
}
let myObject = createNewObject(object)
console.log(myObject)

myObject = createNewObject(user)
console.log(myObject)

function createNewObject1(x, status) {
  return { status, ...x }
}
myObject = createNewObject1(object, true)
console.log(myObject)

// METHODS

const Tata = {
  name: 'Tanya',
  toShowName() {
    return this.name
  },
}
let result = Tata.toShowName()
console.log(result)

Tata.name = 'yana'
result = Tata.toShowName()
console.log(result)
result = Tata.toShowName.call(user1)
console.log(result)

// объект ,который хранит методы
const sky = {
  getValue(key) {
    return this[key]
  },
  createNewProp(key, value) {
    return (this[key] = value)
  },
  upDate(key, value) {
    return (this[key] = value)
  },
}
result = sky.getValue.call(user1, 'age')
console.log(result)
result = sky.getValue.call(user1, 'mood')
console.log(result)
result = sky.getValue.call(Tata, 'email')
console.log(result)
result = sky.createNewProp.call(Tata, 'email', 'tata@gmail.com')
console.log(Tata)
result = sky.upDate.call(Tata, 'email', 'kukuruku@mail.com')
console.log(Tata)
result = sky.upDate.call(Tata, 'adres', 'world')
console.log(Tata)
