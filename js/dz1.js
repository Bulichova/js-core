// 1-2 student - students
const student = { surname: 'Bulichova', age: 37 }
console.log(student)
const students = { name: 'Tanya', ...student }
console.log(students)
students.phone = '0000000000'
console.log(students)

// 3-4 car - cars
const car = {
  brand: 'volvo',
  color: 'black',
  transmission: 'auto',
}
console.log(car)
const cars = { type: 'sedan', ...car }
console.log(cars)

// 5-6 product - products
const product = {
  price: 30,
  name: 'apple',
}
console.log(product)
const products = { weight: 2, ...product }
console.log(products)

// 7-8 fruit-fruits
const fruit = {
  name: 'cherry',
  color: 'red',
}
console.log(fruit)
const fruits = { country: 'ukraine', ...fruit }
console.log(fruits)

// 9-10 child - children

function createObject(name, age, height) {
  return { name, age, height }
}
let child = createObject('Dima', 9, 139)
console.log(child)

const children = { weight: 33, ...child }
console.log(children)

// 11-12 user - users
const user = { email: 'bulichova@gmail.com', ...students }
console.log(user)
const users = { status: 'new', ...user }
console.log(users)

// 13-14 item -items задать вопрос!!!!!!
const item = { date: 25.03, country: 'ukraine', hobby: 'wakeboard' }
console.log(item)
const items = createObject(child)
console.log(items)

// 15-21 flower - bouquet запуталась

// объект методов
const general = {
    getValue(key){
        return this[key]
    },
    creatPropNew(key,value){
        return(this[key]= value)
    },
    upDateProp(key,value){
        return(this[key]=value)
    },
    deleteProp(key,value){
        return(this[key]=value)
    },
}
let result = general.getValue.call(fruit,"name")
console.log(result);
result= general.upDateProp.call(car,"brand","bmw")
console.log(result);
console.log(car);
result = general.creatPropNew.call(users,"date")
console.log(result);
console.log(users);

// задать вопрос по удалению!!!!! и по методам