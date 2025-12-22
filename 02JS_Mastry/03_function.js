function nmae(para1, para2) {} // it is factory that do some specific tasks
// code reuse
// Easy to ready
// Esay to maintain
// Avoid Repetition

// types of function

// checking isHoisted
Greet();
// Greet2(1, 2);
// square(2);

// function Declearation
function Greet() {
  console.log("Hello");
}
// Hoisted
// it has own this
// Deceleration me dono milta hai this and Hoisted

// Function expression
const Greet2 = function (a, b) {
  console.log(a + b);
};
Greet2(1, 2);
// Hoisted nhi hota
// it has own this
// expression me dono nhi milta hai this and no Hoisted

// Arrow function
const square = (x) => x * x;
// Hoisted nhi hota
// it has't own this but it use parent this

// Anonymous Function
setTimeout(function () {
  console.log("this");
}, 1000);
// Hoisted nhi hota
// khud ka this hota

// Named Function Expression
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
};
// Hoisted nhi hoga
// this hota hai khud ka

// IIFE
(function () {
  console.log("IIFE id Running...");
})();
// Hoisted nhi hota
// this hota hai khud ka

// callback
function greet(cb) {
  cb();
}
// event
// asyn task

// HOF
[].map(() => {});
// hoiseted depends
// this depends

// Async Function
async function fetchAPI() {
  await fetch(aPI);
}
// hoisted hoga but agr aapne Declared function
// this hota hai

// constructor function
function User(name = "amit") {
  this.name = name;
}

// method function
const user = {
  greet() {
    console.log("this hota hai");
  },
};

// Rest parameter Function
function sum(...numbr) {
  return numbr.reduce((a, b) => a + b, 0);
}

// Recursive function
function readFolder(folder) {
  folder.file.forEach((file) => console.log(file));
  folder.subFoldedrs.forEach((sub) => readFolder(sub));
}

// pure function => Redux Reducer
function counter(state = 0, action) {
  if ((action.type = "Include")) {
    return state + 1;
  }
  return state;
}
