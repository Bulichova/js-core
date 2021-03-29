// Массивы ARRAY
// .push (добавить сколько угодно элементов в конец)
const fruits = ['apple','peach'];
console.log(fruits);
console.log(fruits.length);
fruits.push('grape');
console.log(fruits);
console.log(fruits.length);
fruits.push('melon', 'natermelon');
console.log(fruits);
console.log(fruits.length);

// .unshift (добавить сколько угодно элементов в начало)
fruits.unshift('banana');
console.log(fruits);
console.log(fruits.length);

fruits.pop();
console.log(fruits);
console.log(fruits.length);
fruits.shift();
console.log(fruits);
console.log(fruits.length);

const numbers = [0,1,2,3,4,5];
console.log(numbers);
console.log(numbers.length);
numbers.splice(5);
console.log(numbers);
console.log(numbers.length);
numbers.splice(3,1);
console.log(numbers);
console.log(numbers.length);

const leters = ['a','b','c','d','e'];
console.log(leters);
console.log(leters.length);
leters.splice (2,0,1,2);
console.log(leters);
console.log(leters.length);
leters.splice (5,2,4,7);
console.log(leters);
console.log(leters.length);

//  Присвоение по ссылке 

const array = ['html','css'];
console.log(array);
const myArray = array;
console.log(myArray);
myArray.push('js');
console.log(myArray);
console.log(array);

// .slice (делаем копию массива)

const mySliceArray = myArray.slice();
console.log(mySliceArray);
mySliceArray.shift();
console.log(mySliceArray);
console.log(myArray);
console.log(array);

const partOfArray=array.slice(1);
console.log(partOfArray);
console.log(array);

const pieceOfArray = leters.slice (1,4);
console.log(pieceOfArray);

// .concat метод объеденения массивов (создается новый массив)

const newArray = fruits.concat(numbers, array);
console.log(newArray);