//--TO NUMBER--- спосообы приведения типов данных к числу

//любое строчное значение к числу
let value = "Bla Bla Bla";

// 1й способ

let toNumber = Number(value);
console.log(`${value},через конструктор Number():` , toNumber);
console.log(`тип данных ${value},через конструктор Number (): `, typeof toNumber);

// 2й способ

toNumber = +value;
console.log(`${value},через унарный + ` , toNumber);
console.log(`тип данных ${value},через унарный + `, typeof toNumber);

// строчное число к числу
value = "123";

// 1й способ

toNumber = Number(value);
console.log(`${value},через конструктор Number ():` , toNumber);
console.log(`тип данных ${value},через конструктор Number (): `, typeof toNumber);

// 2й способ

toNumber = +value;
console.log(`${value},через унарный + ` , toNumber);
console.log(`тип данных ${value},через унарный + `, typeof toNumber);

// пустая строка к числу
value = "";

// 1й способ

toNumber = Number(value);
console.log(`пустая строка ${value},через конструктор Number ():` , toNumber);
console.log(`тип данных  пустая строка ${value},через конструктор Number (): `, typeof toNumber);

// 2й способ

toNumber = +value;
console.log(`пустая строка${value},через унарный + ` , toNumber);
console.log(`тип данных пустая строка ${value},через унарный + `, typeof toNumber);

// строка с пробелом к числу
value = " ";

// 1й способ

toNumber = Number(value);
console.log(`строка с пробелом ${value},через конструктор Number ():` , toNumber);
console.log(`тип данных строка с пробелом ${value},через конструктор Number (): `, typeof toNumber);

// 2й способ

toNumber = +value;
console.log(`строка с пробелом ${value},через унарный + ` , toNumber);
console.log(`тип данных строка с пробелом ${value},через унарный + `, typeof toNumber);

// ----------
// BOOLEAN (логическое)
// true к числу

value = true;

// toNumber = Number (value);
// console.log(`${value},через конструктор Number ():`, toString);
// console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

// toString = value + "";
// console.log(`${value},через конкатенацию ` ,toString);
// console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

// // false к строке

// value = false;

// toString = String (value);
// console.log(`${value},через конструктор String ():`, toString);
// console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

// toString = value + "";
// console.log(`${value},через конкатенацию ` ,toString);
// console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

// // ----------
// // UNDEFINED 

// value = undefined;

// toString = String (value);
// console.log(`${value},через конструктор String ():`, toString);
// console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

// toString = value + "";
// console.log(`${value},через конкатенацию ` ,toString);
// console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

// // ----------
// // Null

// value = null;

// toString = String (value);
// console.log(`${value},через конструктор String ():`, toString);
// console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

// toString = value + "";
// console.log(`${value},через конкатенацию ` ,toString);
// console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

