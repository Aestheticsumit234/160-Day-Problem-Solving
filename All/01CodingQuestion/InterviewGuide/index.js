// const studentId = {
//   id: 1,
//   name: "John",
//   age: 20,
//   marks: 80,
//   address: { ui: "123 Main St", city: "New York", state: "NY", zip: "10001" },
// };


// const copyed = { ...studentId };


let Arr = [1,2,3,4,5,3,2,4,5,10,4,5,6,7,10]

// using filter

// const arrays = Arr.filter((item, index) => Arr.indexOf(item) === index);
// console.log(arrays);



// using set

// const uniqueArr = [...new Set(Arr)];
// console.log(uniqueArr);



// function evenNum(arr){
//   return arr.filter((item) => item % 2 === 0)
// }
// console.log(evenNum(Arr));


// function evenNum(arr){
//   let evens = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//       evens.push(arr[i]);
//     }
//   }
//   return evens;
// }
// console.log(evenNum(Arr));

const original = { a: 1, b: { c: 2 } };
const deepClone = JSON.parse(JSON.stringify(original));
deepClone.a = 3
// console.log(deepClone);
// console.log(original);


// Write a function that takes an array of objects (users) and returns a new array sorted by a property, say "age".
function sortByAge(users) {
  return [...users].sort((a, b) => a.age - b.age);
}

// Example usage:
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];
console.log(sortByAge(users));


