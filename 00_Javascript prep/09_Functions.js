function greet(name) {
  console.log("Hello !", name);
}
greet("Sumit");
greet("Aman");
greet("Riya");

let globalVar = "i am global variable";
function modifyGlobal() {
  globalVar = "i am modified global variable";
  let blockScopVariable = "i am block scope variable";
  console.log(blockScopVariable);
}
modifyGlobal();
// console.log(globalVar);
let config = (function () {})(); //IIFF

let person1 = {
  name: "ravi",
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};
console.log("Hii...");
setTimeout(() => {
  console.log("I am inside setTimeout");
}, 0);
Promise.resolve("Resolved Promise 1").then((res) => console.log(res));
console.log("Bye!..");
