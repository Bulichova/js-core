// структура ветвления
// if(false){console.log('hello')};
// if(true){console.log('hello')};
// if(0){console.log("hello")};
// if(null){console.log("1")};
// let num=5;
// if(num>1){console.log(`${num}>1`)};
// if(num>10){console.log(`${num}>10`)};
// num="5 apples";
// num=parseInt(num);
// if(num>1){console.log(`${num}>1`)};
// num="5.2 apples";
// num=parseFloat(num);
// if(num>1){console.log(`${num}>1`)};
// let myNumber=2.345678;
// console.log(myNumber.toFixed());
// console.log(myNumber.toFixed(3));
// console.log(Math.floor(myNumber));
// console.log(Math.ceil(myNumber));
// console.log(Math.round(myNumber));
// console.log(0.1+0.2);

let day = 'friday'
function chousDay(day) {
  if (day === 'monday') {
    console.log(`${day} it's work day`)
  } else if (day === 'tuesday') {
    console.log(`${day} it's work day`)
  } else if (day === 'wednesday') {
    console.log(`${day} it's work day`)
  } else if (day === 'thursday') {
    console.log(`${day} it's work day`)
  } else if (day === 'friday') {
    console.log(`${day} it's work day`)
  } else if (day === 'saturday') {
    console.log(`${day} holiday`)
  } else if (day === 'sunday') {
    console.log(`${day} holiday`)
  } else {
    console.log('введите правильный день')
  }
}
chousDay('monday')
chousDay('sunday')
chousDay('blablabla')

function chousDay1(day) {
  if (
    day === 'monday' ||
    day === 'tuesday' ||
    day === 'wednesday' ||
    day === 'thursday' ||
    day === 'friday'
  ) {
    console.log(`${day} it's work day`)
  } else if (day === 'saturday' || day === 'sunday') {
    console.log(`${day} holiday`)
  } else {
    console.log('введите правильный день')
  }
}
chousDay1('saturday')
chousDay1('tuesday')
chousDay1('понедельник')

let number = 3
function toCheekNum(num) {
  if (num > 1) {
    console.log('это число больше 1')
  } else {
    console.log('условие не выполнено')
  }
}
toCheekNum(number)
toCheekNum(1)
toCheekNum(9)

function toCheekNum1(num) {
  num > 10
    ? console.log('это число больше 10')
    : console.log('условие не выполнено')
}
toCheekNum1(11)
toCheekNum1(2)

function toCheekNum2(num) {
  switch (num) {
    case '1':
      console.log('это число =1')
      return
    case '2':
      console.log('это число=2')
      return
    case '3':
      console.log('это число =3')
      return
    case 4:
      console.log('это число =4')
      return
    case '5':
      console.log('это число =5')
      return

    default:
      console.log('ни одно значение не совпало')
  }
}
toCheekNum2(4)
toCheekNum2('5')
toCheekNum2(8)

function toCheekDay(day) {
  switch (day) {
    case 'monday':
    case 'tuesday':
    case 'wednesdayy':
    case 'thursday':
    case 'friday':
      console.log(`${day} it's work day`)
      return

    case 'saturday':
    case 'sunday':
      console.log(`${day} holiday`)
      return

    default:
      console.log('ни одно значение не совпало')
  }
}
toCheekDay('monday')
toCheekDay('sunday')
toCheekDay('blablabla')
