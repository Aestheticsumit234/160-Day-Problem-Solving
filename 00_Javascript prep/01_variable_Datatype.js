//  How to declare variables in javascript
let name = "sumti sharma";
let Standerd = 3;

const pi = 3.14;
const surname = "sharma";

// Data type (primitive & non-primitive)

// Primitive
let Name = "sumit"; // String
let age = 20; // (20.0, 44.44) Number
let isMarried = true; // Boolean
let myNull = null; // (Object bug) Null
let myUndefined = undefined; // Undefined
let sumbol = Symbol(); // Symbol
let bigInt = 9007199254740991n; // BigInt

//non-primitive
let person = {
  name: "sumit",
  age: 20,
  isMarried: true,
};

// conversion of data type

// String
console.log(`------------conversion into String to number-----------`);
let numberToStr1 = 10; // number
let stringValue1 = String(numberToStr1); // string
console.log(`Number to String -> ${typeof stringValue1} -> ${stringValue1}`);

let NumberToStr2 = 858; // number
let stringValue2 = NumberToStr2.toString(); // string
console.log(`Number to String  -> ${typeof stringValue2} -> ${stringValue2}`);

let numberValue3 = 10; // number
let stringValue3 = ` ${numberValue3}`; // string
console.log(`Number to String  -> ${typeof stringValue3} -> ${stringValue3}`);

let numberValue4 = 10; // number
let stringValue4 = "" + numberValue4; // string
console.log(`Number to String  -> ${typeof stringValue4} -> ${stringValue4}`);

// Number
console.log(`-----------conversion into String to number------------`);

let stringValue5 = "10"; // string
let numberValue5 = Number(stringValue5); // number
console.log(`String to Number  -> ${typeof numberValue5} -> ${numberValue5}`);

let stringValue6 = "10"; // string
let numberValue6 = +stringValue6; // number
console.log(`String to Number  -> ${typeof numberValue6} -> ${numberValue6}`);

let stringValue7 = "10"; // string
let numberValue7 = parseInt(stringValue7); // number
console.log(`String to Number  -> ${typeof numberValue7} -> ${numberValue7}`);

let stringValue8 = "10"; // string
let numberValue8 = parseFloat(stringValue8); // number
console.log(`String to Number  -> ${typeof numberValue8} -> ${numberValue8}`);

let stringValue9 = "10"; // string
let numberValue9 = stringValue9 * 1; // number
console.log(`String to Number  -> ${typeof numberValue9} -> ${numberValue9}`);

// NaN

let stringValue10 = "10"; // string
let numberValue10 = stringValue10 / 0; // number
console.log(`String to Number  -> ${typeof numberValue10} -> ${numberValue10}`);

let stringValue11 = "10"; // string
let numberValue11 = stringValue11 % 0; // number
console.log(`String to Number  -> ${typeof numberValue11} -> ${numberValue11}`);

// operations
let num1 = 20;
let num2 = 30;

let sum = num1 + num2; // addition
let sub = num1 - num2; // difference
let mul = num1 * num2; // product
let div = num1 / num2; // quotient
let rem = num1 % num2; // remainder
let pow = num1 ** num2; // exponent

console.log(
  `sum -> ${sum}, sub -> ${sub},mul -> ${mul},div -> ${div},rem -> ${rem},pow -> ${pow}`
);

let x = 6;
let y = 4;

const check = x > y; // greater than
const check1 = x < y; // less than
const check2 = x >= y; // greater than or equal to
const check3 = x <= y; // less than or equal to
const check4 = x == y; // equal to
const check5 = x != y; // not equal to
const check6 = x === y; // strict equal to
const check7 = x !== y; // strict not equal to

console.log(
  `check -> ${check},check1 -> ${check1},check2 -> ${check2},check3 -> ${check3},check4 -> ${check4},check5 -> ${check5},check6 -> ${check6},check7 -> ${check7}`
);

// in js
// Read more about Math Library
// Read mere about Data & Time

// Math library
console.log(Math.max([1, 3, 5, 27, 49, 67]));
console.log(Math.min([1, 3, 5, 27, 49, 67]));
console.log(Math.random());
// ----------- Note -----------
// in nodejs
// Read more about crypto
// Read more about http

// Operations on String
let userName = "sumit";
let userLastName = "sharma";

// concatenation
let fullName = userName + " " + userLastName;
console.log(fullName);
