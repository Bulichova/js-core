//--TO STRING--- спосообы приведения типов данных к строке

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

value = 1;
toString = String (value);
console.log(`${value},через конструктор String ():`, toString);
console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

toString = value + "";
console.log(`${value},через конкатенацию ` ,toString);
console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

value = Infinity;
toString = String (value);
console.log(`${value},через конструктор String ():`, toString);
console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

toString = value + "";
console.log(`${value},через конкатенацию ` ,toString);
console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

value = NaN;
toString = String (value);
console.log(`${value},через конструктор String ():`, toString);
console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

toString = value + "";
console.log(`${value},через конкатенацию ` ,toString);
console.log(`тип данных ${value},через конкатенацию: `,typeof toString);


// ----------
// BOOLEAN (логическое)
// true к строке

value = true;

toString = String (value);
console.log(`${value},через конструктор String ():`, toString);
console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

toString = value + "";
console.log(`${value},через конкатенацию ` ,toString);
console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

// false к строке

value = false;

toString = String (value);
console.log(`${value},через конструктор String ():`, toString);
console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

toString = value + "";
console.log(`${value},через конкатенацию ` ,toString);
console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

// ----------
// UNDEFINED 

value = undefined;

toString = String (value);
console.log(`${value},через конструктор String ():`, toString);
console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

toString = value + "";
console.log(`${value},через конкатенацию ` ,toString);
console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

// ----------
// Null

value = null;

toString = String (value);
console.log(`${value},через конструктор String ():`, toString);
console.log(`тип данных ${value},через конструктор String ():`, typeof toString);

toString = value + "";
console.log(`${value},через конкатенацию ` ,toString);
console.log(`тип данных ${value},через конкатенацию: `,typeof toString);

