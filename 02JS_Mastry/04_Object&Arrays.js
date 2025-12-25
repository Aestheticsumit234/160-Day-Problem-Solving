// closure padhane hai

// Object
const users = {
  Namme: "amit",
  lastName: "Hehehe",
  Age: 56,
  isMarried: false,
  hasGirlfriend: false,
  address: function () {
    console.log(`Hello, I am ${this.Name}`);
  },
};

// Access
// Dot notation
// bracket notation
console.log(users.address());
console.log(users["user-name"]);

// let key = "name";
// console.log(users[key]); // galt hai

// update
users.isMarried = true;
users.hasGirlfriend = null;

// delete
delete users.Age;
console.log(users);

// Add
users.Class = 8;
console.log(users);

users.address();

// object Destructuring
// key renaming
let { Namme: Name, Age, isMarried, hasGirlfriend } = users;
console.log(Name);

// spread Operator
let user2 = { ...users, hasCow: false, hasOx: true };
console.log(user2);

// method
console.log(Object.keys(user2)); //aray
console.log(Object.values(user2)); // aray
console.log(Object.entries(user2));
for (const key in object) {
  if (!Object.hasOwn(object, key)) continue;

  const element = object[key];
}

// shallow copy and deep copy
const shallowCopy = {
  Namme: "Aman",
  lastName: "sah",
  isMarried: false,
  hasGirlfriend: false,
  address: "nahi hai",
  Class: "78th",
  hasCow: "5",
  hasOx: false,
  newAddress: {
    city: "jalandhar",
    state: "punjab",
    pin: {
      pin1: "144001",
      pin2: "144002",
    },
  },
};

// const newShallow = shallowCopy;

console.log("this shallow is------>", newShallow);
console.log("this old is------>", shallowCopy);

let newShallow = { ...shallowCopy }; //nested me kam nhi krta hai
// console.log(newShallow);
shallowCopy.Class = 23456789;

console.log("new object ------------------>", newShallow);

// Deep copy
let object1 = JSON.parse(JSON.stringify(shallowCopy));
console.log("objectnew--------->", object1);
shallowCopy.newAddress.pin.pin2 = "hello";
console.log("old---> ", shallowCopy);
10 - 9;

// 2 numbers compare karo:
// Print:
// “a is bigger”
// “b is bigger”
// “both equal”

let a = 10;
let b = 101;

if (a < b) {
  console.log("A is greater");
} else {
  console.log("B is greater then A");
}

let color = red; // stop
// let color = green; // go
// let color = yellow; // trafic nhi hai
if (color == "red") {
  console.log("Stop");
} else if (color == "green") {
  console.log("Go");
} else {
  console.log("Traffic nhi hai ");
}

// Q1. Double all numbers
const myNumber = [2, 4, 6, 8];
const newDoubledArr = myNumber.map((element, index) => element * 2);
// console.log(newDoubledArr);

const usersDetails = [
  { name: "Sumit", age: 19 },
  { name: "Raj", age: 22 },
  { name: "Neha", age: 20 },
];

// const NamedArr = [];
// for (let i = 0; i < userDetails.length; i++) {
//   NamedArr.push(userDetails[i].name);
// }

// console.log(NamedArr);

const newArr = usersDetails.map((userDetail) => userDetail.name);
// console.log(newArr);

const users = [
  { id: 1, first_name: "Sumit", last_name: "Sharma" },
  { id: 2, first_name: "Raj", last_name: "Verma" },
  { id: 3, first_name: "Neha", last_name: "Singh" },
];

const fullNameUsers = users.map((user) => ({
  id: user.id,
  fullName: `${user.first_name} ${user.last_name}`,
}));

console.log(fullNameUsers);

const products = [
  { id: 1, title: "iPhone", price: 80000 },
  { id: 2, title: "MacBook", price: 120000 },
];

const discoundedProducts = products.map((product) => ({
  id: product.id,
  title: product.title,
  price: `${product.price - (product.price * 10) / 100}`,
}));

console.log(discoundedProducts);

// 🟩 Scenario 3: Convert timestamps to readable dates
// Given timestamps:
// const timestamps = [1700000000000, 1710000000000];
// 👉 map() use karke readable date string banao.
// Example:
// ["2023-11-14", "2024-03-09"]

// 🟩 Scenario 4: Extract specific field from API
// Backend response:
// const orders = [
//   { id: 1, user: "Sumit", total: 1200, status: "delivered" },
//   { id: 2, user: "Raj", total: 500, status: "pending" }
// ];
// 👉 map() se sirf order amount ka array banao
// Output:
// [1200, 500]

// 🟩 Scenario 5: Adding a unique key to every item (backend processing)
// Given:
// const items = ["html", "css", "js"];
// 👉 map() se har item ko ek object me convert karo with id and tech.
// Output:
// [
//   { id: 1, tech: "html" },
//   { id: 2, tech: "css" },
//   { id: 3, tech: "js" }
// ]
let allSubject = ["math", "science", "sanskrit", "hindi"];

// first value
console.log(allSubject[0]);
console.log(allSubject[2]);
console.log(allSubject[5]);

// add
// allSubject.push("urdu");
// allSubject.pop("urdu");

const index = allSubject.indexOf("sanskrit");
if (index !== -1) {
  allSubject.splice(index, 2, "urdu", "EVS");
}

// console.log(allSubject); //  ["math", "science", "urdu", "EVS"];

let nums = [10, 30, 26, 49, 38, 80, 90];

// 80 == 999

// make a function that remove any item in the array  removeItem(80)

function removeItem(arr, value) {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}
removeItem(nums, 900);
// console.log(nums);

// red = stop green to chlo yellow slow down

let employes = [
  { Name: "john", salary: 2000000 },
  { Name: "deno", salary: 24064000 },
  { Name: "ram", salary: 4000 },
];

let maxs = employes.reduce((acc, cur) => {
  return acc.salary < cur.salary ? cur : acc;
});

console.log(maxs);

let marks = [10, 30, 26, 49, 38, 80, 90];
let pasingMarks = 35;
// output  4 reduce
const allPassedStudent = marks.reduce(
  (acc, cur) => (cur >= pasingMarks ? acc + 1 : acc),
  0
);

console.log(allPassedStudent);

let AmazonCart = [
  { item: "Mobile", price: 120444, Qty: 8 },
  { item: "Mouse", price: 499, Qty: 50 },
  { item: "keyboard", price: 12044, Qty: 90 },
];

const totalQyt = AmazonCart.reduce((acc, cur) => acc + cur.Qty, 0);
console.log(totalQyt);
