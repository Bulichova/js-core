//--TO STRING---

// число к строке
let value = 0;

// 1й способ

let toString = String (value);
console.log(`${value},через конструктор String ():` , toString);
console.log(`тип данных ${value},через конструктор String (): `, typeof toString);

// 2й способ

toString = value + "";
console.log(`${value},через конкатенацию  ` , toString);
console.log(`тип данных ${value},через конкатенацию: `, typeof toString);




