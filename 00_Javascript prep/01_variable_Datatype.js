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
